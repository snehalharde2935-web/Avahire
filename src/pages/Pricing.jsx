import React, { useState } from "react";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

const Pricing = () => {
    const [billingPeriod, setBillingPeriod] = useState("monthly"); // "monthly" or "yearly"
    const [openFaq, setOpenFaq] = useState(null);

    const plans = [
        {
            name: "Starter",
            desc: "For early-stage startups and small teams testing AI hiring.",
            priceMonthly: 0,
            priceYearly: 0,
            features: [
                "1 Active Job Posting",
                "5 AI Screening Credits / mo",
                "Basic Resume Screening",
                "Standard Candidate Dashboard",
                "Email Support",
            ],
            cta: "Get Started Free",
            ctaLink: "/register",
            popular: false,
            color: "border-slate-200",
            buttonStyle: "border border-slate-200 hover:border-violet-600 hover:text-violet-600 text-slate-800",
        },
        {
            name: "Growth",
            desc: "Perfect for growing companies hiring consistently.",
            priceMonthly: 79,
            priceYearly: 63, // ~20% discount
            features: [
                "5 Active Job Postings",
                "100 AI Screening Credits / mo",
                "Standard AI Video Interviews",
                "Anti-Cheating (Tab-switch tracking)",
                "Full Candidate Analytics",
                "Priority Email Support",
            ],
            cta: "Start 14-Day Trial",
            ctaLink: "/register",
            popular: false,
            color: "border-slate-200",
            buttonStyle: "border border-slate-200 hover:border-violet-600 hover:text-violet-600 text-slate-800",
        },
        {
            name: "Pro",
            desc: "For scaling companies needing advanced AI avatar evaluation.",
            priceMonthly: 199,
            priceYearly: 159, // ~20% discount
            features: [
                "20 Active Job Postings",
                "500 AI Screening Credits / mo",
                "AI Avatar Video Interviews",
                "Advanced Proctoring (Face & Audio)",
                "Smart Calendar Sync & Templates",
                "Dedicated Dashboard & Analytics",
                "24/7 Priority Support",
            ],
            cta: "Go Pro Now",
            ctaLink: "/register",
            popular: true,
            color: "border-violet-500 shadow-xl shadow-violet-500/10 ring-2 ring-violet-500 ring-offset-2",
            buttonStyle: "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/25",
        },
        {
            name: "Enterprise",
            desc: "Custom solutions for large organizations and recruiters.",
            priceMonthly: "Custom",
            priceYearly: "Custom",
            features: [
                "Unlimited Job Postings",
                "Custom AI Screening Credits",
                "Fine-tuned Domain Specific Models",
                "SSO & Custom API Integrations",
                "Dedicated Success Manager",
                "Custom SLAs & Agreements",
                "On-Prem / Private Cloud options",
            ],
            cta: "Contact Sales",
            ctaLink: "/contact",
            popular: false,
            color: "border-slate-200",
            buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
        },
    ];

    const faqs = [
        {
            q: "How do AI screening credits work?",
            a: "Every candidate resume that is parsed, categorized, and scored by our AI models uses exactly 1 screening credit. Credits are reset monthly at the start of your billing cycle. Unused credits do not roll over.",
        },
        {
            q: "What are AI Avatar Video Interviews?",
            a: "Our system generates an interactive, conversational AI avatar that asks structured, job-specific technical or behavioral questions. The avatar records the interview, performs real-time sentiment analysis, verifies answers against industry standards, and generates an objective scorecard.",
        },
        {
            q: "How does the anti-cheating/proctoring system work?",
            a: "For growth and pro plans, we track tab-switching and window-blurring events. On the Pro plan, we also perform web-camera visual analysis (face detection to ensure only the candidate is present) and audio anomaly detection to keep the interview environment fair and honest.",
        },
        {
            q: "Can I upgrade or downgrade my plan at any time?",
            a: "Absolutely. When upgrading, the change is applied immediately, and you will be billed a prorated amount. When downgrading or canceling, your current plan remains active until the end of the billing period.",
        },
        {
            q: "Is there a free trial available?",
            a: "Yes! The Growth and Pro plans both include a 14-day free trial. If you're looking for custom integrations or wish to test the Enterprise tier, contact our team to set up a dedicated environment.",
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-50/50" data-testid="pricing-page">
            <PublicHeader />

            {/* Header & Subtitle */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">
                        Pricing Plans
                    </span>
                    <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Predictable pricing, <br className="sm:hidden" />
                        built to <span className="gradient-text">scale with you</span>
                    </h1>
                    <p className="mt-4 text-slate-600 text-lg">
                        Accelerate your recruiting workflow with powerful, AI-driven screening and interviews. Choose the plan that meets your hiring goals.
                    </p>

                    {/* Toggle Period */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-500"}`}>
                            Monthly billing
                        </span>
                        <button
                            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                            className="relative w-12 h-6.5 bg-violet-600 rounded-full p-1 transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle billing billingPeriod"
                        >
                            <span
                                className={`block w-4.5 h-4.5 bg-white rounded-full transition-transform duration-200 ${
                                    billingPeriod === "yearly" ? "translate-x-5.5" : "translate-x-0"
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-medium flex items-center gap-1.5 ${billingPeriod === "yearly" ? "text-slate-900" : "text-slate-500"}`}>
                            Yearly billing
                            <span className="px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 bg-emerald-100 rounded-full">
                                Save 20%
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((p) => {
                        const price = billingPeriod === "monthly" ? p.priceMonthly : p.priceYearly;
                        return (
                            <div
                                key={p.name}
                                className={`relative flex flex-col justify-between bg-white border rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${p.color}`}
                            >
                                {p.popular && (
                                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[11px] font-extrabold tracking-wider uppercase rounded-full shadow-md shadow-violet-500/20">
                                        Best Value
                                    </span>
                                )}

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                                    <p className="mt-2.5 text-sm text-slate-500 min-h-[40px] leading-relaxed">
                                        {p.desc}
                                    </p>

                                    <div className="mt-6 flex items-baseline text-slate-900">
                                        {typeof price === "number" ? (
                                            <>
                                                <span className="text-4xl font-extrabold tracking-tight">$</span>
                                                <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                                                <span className="ml-1 text-slate-500 text-sm font-semibold">/month</span>
                                            </>
                                        ) : (
                                            <span className="text-4xl font-extrabold tracking-tight">{price}</span>
                                        )}
                                    </div>
                                    {typeof price === "number" && billingPeriod === "yearly" && price > 0 && (
                                        <div className="mt-1 text-xs text-emerald-600 font-semibold">
                                            Billed annually (${price * 12}/yr)
                                        </div>
                                    )}

                                    {/* Features Divider */}
                                    <div className="my-6 border-t border-slate-100" />

                                    <ul className="space-y-3.5">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex items-start text-sm text-slate-600 leading-normal">
                                                <span className="flex-shrink-0 text-violet-600 mt-0.5 mr-3">
                                                    <i className="fa-solid fa-circle-check text-[15px]"></i>
                                                </span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <a
                                        href={p.ctaLink}
                                        className={`block w-full text-center py-3 px-4 rounded-xl text-sm font-bold transition-all ${p.buttonStyle}`}
                                    >
                                        {p.cta}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Custom/Enterprise Banner */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
                <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-slate-900/10">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Need custom proctoring or custom integrations?</h2>
                        <p className="mt-3 text-slate-300 leading-relaxed text-sm md:text-base">
                            We offer custom models tailored to specific industries, volume-based credit packages, and integration with your existing ATS platform. Get in touch with our team.
                        </p>
                    </div>
                    <a
                        href="/contact"
                        className="flex-shrink-0 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 transition-colors rounded-xl text-sm font-bold text-white shadow-lg shadow-violet-500/20"
                    >
                        Schedule a Demo
                    </a>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 border-t border-slate-200/60">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-slate-500">
                        Everything you need to know about plans, billing, and candidate assessments.
                    </p>
                </div>

                <div className="mt-12 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                            <div
                                key={index}
                                className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden transition-colors"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between text-left px-6 py-5 focus:outline-none"
                                >
                                    <span className="font-semibold text-slate-800 text-base pr-4">
                                        {faq.q}
                                    </span>
                                    <span className={`text-slate-400 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                                        <i className="fa-solid fa-chevron-down text-sm"></i>
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-200 ease-in-out ${
                                        isOpen ? "max-h-60 border-t border-slate-100" : "max-h-0 pointer-events-none"
                                    } overflow-hidden`}
                                >
                                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;
