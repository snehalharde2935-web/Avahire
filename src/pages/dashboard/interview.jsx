import React from "react";

const interviews = [
    { id: 1, name: "Rahul Sharma", role: "Frontend Developer", date: "24 May", time: "10:00 AM", status: "Upcoming", interviewer: "Priya Mehta" },
    { id: 2, name: "Anjali Patel", role: "Data Analyst", date: "24 May", time: "11:30 AM", status: "Upcoming", interviewer: "Rahul Verma" },
    { id: 3, name: "Vikram Singh", role: "Data Scientist", date: "25 May", time: "02:00 PM", status: "Upcoming", interviewer: "Priya Mehta" },
    { id: 4, name: "Neha Patel", role: "UI/UX Designer", date: "22 May", time: "04:00 PM", status: "Completed", interviewer: "Sneha Kapoor", score: 82 },
    { id: 5, name: "Rohan Das", role: "Backend Developer", date: "21 May", time: "11:00 AM", status: "Completed", interviewer: "Priya Mehta", score: 75 },
];

const statusColor = {
    Upcoming: "bg-blue-100 text-blue-700",
    Completed: "bg-emerald-100 text-emerald-700",
    Cancelled: "bg-rose-100 text-rose-700",
};

const Interviews = () => (
    <div className="space-y-6" data-testid="interviews-page">
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Interviews</h2>
                <p className="text-sm text-slate-500">Track and manage all interview sessions</p>
            </div>
            <button className="btn-primary px-5 py-2.5 rounded-full text-white font-semibold text-sm flex items-center gap-2">
                <i className="fa-solid fa-calendar-plus"></i> Schedule Interview
            </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((iv) => (
                <div key={iv.id} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover" data-testid={`interview-${iv.id}`}>
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                                {iv.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">{iv.name}</div>
                                <div className="text-xs text-slate-500">{iv.role}</div>
                            </div>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${statusColor[iv.status]}`}>{iv.status}</span>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                        <div><i className="fa-regular fa-calendar mr-2 text-violet-500"></i>{iv.date} · <i className="fa-regular fa-clock ml-1 mr-1 text-violet-500"></i>{iv.time}</div>
                        <div><i className="fa-solid fa-user-tie mr-2 text-violet-500"></i>{iv.interviewer}</div>
                        {iv.score && (
                            <div><i className="fa-solid fa-star mr-2 text-amber-500"></i>AI Score: <span className="font-bold text-slate-900">{iv.score}/100</span></div>
                        )}
                    </div>
                    <div className="mt-5 flex gap-2">
                        {iv.status === "Upcoming" ? (
                            <>
                                <button className="btn-primary flex-1 py-2.5 rounded-lg text-white font-semibold text-xs"><i className="fa-solid fa-video mr-1"></i>Join</button>
                                <button className="px-3 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-xs"><i className="fa-regular fa-calendar"></i></button>
                            </>
                        ) : (
                            <button className="flex-1 py-2.5 rounded-lg border border-slate-200 font-semibold text-xs text-slate-800">View Report</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Interviews;
