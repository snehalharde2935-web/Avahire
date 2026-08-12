import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const hires = [];
const sources = [];
const funnel = [];

const Reports = () => (
    <div className="space-y-6" data-testid="reports-page">
        <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Reports & Analytics</h2>
            <p className="text-sm text-slate-500">Track key hiring metrics and trends</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { l: "Avg. Time to Hire", v: "-", c: "bg-violet-100 text-violet-600", i: "fa-clock" },
                { l: "Offer Acceptance", v: "0%", c: "bg-emerald-100 text-emerald-600", i: "fa-handshake" },
                { l: "Cost per Hire", v: "₹0", c: "bg-blue-100 text-blue-600", i: "fa-indian-rupee-sign" },
                { l: "AI Screening Time", v: "0%", c: "bg-rose-100 text-rose-600", i: "fa-bolt" },
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
                {hires.length === 0 || hires.every(h => h.v === 0) ? (
                    <div className="flex items-center justify-center h-[260px] text-slate-400 text-sm">
                        No hire data available
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={hires}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ borderRadius: 12 }} />
                            <Bar dataKey="v" fill="#7c3aed" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="font-bold text-slate-900 mb-4">Candidate Sources</div>
                {sources.length === 0 || sources.every(s => s.value === 0) ? (
                    <div className="flex items-center justify-center h-[260px] text-slate-400 text-sm">
                        No source data available
                    </div>
                ) : (
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
                )}
            </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="font-bold text-slate-900 mb-4">Hiring Funnel</div>
            {funnel.length === 0 || funnel.every(f => f.v === 0) ? (
                <div className="flex items-center justify-center h-[220px] text-slate-400 text-sm">
                    No funnel data available
                </div>
            ) : (
                <ResponsiveContainer width="100%" height={220}>
                    <LineChart data={funnel}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="s" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius: 12 }} />
                        <Line dataKey="v" stroke="#7c3aed" strokeWidth={3} dot={{ r: 6, fill: "#7c3aed" }} />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    </div>
);

export default Reports;
