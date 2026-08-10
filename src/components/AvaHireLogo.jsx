import React from "react";

const AvaHireLogo = ({ size = "md", variant = "dark" }) => {
    const sizes = {
        sm: { icon: "w-8 h-8", title: "text-lg", sub: "text-[10px]" },
        md: { icon: "w-11 h-11", title: "text-2xl", sub: "text-[11px]" },
        lg: { icon: "w-14 h-14", title: "text-3xl", sub: "text-xs" },
    }[size];

    const titleColor = variant === "light" ? "text-white" : "text-slate-900";
    const subColor = variant === "light" ? "text-slate-300" : "text-slate-500";

    return (
        <div className="flex items-center gap-3" data-testid="avahire-logo">
            <div className={`${sizes.icon} rounded-xl bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-violet-500/30`}>
                <svg viewBox="0 0 24 24" fill="none" className="w-2/3 h-2/3 text-white">
                    <path d="M12 3 L4 20 H9 L12 13 L15 20 H20 Z" fill="currentColor" />
                    <circle cx="12" cy="8" r="2.2" fill="currentColor" />
                </svg>
            </div>
            <div className="leading-tight">
                <div className={`${sizes.title} font-extrabold tracking-tight ${titleColor}`}>
                    Ava<span className="text-violet-600">Hire</span>
                </div>
                <div className={`${sizes.sub} uppercase tracking-[0.14em] font-semibold ${subColor}`}>
                    AI Recruitment System
                </div>
            </div>
        </div>
    );
};

export default AvaHireLogo;
