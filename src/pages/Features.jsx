import React from "react";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

const items = [
    { icon: "fa-file-lines", color: "from-violet-500 to-indigo-600", title: "AI Resume Screening", desc: "Rank thousands of resumes in seconds with our fine-tuned skill matching engine. See who fits your JD, why, and by how much." },
    { icon: "fa-robot", color: "from-blue-500 to-cyan-600", title: "AI Interviewer", desc: "An AI avatar conducts structured interviews, evaluates responses in real time and produces a fair, unbiased scorecard." },
    { icon: "fa-chart-line", color: "from-emerald-500 to-teal-600", title: "Smart Analytics", desc: "Live funnel, source performance, time-to-hire and drop-off metrics — every KPI your leadership actually cares about." },
    { icon: "fa-shield-halved", color: "from-amber-500 to-orange-600", title: "Anti-Cheating System", desc: "Face detection, tab-switch monitoring and audio anomaly checks keep interviews honest without being intrusive." },
    { icon: "fa-envelope-open-text", color: "from-rose-500 to-pink-600", title: "Automated Communication", desc: "Interview invites, reminders, offer letters — all templated, tracked and sent on autopilot in your brand voice." },
    { icon: "fa-calendar-check", color: "from-fuchsia-500 to-purple-600", title: "Smart Scheduling", desc: "Panel calendars, candidate availability and time zones — synced. Zero back-and-forth emails." },
];

const Features = () => (
    <div className="min-h-screen bg-white" data-testid="features-page">
        <PublicHeader />
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="text-center max-w-2xl mx-auto">
                <span className="inline-flex px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">Features</span>
                <h1 className="mt-5 text-5xl font-extrabold text-slate-900 leading-tight">Everything you need to <span className="gradient-text">hire smarter</span></h1>
                <p className="mt-4 text-slate-600 text-lg">A modern, AI-first suite crafted for HR teams who value speed, quality and fairness.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {items.map((f) => (
                    <div key={f.title} className="card-hover bg-white border border-slate-200 rounded-2xl p-7">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center text-xl shadow-lg`}>
                            <i className={`fa-solid ${f.icon}`}></i>
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-slate-900">{f.title}</h3>
                        <p className="mt-2 text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
    </div>
);

export default Features;
