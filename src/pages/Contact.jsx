import { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] pb-24 md:pb-8">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-500 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Have a question, want to volunteer, or interested in partnering?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            {[
              { icon: Mail, label: "Email", value: "hello@girlcircle.org" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-pink-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                  <div className="text-sm font-medium text-gray-700">{value}</div>
                </div>
              </div>
            ))}

            <div className="bg-pink-50 rounded-xl p-4 mt-6">
              <h3 className="font-bold text-sm mb-2">Office Hours</h3>
              <p className="text-xs text-gray-600">Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-xs text-gray-600">Sat: 10:00 AM – 2:00 PM</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-pink-50">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-pink-300 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-pink-300 text-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-pink-300 text-sm bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="volunteer">Volunteer with GirlCircle</option>
                    <option value="donate">Donation inquiry</option>
                    <option value="partner">School / Corporate partnership</option>
                    <option value="workshop">Request a workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-pink-300 text-sm resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-green-100 text-center">
                <CheckCircle2 size={48} className="mx-auto text-green-500 mb-4" />
                <h2 className="text-2xl font-bold mb-3">Message Sent!</h2>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out. We typically respond within 2-3 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-6 py-2.5 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
