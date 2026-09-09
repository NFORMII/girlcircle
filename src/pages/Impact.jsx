import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Droplets, Heart, MapPin, ArrowRight } from "lucide-react";

const bigStats = [
  { value: "2,400+", label: "Girls Educated", sub: "across 12 schools", icon: GraduationCap, color: "from-pink-500 to-rose-500" },
  { value: "5,000+", label: "Hygiene Kits Distributed", sub: "pads, soap, underwear, info cards", icon: Droplets, color: "from-purple-500 to-indigo-500" },
  { value: "85", label: "Workshops Conducted", sub: "interactive, in-person sessions", icon: BookOpen, color: "from-teal-500 to-cyan-500" },
  { value: "12", label: "School Partners", sub: "in Rajasthan & Maharashtra", icon: Users, color: "from-amber-500 to-orange-500" },
];

const testimonials = [
  {
    quote: "Before the workshop, I thought something was wrong with me. Now I understand my body and I'm not afraid anymore.",
    name: "Student, Age 13",
    location: "Workshop in Jaipur",
    avatar: "🌸",
  },
  {
    quote: "My daughter came home and explained menstruation to me. I never had anyone explain it to me growing up. GirlCircle changed two generations in one evening.",
    name: "Parent",
    location: "Workshop in Pune",
    avatar: "💜",
  },
  {
    quote: "The hygiene kits mean my students don't have to choose between coming to school and managing their periods. That's everything.",
    name: "Teacher, Govt. School",
    location: "Rajasthan",
    avatar: "👩🏽‍🏫",
  },
  {
    quote: "I used to skip school for 3-4 days every month because I didn't have pads. Now I have them and I know it's normal.",
    name: "Student, Age 14",
    location: "Workshop in Nagpur",
    avatar: "🦋",
  },
];

const locations = [
  { city: "Jaipur", schools: 5, girls: 900 },
  { city: "Pune", schools: 3, girls: 600 },
  { city: "Nagpur", schools: 2, girls: 450 },
  { city: "Udaipur", schools: 2, girls: 450 },
];

export default function Impact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pb-24 md:pb-8">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-500 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Every number represents a real girl who now understands her body,
            has access to hygiene products, and can stay in school.
          </p>
        </div>
      </section>

      {/* Big stats */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bigStats.map(({ value, label, sub, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
                <Icon size={22} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800">{value}</div>
              <div className="text-sm font-medium text-gray-700 mt-1">{label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hygiene kit breakdown */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-pink-50">
          <h2 className="text-xl font-bold mb-6 text-center">What's in a Hygiene Kit?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🩲", name: "Underwear", desc: "Clean, comfortable" },
              { emoji: "🩹", name: "Sanitary Pads", desc: "10-12 pads per kit" },
              { emoji: "🧼", name: "Soap", desc: "Gentle, unscented" },
              { emoji: "📋", name: "Info Card", desc: "Cycle basics in local language" },
            ].map(({ emoji, name, desc }) => (
              <div key={name} className="text-center p-4 bg-pink-50 rounded-xl">
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="text-sm font-bold text-gray-800">{name}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Each kit costs approximately ₹250 and lasts one student for 3 months
          </p>

          {/* Cost crisis */}
          <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-sm text-amber-800 mb-2">Why Free Kits Matter</h3>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              The average Indian family spends ₹300-400/month on sanitary pads — that's up to <strong>15% of a daily-wage worker's daily income</strong>.
              With pad prices rising 15-20% in the past two years, many families are forced to choose between
              pads and food. Girls end up using unsafe alternatives like rags or newspapers, risking infection
              and missing school. Our free hygiene kits remove this financial barrier entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What They Say</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map(({ quote, name, location, avatar }, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
              <div className="text-2xl mb-3">{avatar}</div>
              <blockquote className="text-sm text-gray-600 italic leading-relaxed mb-4">
                "{quote}"
              </blockquote>
              <div>
                <div className="text-sm font-semibold text-gray-800">{name}</div>
                <div className="text-xs text-gray-400">{location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where we work */}
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Where We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map(({ city, schools, girls }) => (
              <div key={city} className="bg-white rounded-xl p-5 shadow-sm border border-pink-50 text-center">
                <MapPin size={20} className="mx-auto text-pink-500 mb-2" />
                <div className="font-bold text-gray-800">{city}</div>
                <div className="text-xs text-gray-500 mt-1">{schools} schools · {girls} girls</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Currently active in Rajasthan and Maharashtra. Planning to expand to 3 more states by 2026.
          </p>
        </div>
      </section>

      {/* Workshop snapshot */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-center mb-6">What a Workshop Looks Like</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Interactive Session", desc: "45-minute age-appropriate presentation on menstrual health, hygiene, and anatomy" },
            { step: "2", title: "Q&A Circle", desc: "Anonymous question box where girls ask anything without embarrassment" },
            { step: "3", title: "Kit Distribution", desc: "Every participant receives a free hygiene kit to take home" },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-white rounded-xl p-5 border border-pink-50 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-bold flex items-center justify-center mb-3">
                {step}
              </div>
              <h3 className="font-bold text-sm mb-1">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Help us reach more girls</h2>
          <p className="text-pink-100 max-w-xl mx-auto mb-6">
            ₹250 provides a hygiene kit for one girl for 3 months.
            ₹500 funds a classroom workshop. Every contribution matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors no-underline">
              <Heart size={18} /> Donate Now
            </Link>
            <Link to="/get-involved" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors no-underline">
              Volunteer With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
