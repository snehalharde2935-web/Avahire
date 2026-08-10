import React, { useState } from "react";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return toast.error("Please fill all fields");
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", msg: "" });
  };

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      <PublicHeader />
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-center">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">Contact Us</span>
          <h1 className="mt-5 text-5xl font-extrabold text-slate-900 leading-tight">Get in <span className="gradient-text">touch</span></h1>
          <p className="mt-4 text-slate-600 text-lg">Have questions? We'd love to hear from you.</p>
        </div>

        <form onSubmit={submit} className="mt-12 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-violet-500/5 max-w-xl mx-auto space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Name</label>
            <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Work Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Message</label>
            <textarea rows="4" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Tell us what you need..." className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500 resize-none"></textarea>
          </div>
          <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
