import React, { useState } from "react";
import { toast } from "sonner";

const templates = [
    { id: 1, name: "Interview Invitation", subject: "You're invited to interview for {{role}}", uses: 128 },
    { id: 2, name: "Shortlist Confirmation", subject: "Great news! You've been shortlisted", uses: 94 },
    { id: 3, name: "Rejection Email", subject: "Update on your application", uses: 76 },
    { id: 4, name: "Offer Letter", subject: "Your offer from {{company}}", uses: 42 },
];

const sent = [];

const EmailCenter = () => {
    const [tab, setTab] = useState("templates");
    return (
        <div className="space-y-6" data-testid="email-page">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">Email Center</h2>
                    <p className="text-sm text-slate-500">Templates and communication history</p>
                </div>
                <button onClick={() => toast.success("Compose feature coming soon")} className="btn-primary px-5 py-2.5 rounded-full text-white font-semibold text-sm">
                    <i className="fa-solid fa-pen mr-2"></i>Compose Email
                </button>
            </div>

            <div className="flex gap-2 border-b border-slate-200">
                {[["templates", "Templates"], ["sent", "Sent Emails"]].map(([k, l]) => (
                    <button key={k} onClick={() => setTab(k)} data-testid={`tab-${k}`} className={`px-5 py-3 text-sm font-semibold ${tab === k ? "text-violet-600 border-b-2 border-violet-600" : "text-slate-500"}`}>{l}</button>
                ))}
            </div>

            {tab === "templates" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {templates.map((t) => (
                        <div key={t.id} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover">
                            <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center"><i className="fa-solid fa-envelope-open-text"></i></div>
                            <div className="mt-4 font-bold text-slate-900">{t.name}</div>
                            <div className="text-sm text-slate-500 mt-1 truncate">{t.subject}</div>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                                <div className="text-xs text-slate-400">{t.uses} uses</div>
                                <button className="text-violet-600 font-semibold text-sm">Use →</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tab === "sent" && (
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    {sent.length === 0 ? (
                        <div className="p-12 text-center text-slate-400">
                            <i className="fa-solid fa-paper-plane text-2xl mb-2 text-slate-300 block"></i>
                            No sent emails yet.
                        </div>
                    ) : (
                        sent.map((s) => (
                            <div key={s.id} className="flex items-center gap-4 px-6 py-4 border-b border-slate-50 last:border-0">
                                <div className={`w-10 h-10 rounded-full ${s.opened ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"} flex items-center justify-center`}>
                                    <i className={`fa-solid ${s.opened ? "fa-envelope-open" : "fa-envelope"}`}></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-slate-900 truncate">{s.subject}</div>
                                    <div className="text-xs text-slate-500">To: {s.to}</div>
                                </div>
                                <div className="text-xs text-slate-400">{s.sent}</div>
                                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${s.opened ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                    {s.opened ? "Opened" : "Delivered"}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default EmailCenter;
