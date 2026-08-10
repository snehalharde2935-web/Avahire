import React from "react";
import { Link } from "react-router-dom";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell,
} from "recharts";

const kpis = [
    { icon: "fa-briefcase", color: "bg-violet-100 text-violet-600", label: "Total Jobs", value: "12", sub: "2 Active Jobs", subColor: "text-slate-400" },
    { icon: "fa-users", color: "bg-emerald-100 text-emerald-600", label: "Total Candidates", value: "342", sub: "+28 this week", subColor: "text-emerald-600" },
    { icon: "fa-calendar", color: "bg-blue-100 text-blue-600", label: "Interviews Scheduled", value: "28", sub: "8 Today", subColor: "text-blue-600" },
    { icon: "fa-chart-line", color: "bg-amber-100 text-amber-600", label: "Completed Interviews", value: "56", sub: "This month", subColor: "text-slate-400" },
    { icon: "fa-circle-check", color: "bg-rose-100 text-rose-600", label: "Selected Candidates", value: "08", sub: "This month", subColor: "text-slate-400" },
];

const weekData = [
    { d: "Mon", v: 6 }, { d: "Tue", v: 12 }, { d: "Wed", v: 7 }, { d: "Thu", v: 18 },
    { d: "Fri", v: 11 }, { d: "Sat", v: 5 }, { d: "Sun", v: 3 },
];

const stageData = [
    { name: "Applied", value: 120, pct: "35%", color: "#3b82f6" },
    { name: "Screening", value: 88, pct: "26%", color: "#8b5cf6" },
    { name: "Interview", value: 76, pct: "22%", color: "#f59e0b" },
    { name: "Interviewed", value: 42, pct: "12%", color: "#14b8a6" },
    { name: "Selected", value: 16, pct: "5%", color: "#22c55e" },
];

const jobs = [
    { t: "Frontend Developer", d: "Engineering", c: 45, s: "Active", date: "20 May 2024" },
    { t: "Backend Developer", d: "Engineering", c: 38, s: "Active", date: "18 May 2024" },
    { t: "Data Scientist", d: "Data Science", c: 32, s: "Active", date: "15 May 2024" },
    { t: "UI/UX Designer", d: "Design", c: 28, s: "Draft", date: "10 May 2024" },
    { t: "DevOps Engineer", d: "Engineering", c: 26, s: "Draft", date: "05 May 2024" },
];

const upcoming = [
    { n: "Rahul Sharma", r: "Frontend Developer", d: "24 May 2024", t: "10:00 AM", s: "Today", color: "bg-emerald-100 text-emerald-700" },
    { n: "Anjali Mehta", r: "Backend Developer", d: "24 May 2024", t: "11:30 AM", s: "Today", color: "bg-emerald-100 text-emerald-700" },
    { n: "Vikram Singh", r: "Data Scientist", d: "25 May 2024", t: "02:00 PM", s: "Tomorrow", color: "bg-blue-100 text-blue-700" },
    { n: "Neha Patel", r: "UI/UX Designer", d: "25 May 2024", t: "04:30 PM", s: "Tomorrow", color: "bg-blue-100 text-blue-700" },
    { n: "Arjun Verma", r: "DevOps Engineer", d: "26 May 2024", t: "11:00 AM", s: "Upcoming", color: "bg-amber-100 text-amber-700" },
];

const activity = [
    { i: "fa-cloud-arrow-up", c: "bg-emerald-100 text-emerald-600", t: "12 resumes uploaded for Frontend Developer", by: "by Priya Mehta", time: "2h ago" },
    { i: "fa-calendar-plus", c: "bg-violet-100 text-violet-600", t: "Interview scheduled with Rahul Sharma", by: "Frontend Developer", time: "3h ago" },
    { i: "fa-circle-check", c: "bg-blue-100 text-blue-600", t: "Interview completed with Anjali Mehta", by: "Backend Developer", time: "5h ago" },
    { i: "fa-envelope", c: "bg-amber-100 text-amber-600", t: "Interview link sent to 8 candidates", by: "by Priya Mehta", time: "1d ago" },
    { i: "fa-trophy", c: "bg-rose-100 text-rose-600", t: "Vikram Singh moved to Selected", by: "Data Scientist", time: "1d ago" },
];

const Dashboard = () => {
    return (
        <div className="space-y-6" data-testid="dashboard-page">
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {kpis.map((k) => (
                    <div key={k.label} data-testid={`kpi-${k.label.toLowerCase().replace(/\s+/g, "-")}`} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm card-hover">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="text-xs text-slate-500 font-medium">{k.label}</div>
                                <div className="text-3xl font-extrabold text-slate-900 mt-1">{k.value}</div>
                                <div className={`text-xs mt-1 ${k.subColor}`}>{k.sub}</div>
                            </div>
                            <div className={`w-11 h-11 rounded-xl ${k.color} flex items-center justify-center`}>
                                <i className={`fa-solid ${k.icon}`}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Row 1: chart + donut + top jobs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-slate-900">Interviews Overview</div>
                        <select className="text-xs border border-slate-200 rounded-lg px-3 py-1.5">
                            <option>This Week</option><option>This Month</option>
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height={220}>
                        <AreaChart data={weekData}>
                            <defs>
                                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
                                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="d" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0" }} />
                            <Area type="monotone" dataKey="v" stroke="#7c3aed" strokeWidth={3} fill="url(#g1)" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {[
                            { l: "Total", v: "28", c: "text-slate-900" },
                            { l: "Scheduled", v: "18", c: "text-violet-600" },
                            { l: "In Progress", v: "6", c: "text-amber-600" },
                            { l: "Completed", v: "4", c: "text-emerald-600" },
                        ].map((s) => (
                            <div key={s.l}>
                                <div className="text-xs text-slate-500">{s.l}</div>
                                <div className={`text-xl font-bold ${s.c}`}>{s.v}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="font-bold text-slate-900 mb-4">Candidates by Stage</div>
                    <div className="flex items-center gap-4">
                        <div className="relative w-40 h-40">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={stageData} innerRadius={44} outerRadius={70} paddingAngle={2} dataKey="value">
                                        {stageData.map((e, i) => <Cell key={i} fill={e.color} />)}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <div className="text-2xl font-extrabold text-slate-900">342</div>
                                <div className="text-xs text-slate-500">Total</div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-2">
                            {stageData.map((s) => (
                                <div key={s.name} className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                                        <span className="text-slate-700 font-medium">{s.name}</span>
                                    </div>
                                    <span className="text-slate-500">{s.value} ({s.pct})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-slate-900">Top Job Openings</div>
                        <Link to="/app/jobs" className="text-xs text-violet-600 font-semibold">View All</Link>
                    </div>
                    <div className="space-y-3">
                        {[
                            { t: "Frontend Developer", d: "Engineering", c: 45, s: "Active", icon: "fa-code", ic: "bg-violet-100 text-violet-600" },
                            { t: "Backend Developer", d: "Engineering", c: 38, s: "Active", icon: "fa-server", ic: "bg-blue-100 text-blue-600" },
                            { t: "Data Scientist", d: "Data Science", c: 32, s: "Active", icon: "fa-chart-line", ic: "bg-emerald-100 text-emerald-600" },
                            { t: "UI/UX Designer", d: "Design", c: 28, s: "Draft", icon: "fa-pen-ruler", ic: "bg-amber-100 text-amber-600" },
                            { t: "DevOps Engineer", d: "Engineering", c: 26, s: "Draft", icon: "fa-gears", ic: "bg-rose-100 text-rose-600" },
                        ].map((j) => (
                            <div key={j.t} className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-lg ${j.ic} flex items-center justify-center text-sm`}>
                                    <i className={`fa-solid ${j.icon}`}></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-slate-900 truncate">{j.t}</div>
                                    <div className="text-xs text-slate-500">{j.d}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-bold text-slate-900">{j.c}</div>
                                    <div className="text-[10px] text-slate-400">Candidates</div>
                                </div>
                                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${j.s === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{j.s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Row 2: recent jobs + upcoming interviews + recent activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-slate-900">Recent Jobs</div>
                        <Link to="/app/jobs" className="text-xs text-violet-600 font-semibold">View All Jobs</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-xs text-slate-500 border-b border-slate-100">
                                    <th className="text-left font-medium py-2">Job Title</th>
                                    <th className="text-left font-medium">Dept</th>
                                    <th className="text-left font-medium">Cand</th>
                                    <th className="text-left font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((j) => (
                                    <tr key={j.t} className="border-b border-slate-50 last:border-0">
                                        <td className="py-3 font-medium text-slate-900">{j.t}</td>
                                        <td className="text-slate-500">{j.d}</td>
                                        <td className="text-slate-900 font-semibold">{j.c}</td>
                                        <td>
                                            <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${j.s === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{j.s}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-slate-900">Upcoming Interviews</div>
                        <Link to="/app/calendar" className="text-xs text-violet-600 font-semibold">View Calendar</Link>
                    </div>
                    <div className="space-y-3">
                        {upcoming.map((u) => (
                            <div key={u.n} className="flex items-center gap-3 py-2">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                                    {u.n.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-slate-900 truncate">{u.n}</div>
                                    <div className="text-xs text-slate-500 truncate">{u.r}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[11px] text-slate-500">{u.d}</div>
                                    <div className="text-[11px] text-slate-400">{u.t}</div>
                                </div>
                                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${u.color}`}>{u.s}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-slate-900">Recent Activity</div>
                        <button className="text-xs text-violet-600 font-semibold">View All</button>
                    </div>
                    <div className="space-y-4">
                        {activity.map((a, i) => (
                            <div key={i} className="flex gap-3">
                                <div className={`w-9 h-9 rounded-lg ${a.c} flex items-center justify-center shrink-0`}>
                                    <i className={`fa-solid ${a.i}`}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-slate-900 leading-snug">{a.t}</div>
                                    <div className="text-xs text-slate-500 mt-0.5">{a.by}</div>
                                </div>
                                <div className="text-[11px] text-slate-400 shrink-0">{a.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
