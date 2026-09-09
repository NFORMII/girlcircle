import { useState } from "react";
import { useApp } from "../context/AppContext";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, Send, Search, MessageCircle, CheckCircle2 } from "lucide-react";

export default function QA() {
  const { questions, addQuestion, upvoteQuestion, addAnswer } = useApp();
  const [newQ, setNewQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [answeringId, setAnsweringId] = useState(null);
  const [answerText, setAnswerText] = useState("");

  const filtered = questions
    .filter((q) => {
      if (filter === "answered") return q.answer;
      if (filter === "unanswered") return !q.answer;
      return true;
    })
    .filter((q) => q.text.toLowerCase().includes(search.toLowerCase()));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQ.trim()) return;
    addQuestion(newQ.trim());
    setNewQ("");
  };

  const handleAnswer = (questionId) => {
    if (!answerText.trim()) return;
    addAnswer(questionId, answerText.trim(), "Educator");
    setAnswerText("");
    setAnsweringId(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-24 md:pb-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Anonymous Q&A</h1>
        <p className="text-gray-500">
          Ask anything — your identity stays private. Verified educators respond.
        </p>
      </div>

      {/* Ask question */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 shadow-sm border border-pink-50 mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg shrink-0">
            🦊
          </div>
          <div className="flex-1">
            <textarea
              value={newQ}
              onChange={(e) => setNewQ(e.target.value)}
              placeholder="Type your anonymous question..."
              className="w-full resize-none border-0 outline-none text-gray-700 placeholder:text-gray-300 bg-transparent min-h-[60px]"
              rows={2}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-400">Your identity is hidden</span>
              <button
                type="submit"
                disabled={!newQ.trim()}
                className="flex items-center gap-1.5 bg-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-pink-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} /> Ask
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-pink-300"
          />
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {["all", "answered", "unanswered"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                filter === f ? "bg-white text-pink-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <MessageCircle size={40} className="mx-auto mb-3 opacity-50" />
            <p>No questions yet. Be the first to ask!</p>
          </div>
        )}
        {filtered.map((q) => (
          <div key={q.id} className="bg-white rounded-2xl p-5 shadow-sm border border-pink-50">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-lg shrink-0">
                {q.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">{q.author}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-xs text-gray-400">
                    {formatDistanceToNow(new Date(q.timestamp), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-gray-800 font-medium mb-3">{q.text}</p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => upvoteQuestion(q.id)}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <ThumbsUp size={14} /> {q.upvotes}
                  </button>
                  {!q.answer && (
                    <button
                      onClick={() => setAnsweringId(answeringId === q.id ? null : q.id)}
                      className="text-xs text-purple-500 hover:text-purple-600 font-medium"
                    >
                      + Educator Answer
                    </button>
                  )}
                </div>

                {/* Answer */}
                {q.answer && (
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-sm font-semibold text-green-700">{q.answer.educator}</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Verified</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{q.answer.text}</p>
                  </div>
                )}

                {/* Answer input */}
                {answeringId === q.id && !q.answer && (
                  <div className="mt-4 bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <p className="text-xs text-purple-600 font-medium mb-2">Reply as Educator</p>
                    <textarea
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      placeholder="Write your verified answer..."
                      className="w-full resize-none border border-purple-200 rounded-lg p-3 text-sm outline-none focus:border-purple-400 bg-white"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        onClick={() => { setAnsweringId(null); setAnswerText(""); }}
                        className="px-3 py-1.5 text-xs text-gray-500 hover:text-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id)}
                        disabled={!answerText.trim()}
                        className="px-4 py-1.5 bg-purple-500 text-white text-xs font-medium rounded-lg hover:bg-purple-600 disabled:opacity-40 transition-colors"
                      >
                        Post Answer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
