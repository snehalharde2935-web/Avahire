import React from "react";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

const About = () => (
    <div className="min-h-screen bg-white" data-testid="about-page">
        <PublicHeader />
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
            <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">About Us</span>
                <h1 className="mt-5 text-5xl font-extrabold text-slate-900 leading-tight">We build technology that helps humans <span className="gradient-text">find each other</span></h1>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                    AvaHire started in 2023 with a simple belief — hiring should be fast, fair and delightful for both sides. Today, we power recruitment for 500+ companies across 30+ countries, from early-stage startups to Fortune 500s.
                </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
                {[
                    { icon: "fa-heart", t: "Our mission", d: "Give every hiring team an AI teammate that never gets tired, biased or bored." },
                    { icon: "fa-eye", t: "Our vision", d: "A world where nobody misses out on a great job because a resume was overlooked." },
                    { icon: "fa-hands-holding-circle", t: "Our values", d: "Candidate-first, bias-aware, radically transparent, obsessed with outcomes." },
                ].map((v) => (
                    <div key={v.t} className="bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-3xl p-8">
                        <div className="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-xl shadow-lg shadow-violet-500/30">
                            <i className={`fa-solid ${v.icon}`}></i>
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-slate-900">{v.t}</h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{v.d}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-slate-900 rounded-3xl p-10 lg:p-14 text-white grid md:grid-cols-4 gap-8">
                {[
                    { v: "500+", l: "Companies" },
                    { v: "50K+", l: "Hires made" },
                    { v: "30+", l: "Countries" },
                    { v: "4.9★", l: "Customer rating" },
                ].map((s) => (
                    <div key={s.l}>
                        <div className="text-4xl font-extrabold gradient-text">{s.v}</div>
                        <div className="mt-1 text-slate-400">{s.l}</div>
                    </div>
                ))}
            </div>

        </section>
        <Footer />
    </div>
);

export default About;
