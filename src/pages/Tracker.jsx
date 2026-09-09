import { useState } from "react";
import { useApp } from "../context/AppContext";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths, isWithinInterval, addDays } from "date-fns";
import { ChevronLeft, ChevronRight, Trash2, CalendarDays, Droplets, Info } from "lucide-react";

export default function Tracker() {
  const { cycleData, logPeriod, removePeriod } = useApp();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showInfo, setShowInfo] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDay = monthStart.getDay();
  const emptyDaysBefore = Array.from({ length: startDay }, (_, i) => i);

  const isPeriodDay = (day) =>
    cycleData.periods.some((p) => {
      const periodDate = new Date(p.date);
      return isSameDay(day, periodDate);
    });

  const isPredictedPeriod = (day) => {
    if (cycleData.periods.length < 2) return false;
    const sorted = [...cycleData.periods]
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    const last = new Date(sorted[sorted.length - 1].date);
    const avg = cycleData.averageCycleLength;
    const nextStart = addDays(last, avg);
    const nextEnd = addDays(nextStart, cycleData.averagePeriodLength - 1);
    return isWithinInterval(day, { start: nextStart, end: nextEnd }) && day > new Date();
  };

  const today = new Date();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 md:pb-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Cycle Tracker</h1>
        <p className="text-gray-500">Your data stays on this device — 100% private</p>
      </div>

      {/* Info banner */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="w-full flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2.5 rounded-xl mb-4 text-left"
      >
        <Info size={16} />
        <span>Tap on any day to log your period. {showInfo ? "Click to hide" : "Learn more"}</span>
      </button>
      {showInfo && (
        <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700 mb-4 leading-relaxed">
          <p><strong>Pink dots</strong> = days you logged as period days</p>
          <p className="mt-1"><strong>Purple dots</strong> = predicted period (based on your average cycle)</p>
          <p className="mt-1">Log at least 2 periods for predictions to appear. Average cycle: {cycleData.averageCycleLength} days</p>
        </div>
      )}

      {/* Calendar */}
      <div className="bg-white rounded-2xl shadow-sm border border-pink-50 overflow-hidden">
        {/* Month nav */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h2 className="font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 text-xs text-gray-400 font-medium px-2 pt-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center py-1">{d}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1 p-2">
          {emptyDaysBefore.map((i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((day) => {
            const period = isPeriodDay(day);
            const predicted = isPredictedPeriod(day);
            const isToday = isSameDay(day, today);

            return (
              <button
                key={day.toISOString()}
                onClick={() => {
                  if (isSameDay(day, today) || day < today) {
                    if (period) {
                      const entry = cycleData.periods.find((p) => isSameDay(new Date(p.date), day));
                      if (entry) removePeriod(entry.id);
                    } else if (day <= today) {
                      logPeriod(day.toISOString());
                    }
                  }
                }}
                className={`relative aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-all ${
                  period
                    ? "bg-pink-500 text-white font-bold shadow-sm"
                    : predicted
                    ? "bg-pink-100 text-pink-600 border border-dashed border-pink-300"
                    : isToday
                    ? "bg-purple-100 text-purple-700 font-bold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {format(day, "d")}
                {period && <div className="w-1.5 h-1.5 bg-white rounded-full mt-0.5" />}
                {predicted && !period && <Droplets size={10} className="text-pink-400 mt-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-pink-500" /> Period day
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full border-2 border-dashed border-pink-300" /> Predicted
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-purple-100" /> Today
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-pink-50">
          <CalendarDays size={20} className="mx-auto text-pink-500 mb-1" />
          <div className="text-2xl font-bold text-gray-800">{cycleData.periods.length}</div>
          <div className="text-xs text-gray-400">Periods logged</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-pink-50">
          <Droplets size={20} className="mx-auto text-purple-500 mb-1" />
          <div className="text-2xl font-bold text-gray-800">{cycleData.averageCycleLength}</div>
          <div className="text-xs text-gray-400">Avg cycle (days)</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-pink-50">
          <span className="text-lg">📅</span>
          <div className="text-2xl font-bold text-gray-800">{cycleData.averagePeriodLength}</div>
          <div className="text-xs text-gray-400">Avg period (days)</div>
        </div>
      </div>
    </div>
  );
}
