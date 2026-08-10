import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const menu = [
    { to: "/app/dashboard", label: "Dashboard", icon: "fa-house" },
    { to: "/app/jobs", label: "Jobs", icon: "fa-briefcase" },
    { to: "/app/resumes", label: "Resumes", icon: "fa-file-lines" },
    { to: "/app/candidates", label: "Candidates", icon: "fa-users" },
    { to: "/app/interviews", label: "Interviews", icon: "fa-video" },
    { to: "/app/reports", label: "Reports", icon: "fa-chart-column" },
    { to: "/app/email", label: "Email Center", icon: "fa-envelope" },
    { to: "/app/calendar", label: "Calendar", icon: "fa-calendar" },
    { to: "/app/settings", label: "Settings", icon: "fa-gear" },
];

const DashboardLayout = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("avahire_user") || "{}");
    const logout = () => {
        localStorage.removeItem("avahire_user");
        toast.success("Logged out");
        navigate("/login");
    };

    const initials = (user.name || "PM")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="min-h-screen flex bg-slate-50" data-testid="dashboard-layout">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 bg-slate-900 text-slate-300 flex flex-col fixed inset-y-0 left-0 z-30">
                <div className="p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-violet-500/40">
                            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white">
                                <path d="M12 3 L4 20 H9 L12 13 L15 20 H20 Z" fill="currentColor" />
                                <circle cx="12" cy="8" r="2.2" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-2xl font-extrabold tracking-tight text-white">Ava<span className="text-violet-400">Hire</span></div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">AI Recruitment System</div>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
                    {menu.map((m) => (
                        <NavLink
                            key={m.to}
                            to={m.to}
                            data-testid={`sidebar-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                                }`
                            }
                        >
                            <i className={`fa-solid ${m.icon} w-5`}></i>
                            {m.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-800/60">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                            {initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white truncate">{user.company || "TechCorp Solutions"}</div>
                            <div className="text-xs text-slate-400 truncate">{user.designation || "HR Admin"}</div>
                        </div>
                        <button data-testid="logout-btn" onClick={logout} className="text-slate-400 hover:text-white" title="Logout">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Content */}
            <main className="flex-1 ml-64 min-h-screen">
                {/* Top bar */}
                <div className="sticky top-0 z-20 bg-slate-50/80 backdrop-blur-md px-8 py-5 flex items-center justify-between border-b border-slate-200/60">
                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-900">Welcome back, {user.name?.split(" ")[0] || "Priya"}! <span className="inline-block animate-wave">👋</span></h1>
                        <p className="text-sm text-slate-500 mt-0.5">Here's what's happening with your recruitment today.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                            <input
                                data-testid="global-search"
                                placeholder="Search candidates, jobs..."
                                className="w-72 pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-full focus:outline-none focus:border-violet-500 text-sm"
                            />
                        </div>
                        <button className="relative w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-violet-600" data-testid="notifications-btn">
                            <i className="fa-solid fa-bell"></i>
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">5</span>
                        </button>
                        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                                {initials}
                            </div>
                            <div className="pr-1">
                                <div className="text-sm font-semibold text-slate-900 leading-tight">{user.name?.split(" ")[0] || "Priya Mehta"}</div>
                                <div className="text-[11px] text-slate-500">{user.designation || "HR Admin"}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
