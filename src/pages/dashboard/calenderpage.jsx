import React, { useState } from "react";

const events = {};

const CalendarPage = () => {
    const [month] = useState("August 2026");
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const firstDay = 6; // Sat
    const cells = [...Array(firstDay).fill(null), ...days];
    const today = 12;

    return (
        <div className="space-y-6" data-testid="calendar-page">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">Calendar</h2>
                    <p className="text-sm text-slate-500">Your interviews and events</p>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600"><i className="fa-solid fa-chevron-left"></i></button>
                    <div className="px-4 font-semibold text-slate-900">{month}</div>
                    <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="grid grid-cols-7 gap-3 text-center text-xs font-semibold text-slate-500 mb-3">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-3">
                    {cells.map((d, i) => (
                        <div key={i} className={`aspect-square rounded-xl p-2 text-left ${d === null ? "" : "border border-slate-100"} ${d === today ? "bg-violet-600 text-white border-violet-600" : "bg-white"}`}>
                            {d !== null && (
                                <>
                                    <div className={`text-sm font-bold ${d === today ? "text-white" : "text-slate-900"}`}>{d}</div>
                                    <div className="mt-1 space-y-1">
                                        {events[d]?.slice(0, 2).map((e, k) => (
                                            <div key={k} className={`text-[9px] px-1.5 py-0.5 rounded truncate ${d === today ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700"}`}>
                                                {e.time} {e.t}
                                            </div>
                                        ))}
                                        {events[d]?.length > 2 && (
                                            <div className={`text-[9px] ${d === today ? "text-white/80" : "text-slate-400"}`}>+{events[d].length - 2} more</div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
