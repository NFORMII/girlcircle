import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, ArrowRight, Droplets, GraduationCap, Shield } from "lucide-react";

const stats = [
  { value: "2,400+", label: "Girls educated", icon: GraduationCap },
  { value: "85", label: "Workshops held", icon: BookOpen },
  { value: "12", label: "Schools partnered", icon: Users },
  { value: "5,000+", label: "Hygiene kits distributed", icon: Droplets },
];

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Every girl's data and questions stay completely anonymous and safe.",
  },
  {
    icon: Heart,
    title: "Compassion Driven",
    desc: "We meet girls where they are with culturally sensitive, judgment-free education.",
  },
  {
    icon: GraduationCap,
    title: "Education Over Stigma",
    desc: "Breaking taboos through knowledge, one workshop at a time.",
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pb-24 md:pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-rose-500 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-8 text-7xl">🌸</div>
          <div className="absolute top-24 right-12 text-5xl">🌷</div>
          <div className="absolute bottom-16 left-1/4 text-4xl">💫</div>
          <div className="absolute bottom-24 right-1/3 text-6xl">🌙</div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🌸</span>
            <span className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">GirlCircle</span>
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-pink-100 mb-10">
            Every Girl Deserves To Understand Her Body
          </h2>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            GirlCircle brings menstrual health education and hygiene kits to young women
            in underprivileged communities — because no one should face puberty in the dark.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg no-underline"
            >
              <Heart size={20} /> Donate Now
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors no-underline"
            >
              Our Mission <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">The Problem We're Solving</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          In many communities, menstruation is still wrapped in shame and silence.
          Young girls miss school, lack access to hygiene products, and have no one
          to ask their questions. <strong className="text-pink-600">We're changing that.</strong>
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <div className="text-3xl font-bold text-red-500 mb-1">1 in 4</div>
            <p className="text-sm text-gray-600">girls in India miss school during menstruation due to lack of products</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <div className="text-3xl font-bold text-orange-500 mb-1">71%</div>
            <p className="text-sm text-gray-600">of girls have no knowledge about menstruation before their first period</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-3xl font-bold text-purple-500 mb-1">65%</div>
            <p className="text-sm text-gray-600">of women and girls still consider menstruation as dirty or shameful</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <div className="text-3xl font-bold text-amber-600 mb-1">₹300+</div>
            <p className="text-sm text-gray-600">per month for pads — unaffordable for families earning under ₹100/day</p>
          </div>
        </div>

        {/* Cost crisis callout */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 text-left">
          <h3 className="font-bold text-amber-800 mb-2">💰 The Hidden Crisis: Rising Cost of Hygiene Products</h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            Sanitary pad prices have risen <strong>15-20% in the last two years</strong> due to raw material costs and GST.
            For a family earning ₹200-300 a day, spending ₹300-400/month on pads alone is a luxury they can't afford.
            Many girls resort to using rags, newspapers, or even dried leaves — leading to infections, shame, and missed school.
            <strong> That's why we distribute free hygiene kits — because no girl should choose between her health and her education.</strong>
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white border-y border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <BookOpen size={28} className="text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Educate</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We conduct interactive workshops in schools teaching girls about
                menstrual health, hygiene, and body autonomy — in their language,
                in their space.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Droplets size={28} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Equip</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We distribute free hygiene kits containing pads, underwear, soap,
                and an information card — so no girl has to choose between
                education and her health.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Empower</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We build safe spaces — both in-person and online — where girls
                can ask questions without shame and get answers from verified
                educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Impact So Far</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-pink-50">
              <Icon size={24} className="mx-auto text-pink-500 mb-2" />
              <div className="text-3xl font-bold text-gray-800">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/impact" className="inline-flex items-center gap-1.5 text-pink-600 font-medium hover:text-pink-700 no-underline">
            See our full impact report <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What We Believe</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
                <Icon size={24} className="text-pink-500 mb-3" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-pink-50">
          <div className="text-4xl mb-4">💬</div>
          <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
            "Before the workshop, I thought something was wrong with me. Now I understand
            my body and I'm not afraid anymore. Thank you, GirlCircle."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg">🌸</div>
            <div className="text-left">
              <div className="font-semibold text-sm">Student, Age 13</div>
              <div className="text-xs text-gray-400">Workshop in Jaipur</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-pink-100 max-w-xl mx-auto mb-8">
            Whether you donate, volunteer, or spread the word — every action helps
            a girl feel less alone during one of the most confusing times of her life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors no-underline">
              <Heart size={18} /> Donate Now
            </Link>
            <Link to="/get-involved" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors no-underline">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
