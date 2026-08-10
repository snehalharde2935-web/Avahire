import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const hires = [
    { m: "Jan", v: 8 }, { m: "Feb", v: 12 }, { m: "Mar", v: 6 }, { m: "Apr", v: 14 },
    { m: "May", v: 18 }, { m: "Jun", v: 22 }, { m: "Jul", v: 16 },
];
const sources = [
    { name: "LinkedIn", value: 42, color: "#0ea5e9" },
    { name: "Naukri", value: 28, color: "#f59e0b" },
    { name: "Referral", value: 18, color: "#22c55e" },
    { name: "Career Site", value: 12, color: "#7c3aed" },
];
const funnel = [
    { s: "Applied", v: 342 }, { s: "Screened", v: 220 }, { s: "Interviewed", v: 118 }, { s: "Selected", v: 42 },
];

const Reports = () => (
    <div className="space-y-6" data-testid="reports-page">
        <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Reports & Analytics</h2>
            <p className="text-sm text-slate-500">Track key hiring metrics and trends</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { l: "Avg. Time to Hire", v: "14d", c: "bg-violet-100 text-violet-600", i: "fa-clock" },
                { l: "Offer Acceptance", v: "82%", c: "bg-emerald-100 text-emerald-600", i: "fa-handshake" },
                { l: "Cost per Hire", v: "₹18k", c: "bg-blue-100 text-blue-600", i: "fa-indian-rupee-sign" },
                { l: "AI Screening Time", v: "-73%", c: "bg-rose-100 text-rose-600", i: "fa-bolt" },
            ].map((k) => (
                <div key={k.l} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <div className={`w-11 h-11 rounded-xl ${k.c} flex items-center justify-center mb-3`}><i className={`fa-solid ${k.i}`}></i></div>
                    <div className="text-xs text-slate-500">{k.l}</div>
                    <div className="text-2xl font-extrabold text-slate-900">{k.v}</div>
                </div>
            ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="font-bold text-slate-900 mb-4">Hires by Month</div>
                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={hires}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius: 12 }} />
                        <Bar dataKey="v" fill="#7c3aed" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="font-bold text-slate-900 mb-4">Candidate Sources</div>
                <div className="flex items-center gap-6">
                    <div className="w-48 h-48">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie data={sources} innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
                                    {sources.map((e, i) => <Cell key={i} fill={e.color} />)}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex-1 space-y-2">
                        {sources.map((s) => (
                            <div key={s.name} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                                    <span>{s.name}</span>
                                </div>
                                <span className="font-semibold">{s.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="font-bold text-slate-900 mb-4">Hiring Funnel</div>
            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={funnel}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="s" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 12 }} />
                    <Line dataKey="v" stroke="#7c3aed" strokeWidth={3} dot={{ r: 6, fill: "#7c3aed" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default Reports;
