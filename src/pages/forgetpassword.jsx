import React, { useState } from "react";
import { Link } from "react-router-dom";
import AvaHireLogo from "@/components/AvaHireLogo";
import { toast } from "sonner";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        if (!email) return toast.error("Enter your email");
        setSent(true);
        toast.success("Reset link sent to your email");
    };
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6" data-testid="forgot-page">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-10">
                <div className="flex justify-center"><AvaHireLogo /></div>
                <h2 className="mt-8 text-2xl font-extrabold text-slate-900 text-center">Forgot Password?</h2>
                <p className="text-slate-500 text-center mt-1 text-sm">
                    Enter your work email and we'll send you a reset link.
                </p>
                {!sent ? (
                    <form onSubmit={submit} className="mt-8 space-y-4">
                        <div className="relative">
                            <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                            <input
                                data-testid="forgot-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your work email"
                                className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 text-sm"
                            />
                        </div>
                        <button type="submit" data-testid="forgot-submit" className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold">
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className="mt-8 bg-emerald-50 text-emerald-700 border border-emerald-200 p-4 rounded-xl text-sm text-center">
                        ✓ We sent a password reset link to <b>{email}</b>
                    </div>
                )}
                <div className="mt-6 text-center text-sm text-slate-600">
                    <Link to="/login" className="text-violet-600 font-semibold">← Back to login</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
