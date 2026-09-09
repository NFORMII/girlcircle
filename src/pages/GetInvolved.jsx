import { Link } from "react-router-dom";
import { Heart, Users, Building2, HandHelping, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    color: "bg-pink-100 text-pink-600",
    description: "Fund hygiene kits and workshops for girls who need them most. With pad prices rising 15-20% yearly, free kits are a lifeline.",
    actions: [
      "₹250 = hygiene kit for 1 girl (3 months)",
      "₹500 = one classroom workshop",
      "₹2,000 = one school for a month",
      "Custom amount welcome",
    ],
    cta: { label: "Donate Now", to: "/donate" },
  },
  {
    icon: Users,
    title: "Volunteer",
    color: "bg-purple-100 text-purple-600",
    description: "Join our team as a workshop facilitator, educator, or outreach coordinator.",
    actions: [
      "Lead workshops in local schools",
      "Help design educational content",
      "Support event coordination",
      "Flexible time commitment",
    ],
    cta: { label: "Apply to Volunteer", to: "/contact" },
  },
  {
    icon: Building2,
    title: "Partner Your School",
    color: "bg-teal-100 text-teal-600",
    description: "If you're a school administrator, invite us to conduct a free workshop.",
    actions: [
      "Free workshops for your students",
      "Age-appropriate, curriculum-aligned",
      "Hygiene kits for all participants",
      "Teacher training available",
    ],
    cta: { label: "Partner With Us", to: "/contact" },
  },
  {
    icon: HandHelping,
    title: "Corporate Sponsorship",
    color: "bg-amber-100 text-amber-600",
    description: "Align your brand with a social cause and fund impactful programs.",
    actions: [
      "Sponsor a school or district",
      "Fund hygiene kit production",
      "Employee volunteering programs",
      "Tax benefits under 80G",
    ],
    cta: { label: "Discuss Partnership", to: "/contact" },
  },
];

const faqs = [
  { q: "Is my donation tax-deductible?", a: "Yes. GirlCircle is registered under Section 80G of the Indian Income Tax Act. All donations are eligible for 50% tax deduction." },
  { q: "How do I know my donation is used well?", a: "We publish quarterly impact reports and maintain full transparency on fund allocation. You'll receive updates on the schools and girls your donation supports." },
  { q: "Can I volunteer remotely?", a: "Yes! We need help with content creation, translation, social media, and research. Location is not a barrier." },
  { q: "How can my company partner with GirlCircle?", a: "Reach out via the contact page. We offer CSR partnerships, employee volunteering days, and co-branded workshop opportunities." },
];

export default function GetInvolved() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pb-24 md:pb-8">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-500 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            There are many ways to support GirlCircle — whether you give your time,
            your resources, or your voice.
          </p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {ways.map(({ icon: Icon, title, color, description, actions, cta }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
                  <Icon size={22} />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <ul className="space-y-2 mb-6">
                {actions.map((action) => (
                  <li key={action} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
              <Link
                to={cta.to}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 hover:text-pink-700 no-underline"
              >
                {cta.label} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quick donate */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Quick Donate</h2>
          <p className="text-pink-100 mb-6">Every rupee counts. Choose an amount:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[250, 500, 1000, 2500].map((amt) => (
              <Link
                key={amt}
                to="/donate"
                className="bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-full font-bold transition-colors no-underline"
              >
                ₹{amt}
              </Link>
            ))}
          </div>
          <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 no-underline">
            <Heart size={16} /> Custom Amount
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl p-5 shadow-sm border border-pink-50">
              <h3 className="font-bold text-sm mb-2">{q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-pink-100 shadow-sm">
          <Mail size={32} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold mb-3">Have Questions?</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            Whether you want to volunteer, donate, or partner — we'd love to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors no-underline">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
