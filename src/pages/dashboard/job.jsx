import React, { useState } from "react";
import { toast } from "sonner";

const seed = [];

const Jobs = () => {
    const [jobs, setJobs] = useState(seed);
    const [q, setQ] = useState("");
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({ title: "", dept: "", type: "Full-time", loc: "" });

    const filtered = jobs.filter((j) =>
        j.title.toLowerCase().includes(q.toLowerCase()) || j.dept.toLowerCase().includes(q.toLowerCase())
    );

    const submit = () => {
        if (!form.title || !form.dept) return toast.error("Fill required fields");
        const newJob = { id: Date.now(), ...form, candidates: 0, status: "Active", posted: new Date().toLocaleDateString() };
        setJobs([newJob, ...jobs]);
        setModal(false);
        setForm({ title: "", dept: "", type: "Full-time", loc: "" });
        toast.success("Job posted successfully");
    };

    return (
        <div className="space-y-6" data-testid="jobs-page">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">Jobs</h2>
                    <p className="text-sm text-slate-500">Manage your job postings</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                        <input data-testid="jobs-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search jobs" className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm w-64 focus:outline-none focus:border-violet-500" />
                    </div>
                    <button data-testid="new-job-btn" onClick={() => setModal(true)} className="btn-primary px-5 py-2.5 rounded-full text-white font-semibold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-plus"></i> New Job
                    </button>
                </div>
            </div>

            {filtered.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center" data-testid="empty-jobs-state">
                    <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">No jobs found</h3>
                    <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">
                        {q ? "No jobs match your search query." : "Get started by creating your first job posting."}
                    </p>
                    {!q && (
                        <button onClick={() => setModal(true)} className="btn-primary px-5 py-2.5 rounded-full text-white font-semibold text-sm mt-4 inline-flex items-center gap-2">
                            <i className="fa-solid fa-plus"></i> New Job
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filtered.map((j) => (
                        <div key={j.id} data-testid={`job-card-${j.id}`} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-lg font-bold text-slate-900">{j.title}</div>
                                    <div className="text-sm text-slate-500 mt-0.5">{j.dept}</div>
                                </div>
                                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${j.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{j.status}</span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                                <span className="px-2 py-1 rounded-full bg-slate-100"><i className="fa-solid fa-location-dot mr-1"></i>{j.loc}</span>
                                <span className="px-2 py-1 rounded-full bg-slate-100"><i className="fa-regular fa-clock mr-1"></i>{j.type}</span>
                                <span className="px-2 py-1 rounded-full bg-violet-100 text-violet-700"><i className="fa-solid fa-users mr-1"></i>{j.candidates} candidates</span>
                            </div>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                                <span className="text-xs text-slate-400">Posted {j.posted}</span>
                                <div className="flex gap-2">
                                    <button className="text-violet-600 text-sm font-semibold hover:underline">View</button>
                                    <button className="text-slate-400 hover:text-slate-700 text-sm"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {modal && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4" data-testid="new-job-modal">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold">Create New Job</h3>
                            <button onClick={() => setModal(false)} className="text-slate-400"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="space-y-3">
                            <input data-testid="job-form-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Job Title" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500" />
                            <input data-testid="job-form-dept" value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })} placeholder="Department" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500" />
                            <input value={form.loc} onChange={(e) => setForm({ ...form, loc: e.target.value })} placeholder="Location" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500" />
                            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500 bg-white">
                                <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option>
                            </select>
                            <button data-testid="job-form-submit" onClick={submit} className="btn-primary w-full py-3 rounded-xl text-white font-semibold">Create Job</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Jobs;
