import React, { useState } from "react";
import { toast } from "sonner";

const Settings = () => {
    const user = JSON.parse(localStorage.getItem("avahire_user") || "{}");
    const [form, setForm] = useState({
        name: user.name || "Priya Mehta",
        email: user.email || "priya@techcorp.com",
        company: user.company || "TechCorp Solutions",
        designation: user.designation || "HR Admin",
        notifyEmail: true,
        notifyDesktop: false,
        notifyMobile: true,
    });

    const save = () => {
        localStorage.setItem("avahire_user", JSON.stringify(form));
        toast.success("Settings saved");
    };

    return (
        <div className="space-y-6 max-w-4xl" data-testid="settings-page">
            <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Settings</h2>
                <p className="text-sm text-slate-500">Manage your account and preferences</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <h3 className="font-bold text-slate-900">Profile Information</h3>
                <div className="mt-5 grid md:grid-cols-2 gap-4">
                    {[
                        { k: "name", l: "Full Name" },
                        { k: "email", l: "Work Email" },
                        { k: "company", l: "Company Name" },
                        { k: "designation", l: "Designation" },
                    ].map((f) => (
                        <div key={f.k}>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">{f.l}</label>
                            <input
                                data-testid={`settings-${f.k}`}
                                value={form[f.k]}
                                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <h3 className="font-bold text-slate-900">Notifications</h3>
                <div className="mt-5 space-y-4">
                    {[
                        { k: "notifyEmail", l: "Email notifications", d: "Get notified about new candidates and interview updates" },
                        { k: "notifyDesktop", l: "Desktop notifications", d: "Real-time alerts on your browser" },
                        { k: "notifyMobile", l: "Mobile notifications", d: "Push alerts on the AvaHire mobile app" },
                    ].map((n) => (
                        <div key={n.k} className="flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-slate-900 text-sm">{n.l}</div>
                                <div className="text-xs text-slate-500">{n.d}</div>
                            </div>
                            <button
                                onClick={() => setForm({ ...form, [n.k]: !form[n.k] })}
                                className={`w-12 h-7 rounded-full p-1 transition ${form[n.k] ? "bg-violet-600" : "bg-slate-200"}`}
                            >
                                <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${form[n.k] ? "translate-x-5" : ""}`}></div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button data-testid="settings-save" onClick={save} className="btn-primary px-6 py-3 rounded-xl text-white font-semibold">
                    Save changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
