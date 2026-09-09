import { useState } from "react";
import { useApp } from "../context/AppContext";
import { CheckCircle2, Circle, ArrowLeft, ArrowRight, Award, RotateCcw } from "lucide-react";

export default function Education() {
  const { modules, moduleProgress, completeLesson, submitQuizScore } = useApp();
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const mod = modules.find((m) => m.id === selectedModule);
  const progress = mod ? moduleProgress[mod.id] || { completed: [], quizScore: null } : null;

  const handleCompleteLesson = () => {
    if (!mod) return;
    completeLesson(mod.id, mod.lessons[currentLesson].id);
  };

  const handleNext = () => {
    if (!mod) return;
    handleCompleteLesson();
    if (currentLesson < mod.lessons.length - 1) {
      setCurrentLesson((p) => p + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) setCurrentLesson((p) => p - 1);
  };

  const handleQuizSubmit = () => {
    if (!mod) return;
    let score = 0;
    mod.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) score++;
    });
    submitQuizScore(mod.id, score);
    setQuizSubmitted(true);
  };

  const openModule = (id) => {
    setSelectedModule(id);
    setCurrentLesson(0);
    setShowQuiz(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const resetModule = () => {
    setShowQuiz(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setCurrentLesson(0);
  };

  // Module detail view
  if (mod && showQuiz) {
    const score = quizSubmitted
      ? mod.quiz.filter((q, i) => quizAnswers[i] === q.correct).length
      : null;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 pb-24 md:pb-8">
        <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); }} className="flex items-center gap-1 text-gray-500 hover:text-pink-500 text-sm mb-6">
          <ArrowLeft size={16} /> Back to lessons
        </button>
        <h2 className="text-2xl font-bold mb-6">{mod.icon} Quiz Time!</h2>
        {mod.quiz.map((q, qi) => (
          <div key={qi} className="bg-white rounded-xl p-5 shadow-sm border border-pink-50 mb-4">
            <p className="font-medium text-gray-800 mb-3">{qi + 1}. {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => (
                <label
                  key={oi}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    quizAnswers[qi] === oi
                      ? "border-pink-400 bg-pink-50"
                      : "border-gray-200 hover:border-gray-300"
                  } ${quizSubmitted ? (oi === q.correct ? "border-green-400 bg-green-50" : quizAnswers[qi] === oi ? "border-red-400 bg-red-50" : "opacity-60") : ""}`}
                >
                  <input
                    type="radio"
                    name={`q${qi}`}
                    checked={quizAnswers[qi] === oi}
                    onChange={() => !quizSubmitted && setQuizAnswers((p) => ({ ...p, [qi]: oi }))}
                    disabled={quizSubmitted}
                    className="accent-pink-500"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        {!quizSubmitted ? (
          <button
            onClick={handleQuizSubmit}
            disabled={Object.keys(quizAnswers).length < mod.quiz.length}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg disabled:opacity-40 transition-all"
          >
            Submit Quiz
          </button>
        ) : (
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 text-center border border-pink-100">
            <Award size={48} className="mx-auto text-amber-500 mb-3" />
            <h3 className="text-2xl font-bold mb-1">{score}/{mod.quiz.length}</h3>
            <p className="text-gray-600 mb-4">
              {score === mod.quiz.length ? "Perfect score! 🎉" : "Great effort! Review the lessons and try again."}
            </p>
            <div className="flex gap-3 justify-center">
              <button onClick={resetModule} className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-pink-500 border border-gray-200">
                <RotateCcw size={14} /> Retry
              </button>
              <button onClick={() => setSelectedModule(null)} className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600">
                Back to Modules
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Module detail view - lessons
  if (mod) {
    const lesson = mod.lessons[currentLesson];
    const isComplete = progress?.completed.includes(lesson.id);
    const allDone = progress?.completed.length === mod.lessons.length;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 pb-24 md:pb-8">
        <button onClick={() => setSelectedModule(null)} className="flex items-center gap-1 text-gray-500 hover:text-pink-500 text-sm mb-6">
          <ArrowLeft size={16} /> All Modules
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{mod.icon}</span>
          <div>
            <h2 className="text-xl font-bold">{mod.title}</h2>
            <p className="text-sm text-gray-500">Lesson {currentLesson + 1} of {mod.lessons.length}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all"
            style={{ width: `${((currentLesson + 1) / mod.lessons.length) * 100}%` }}
          />
        </div>

        {/* Lesson content */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-bold text-gray-800">{lesson.title}</h3>
            {isComplete && <CheckCircle2 size={18} className="text-green-500" />}
          </div>
          <p className="text-gray-600 leading-relaxed">{lesson.content}</p>
          <div className="mt-4 text-xs text-gray-400">⏱ {lesson.duration}</div>
        </div>

        {/* Lesson dots */}
        <div className="flex justify-center gap-2 mb-6">
          {mod.lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { handleCompleteLesson(); setCurrentLesson(i); }}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentLesson ? "bg-pink-500" : progress?.completed.includes(l.id) ? "bg-green-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentLesson === 0}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 disabled:opacity-30 transition-colors"
          >
            <ArrowLeft size={16} /> Previous
          </button>
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:shadow-lg transition-all"
          >
            {currentLesson === mod.lessons.length - 1 ? "Take Quiz" : "Next"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Module grid
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Learn & Grow</h1>
        <p className="text-gray-500">Bite-sized lessons about your body, health, and hygiene</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {modules.map((m) => {
          const prog = moduleProgress[m.id];
          const completedCount = prog?.completed.length || 0;
          const pct = Math.round((completedCount / m.lessons.length) * 100);

          return (
            <button
              key={m.id}
              onClick={() => openModule(m.id)}
              className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 hover:shadow-md hover:border-pink-100 transition-all text-left"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${m.color} text-white`}>
                {m.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{m.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{m.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span>{m.totalLessons} lessons + quiz</span>
                {prog?.quizScore !== null && prog?.quizScore !== undefined && (
                  <span className="text-amber-500 font-medium">Quiz: {prog.quizScore}/{m.quiz.length}</span>
                )}
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all ${pct === 100 ? "bg-green-400" : "bg-gradient-to-r from-pink-400 to-purple-500"}`} style={{ width: `${pct}%` }} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
