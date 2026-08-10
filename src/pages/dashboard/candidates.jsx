import React, { useState } from "react";

const seed = [
    { id: 1, name: "Rahul Sharma", role: "Frontend Developer", score: 92, stage: "Shortlisted", exp: "5y", loc: "Bengaluru" },
    { id: 2, name: "Anjali Patel", role: "Data Analyst", score: 88, stage: "Shortlisted", exp: "3y", loc: "Mumbai" },
    { id: 3, name: "Saurabh Mishra", role: "Backend Developer", score: 75, stage: "Screened", exp: "6y", loc: "Remote" },
    { id: 4, name: "Neha Kapoor", role: "UI/UX Designer", score: 68, stage: "Screened", exp: "4y", loc: "Bengaluru" },
    { id: 5, name: "Amit Verma", role: "DevOps Engineer", score: 45, stage: "Rejected", exp: "2y", loc: "Delhi" },
    { id: 6, name: "Priya Singh", role: "Frontend Developer", score: 82, stage: "Interviewed", exp: "4y", loc: "Chennai" },
    { id: 7, name: "Karan Malhotra", role: "Product Manager", score: 90, stage: "Selected", exp: "7y", loc: "Pune" },
];

const stageColor = {
    Applied: "bg-slate-100 text-slate-700",
    Screened: "bg-blue-100 text-blue-700",
    Shortlisted: "bg-emerald-100 text-emerald-700",
    Interviewed: "bg-amber-100 text-amber-700",
    Selected: "bg-violet-100 text-violet-700",
    Rejected: "bg-rose-100 text-rose-700",
};

const Candidates = () => {
    const [q, setQ] = useState("");
    const [filter, setFilter] = useState("All");
    const filtered = seed.filter((c) =>
        (filter === "All" || c.stage === filter) &&
        (c.name.toLowerCase().includes(q.toLowerCase()) || c.role.toLowerCase().includes(q.toLowerCase()))
    );
    return (
        <div className="space-y-6" data-testid="candidates-page">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">Candidates</h2>
                    <p className="text-sm text-slate-500">All talent in your pipeline</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                        <input data-testid="candidates-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm w-64 focus:outline-none focus:border-violet-500" />
                    </div>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm">
                        {["All", "Applied", "Screened", "Shortlisted", "Interviewed", "Selected", "Rejected"].map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-xs text-slate-500 border-b border-slate-100 bg-slate-50/60">
                            <th className="text-left font-medium py-3 px-6">Name</th>
                            <th className="text-left font-medium">Job Role</th>
                            <th className="text-left font-medium">Match Score</th>
                            <th className="text-left font-medium">Stage</th>
                            <th className="text-left font-medium">Experience</th>
                            <th className="text-left font-medium">Location</th>
                            <th className="text-left font-medium pr-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((c) => (
                            <tr key={c.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/40">
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                                            {c.name.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <div className="font-semibold text-slate-900">{c.name}</div>
                                    </div>
                                </td>
                                <td className="text-slate-500">{c.role}</td>
                                <td>
                                    <span className={`font-bold ${c.score >= 80 ? "text-emerald-600" : c.score >= 65 ? "text-amber-600" : "text-rose-600"}`}>{c.score}%</span>
                                </td>
                                <td>
                                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${stageColor[c.stage]}`}>{c.stage}</span>
                                </td>
                                <td className="text-slate-500">{c.exp}</td>
                                <td className="text-slate-500">{c.loc}</td>
                                <td className="pr-6">
                                    <div className="flex gap-2 text-slate-400">
                                        <button className="hover:text-violet-600" title="View"><i className="fa-solid fa-eye"></i></button>
                                        <button className="hover:text-violet-600" title="Email"><i className="fa-solid fa-envelope"></i></button>
                                        <button className="hover:text-slate-700"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Candidates;
