import React, { useState } from "react";
import { toast } from "sonner";

// Mock AI resume screening (frontend-only)
const analyseResume = (name, jobRole) => {
    const skills = ["React", "Node.js", "TypeScript", "SQL", "AWS", "Docker", "Python", "MongoDB", "System Design", "GraphQL"];
    const shuffled = [...skills].sort(() => 0.5 - Math.random()).slice(0, 5 + Math.floor(Math.random() * 3));
    const score = 55 + Math.floor(Math.random() * 40);
    return {
        score,
        matched: shuffled.slice(0, 3 + Math.floor(Math.random() * 2)),
        missing: skills.filter((s) => !shuffled.includes(s)).slice(0, 2 + Math.floor(Math.random() * 2)),
        experience: `${2 + Math.floor(Math.random() * 8)} years`,
        verdict: score >= 80 ? "Strong Match" : score >= 65 ? "Good Match" : "Weak Match",
        summary: `${name} has strong hands-on experience relevant to ${jobRole}. Their profile shows deep exposure to the top matched skills with measurable outcomes in prior roles.`,
    };
};

const seed = [];

const Resumes = () => {
    const [items, setItems] = useState(seed.map((s) => ({ ...s, analysis: analyseResume(s.name, s.role) })));
    const [selectedId, setSelectedId] = useState(items[0]?.id || null);
    const [jobRole, setJobRole] = useState("Frontend Developer");
    const [loading, setLoading] = useState(false);

    const selected = items.find((i) => i.id === selectedId);

    const handleUpload = (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        setLoading(true);
        setTimeout(() => {
            const newItems = files.map((f, idx) => {
                const name = f.name.replace(/\.(pdf|docx?|txt)$/i, "").replace(/[_-]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || `Candidate ${items.length + idx + 1}`;
                return {
                    id: Date.now() + idx,
                    name,
                    role: jobRole,
                    uploaded: "just now",
                    analysis: analyseResume(name, jobRole),
                };
            });
            setItems([...newItems, ...items]);
            setSelectedId(newItems[0].id);
            setLoading(false);
            toast.success(`AI screened ${newItems.length} resume${newItems.length > 1 ? "s" : ""}`);
        }, 1200);
    };

    return (
        <div className="space-y-6" data-testid="resumes-page">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">AI Resume Screening</h2>
                    <p className="text-sm text-slate-500">Upload resumes — AvaHire's AI ranks and analyses them for you.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <select value={jobRole} onChange={(e) => setJobRole(e.target.value)} className="px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:border-violet-500">
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Data Analyst</option>
                        <option>UI/UX Designer</option>
                        <option>DevOps Engineer</option>
                    </select>
                    <label className="btn-primary cursor-pointer px-5 py-2.5 rounded-full text-white font-semibold text-sm flex items-center gap-2" data-testid="upload-resume-btn">
                        <i className="fa-solid fa-cloud-arrow-up"></i> Upload Resumes
                        <input type="file" multiple accept=".pdf,.doc,.docx,.txt" onChange={handleUpload} className="hidden" />
                    </label>
                </div>
            </div>

            <div className="grid lg:grid-cols-[380px_1fr] gap-6">
                {/* Left list */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <div className="font-bold text-slate-900">Candidates</div>
                        <span className="text-xs text-slate-500">{items.length} total</span>
                    </div>
                    {loading && (
                        <div className="p-5 border-b border-slate-100 flex items-center gap-3 bg-violet-50">
                            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white animate-pulse">
                                <i className="fa-solid fa-wand-magic-sparkles text-sm"></i>
                            </div>
                            <div className="text-sm text-slate-700">AI is analysing your resumes...</div>
                        </div>
                    )}
                    <div className="max-h-[560px] overflow-y-auto">
                        {items.length === 0 ? (
                            <div className="p-8 text-center text-slate-400 text-sm">
                                <i className="fa-solid fa-users text-2xl mb-2 text-slate-300 block"></i>
                                No candidates screened yet.<br/>Upload resumes to get started.
                            </div>
                        ) : (
                            items.map((c) => (
                                <button
                                    key={c.id}
                                    data-testid={`resume-item-${c.id}`}
                                    onClick={() => setSelectedId(c.id)}
                                    className={`w-full text-left px-5 py-4 border-b border-slate-50 last:border-0 flex items-center gap-3 transition ${selectedId === c.id ? "bg-violet-50" : "hover:bg-slate-50"}`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                                        {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-semibold text-slate-900 truncate">{c.name}</div>
                                        <div className="text-xs text-slate-500 truncate">{c.role} · {c.uploaded}</div>
                                    </div>
                                    <div className={`text-sm font-bold ${c.analysis.score >= 80 ? "text-emerald-600" : c.analysis.score >= 65 ? "text-amber-600" : "text-rose-600"}`}>
                                        {c.analysis.score}%
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Right analysis */}
                {selected ? (
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                        <div className="flex items-start gap-5">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                {selected.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                            </div>
                            <div className="flex-1">
                                <div className="text-2xl font-extrabold text-slate-900">{selected.name}</div>
                                <div className="text-sm text-slate-500">{selected.role} · {selected.analysis.experience} experience</div>
                                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">
                                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                                    {selected.analysis.verdict}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-extrabold gradient-text">{selected.analysis.score}%</div>
                                <div className="text-xs text-slate-500">AI Match Score</div>
                            </div>
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Matched Skills</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {selected.analysis.matched.map((s) => (
                                        <span key={s} className="px-3 py-1 rounded-full bg-white text-emerald-700 text-xs font-semibold border border-emerald-200">
                                            <i className="fa-solid fa-check mr-1 text-emerald-500"></i>{s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100">
                                <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider">Missing Skills</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {selected.analysis.missing.map((s) => (
                                        <span key={s} className="px-3 py-1 rounded-full bg-white text-rose-700 text-xs font-semibold border border-rose-200">
                                            <i className="fa-solid fa-xmark mr-1 text-rose-500"></i>{s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                <i className="fa-solid fa-robot text-violet-600"></i> AI Summary
                            </div>
                            <p className="mt-2 text-slate-700 leading-relaxed">{selected.analysis.summary}</p>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <button data-testid="shortlist-btn" onClick={() => toast.success(`${selected.name} shortlisted`)} className="btn-primary px-6 py-3 rounded-xl text-white font-semibold text-sm">
                                <i className="fa-solid fa-star mr-2"></i>Shortlist
                            </button>
                            <button onClick={() => toast.success("Interview scheduled")} className="px-6 py-3 rounded-xl border border-slate-200 font-semibold text-sm text-slate-800 hover:border-violet-400">
                                <i className="fa-solid fa-calendar-plus mr-2"></i>Schedule Interview
                            </button>
                            <button onClick={() => toast("Rejected", { icon: "🗑" })} className="px-6 py-3 rounded-xl border border-slate-200 font-semibold text-sm text-rose-600 hover:border-rose-300">
                                Reject
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-4 text-xl">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Select a Candidate</h3>
                        <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">
                            Click on a candidate in the list to view detailed AI resume analysis, matching score, and insights.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Resumes;
