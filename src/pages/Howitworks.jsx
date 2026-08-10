import React from "react";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

const steps = [
    { n: "01", t: "Post your job", d: "Create a JD with the smart builder or upload one — AvaHire extracts skills and seniority automatically.", icon: "fa-briefcase" },
    { n: "02", t: "Auto-screen resumes", d: "Every incoming CV is scored, ranked and tagged. Only the strongest candidates surface to your inbox.", icon: "fa-magnifying-glass" },
    { n: "03", t: "Run AI interviews", d: "Candidates take a structured video interview with the AI avatar. You get transcripts, scores and clips.", icon: "fa-video" },
    { n: "04", t: "Hire the best fit", d: "Compare top candidates on a single scorecard, collect team feedback and roll out offers in a click.", icon: "fa-handshake" },
];

const HowItWorks = () => (
    <div className="min-h-screen bg-white" data-testid="how-page">
        <PublicHeader />
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
            <div className="text-center max-w-2xl mx-auto">
                <span className="inline-flex px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">How It Works</span>
                <h1 className="mt-5 text-5xl font-extrabold text-slate-900 leading-tight">From job post to offer — in <span className="gradient-text">4 steps</span></h1>
            </div>

            <div className="mt-16 space-y-14">
                {steps.map((s, i) => (
                    <div key={s.n} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                        <div className="[direction:ltr]">
                            <div className="text-8xl font-extrabold text-violet-100 leading-none">{s.n}</div>
                            <h3 className="mt-3 text-3xl font-extrabold text-slate-900">{s.t}</h3>
                            <p className="mt-3 text-slate-600 text-lg leading-relaxed max-w-md">{s.d}</p>
                        </div>
                        <div className="[direction:ltr] bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
                            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white flex items-center justify-center text-4xl shadow-2xl shadow-violet-500/30">
                                <i className={`fa-solid ${s.icon}`}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
    </div>
);

export default HowItWorks;
