import { createContext, useContext, useState, useEffect } from "react";
import { mockQuestions, educationModules, anonymousAvatars } from "../data/mockData";

const AppContext = createContext();

const STORAGE_KEYS = {
  QUESTIONS: "girlcircle_questions",
  CYCLE_DATA: "girlcircle_cycle",
  MODULE_PROGRESS: "girlcircle_modules",
};

function loadFromStorage(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function AppProvider({ children }) {
  const [questions, setQuestions] = useState(() =>
    loadFromStorage(STORAGE_KEYS.QUESTIONS, mockQuestions)
  );
  const [cycleData, setCycleData] = useState(() =>
    loadFromStorage(STORAGE_KEYS.CYCLE_DATA, {
      periods: [],
      averageCycleLength: 28,
      averagePeriodLength: 5,
    })
  );
  const [moduleProgress, setModuleProgress] = useState(() =>
    loadFromStorage(STORAGE_KEYS.MODULE_PROGRESS, {})
  );

  useEffect(() => saveToStorage(STORAGE_KEYS.QUESTIONS, questions), [questions]);
  useEffect(() => saveToStorage(STORAGE_KEYS.CYCLE_DATA, cycleData), [cycleData]);
  useEffect(() => saveToStorage(STORAGE_KEYS.MODULE_PROGRESS, moduleProgress), [moduleProgress]);

  const addQuestion = (text) => {
    const avatar = anonymousAvatars[Math.floor(Math.random() * anonymousAvatars.length)];
    const newQ = {
      id: Date.now(),
      text,
      author: "Anonymous",
      avatar,
      timestamp: new Date().toISOString(),
      upvotes: 0,
      answer: null,
    };
    setQuestions((prev) => [newQ, ...prev]);
  };

  const upvoteQuestion = (id) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, upvotes: q.upvotes + 1 } : q))
    );
  };

  const addAnswer = (questionId, text, educator) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answer: {
                text,
                educator,
                verified: true,
                timestamp: new Date().toISOString(),
              },
            }
          : q
      )
    );
  };

  const logPeriod = (date) => {
    setCycleData((prev) => ({
      ...prev,
      periods: [...prev.periods, { date, id: Date.now() }],
    }));
  };

  const removePeriod = (id) => {
    setCycleData((prev) => ({
      ...prev,
      periods: prev.periods.filter((p) => p.id !== id),
    }));
  };

  const completeLesson = (moduleId, lessonId) => {
    setModuleProgress((prev) => {
      const current = prev[moduleId] || { completed: [], quizScore: null };
      const completed = current.completed.includes(lessonId)
        ? current.completed
        : [...current.completed, lessonId];
      return { ...prev, [moduleId]: { ...current, completed } };
    });
  };

  const submitQuizScore = (moduleId, score) => {
    setModuleProgress((prev) => ({
      ...prev,
      [moduleId]: { ...prev[moduleId], quizScore: score },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        cycleData,
        moduleProgress,
        modules: educationModules,
        addQuestion,
        upvoteQuestion,
        addAnswer,
        logPeriod,
        removePeriod,
        completeLesson,
        submitQuizScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
