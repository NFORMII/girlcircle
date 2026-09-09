import { Link } from "react-router-dom";
import { Heart, Target, Users, BookOpen, ArrowRight } from "lucide-react";

const team = [
  { name: "Ananya Sharma", role: "Founder & Director", bio: "Former teacher who saw firsthand how menstrual stigma keeps girls out of school.", avatar: "👩🏽" },
  { name: "Dr. Meera Iyer", role: "Health Advisor", bio: "Gynecologist with 15 years of experience in rural women's health.", avatar: "👩🏻‍⚕️" },
  { name: "Kavitha Raj", role: "Programs Lead", bio: "Designed 85+ workshops across 12 schools in Rajasthan and Maharashtra.", avatar: "👩🏾" },
  { name: "Priya Nair", role: "Community Manager", bio: "Connects with schools, volunteers, and donors to keep the mission running.", avatar: "👩🏼" },
];

const milestones = [
  { year: "2021", event: "GirlCircle founded — first workshop in a single school in Jaipur" },
  { year: "2022", event: "Expanded to 5 schools, distributed 1,000 hygiene kits" },
  { year: "2023", event: "Launched online Q&A platform, reached 1,500+ girls" },
  { year: "2024", event: "Partnered with 12 schools, launched cycle tracker app" },
  { year: "2025", event: "2,400 girls educated, 5,000+ hygiene kits distributed" },
];

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pb-24 md:pb-8">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About GirlCircle</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            We started with one question: <em>why are girls still missing school because of something as natural as a period?</em>
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            GirlCircle began in 2021 when our founder, Ananya Sharma, was teaching at a
            government school in Jaipur. She noticed girls quietly disappearing from class
            every month — some for days at a time. When she asked why, the answers were
            heartbreaking: they didn't have pads, they didn't understand what was happening
            to their bodies, and they were too ashamed to ask.
          </p>
          <p>
            The silence around menstruation wasn't just uncomfortable — it was keeping
            girls uneducated, unhealthy, and ashamed of something entirely natural.
          </p>
          <p>
            To make matters worse, hygiene products are becoming increasingly unaffordable.
            A pack of sanitary pads costs ₹300-400 — nearly a full day's wages for many families.
            With prices rising 15-20% year after year, girls are forced to use unsafe alternatives
            or skip school entirely during their periods.
          </p>
          <p>
            So we started GirlCircle with a simple mission: <strong>bring menstrual health
            education directly to girls in underprivileged communities, and give them
            the products they need to stay in school.</strong>
          </p>
          <p>
            Today, we've conducted 85+ workshops across 12 schools, educated over 2,400 girls,
            and distributed more than 5,000 hygiene kits. But we're just getting started.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white border-y border-pink-100">
        <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                <Target size={20} className="text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To eliminate menstrual stigma and period poverty in underprivileged communities
              through education, hygiene kit distribution, and safe digital spaces where
              young girls can learn about their bodies without shame.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <BookOpen size={20} className="text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A world where every girl understands her body, has access to hygiene products,
              and never misses school because of her period. A world where menstruation is
              treated as normal — not shameful.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🤝", title: "Dignity", desc: "Every girl deserves respect, not ridicule, for a natural biological process." },
            { icon: "🔒", title: "Privacy", desc: "We never compromise on a girl's anonymity and personal data." },
            { icon: "📚", title: "Education", desc: "Knowledge is the most powerful tool against stigma." },
            { icon: "🌱", title: "Accessibility", desc: "Our resources are free, local-language, and reach those who need them most." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-pink-50 text-center">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, bio, avatar }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 text-center">
                <div className="text-4xl mb-3">{avatar}</div>
                <h3 className="font-bold text-sm">{name}</h3>
                <p className="text-xs text-pink-500 font-medium mb-2">{role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200" />
          <div className="space-y-6">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="flex gap-4 items-start">
                <div className="relative z-10 w-8 h-8 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-1">
                  {year.slice(2)}
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-50 flex-1">
                  <div className="text-xs text-pink-500 font-bold mb-1">{year}</div>
                  <p className="text-sm text-gray-700">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want to be part of the change?</h2>
          <p className="text-pink-100 max-w-xl mx-auto mb-6">
            We're always looking for volunteers, partners, and supporters who share our vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors no-underline">
              Get Involved <ArrowRight size={16} />
            </Link>
            <Link to="/donate" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors no-underline">
              <Heart size={16} /> Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
