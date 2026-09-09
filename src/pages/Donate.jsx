import { useState } from "react";
import { Heart, CreditCard, Users, BookOpen, CheckCircle2 } from "lucide-react";

const impactStats = [
  { icon: Users, value: "2,400+", label: "Students reached" },
  { icon: BookOpen, value: "85", label: "Workshops conducted" },
  { icon: Heart, value: "12", label: "Schools partnered" },
];

const donationTiers = [
  { amount: 250, label: "Supporter", desc: "Provides hygiene kits for 5 students", color: "border-pink-200 hover:border-pink-400" },
  { amount: 500, label: "Champion", desc: "Funds one classroom workshop", color: "border-purple-200 hover:border-purple-400", popular: true },
  { amount: 1000, label: "Advocate", desc: "Sponsors a school for a month", color: "border-teal-200 hover:border-teal-400" },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donated, setDonated] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
    setTimeout(() => setDonated(false), 5000);
  };

  const currentAmount = selectedAmount || Number(customAmount) || 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-24 md:pb-8">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">💝</div>
        <h1 className="text-3xl font-bold mb-2">Support GirlCircle</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Your donation helps us conduct menstrual health workshops in schools,
          providing education and hygiene products to young women.
        </p>
      </div>

      {/* Impact stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {impactStats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-pink-50">
            <Icon size={24} className="mx-auto text-pink-500 mb-2" />
            <div className="text-2xl font-bold text-gray-800">{value}</div>
            <div className="text-xs text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Donation form */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-pink-50">
        <h2 className="text-xl font-bold mb-6">Choose your support level</h2>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {donationTiers.map(({ amount, label, desc, color, popular }) => (
            <button
              key={amount}
              onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
              className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                selectedAmount === amount
                  ? "border-pink-500 bg-pink-50 shadow-sm"
                  : color
              }`}
            >
              {popular && (
                <span className="absolute -top-2.5 right-3 bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-lg font-bold text-gray-800">₹{amount}</div>
              <div className="text-sm font-medium text-pink-600 mb-1">{label}</div>
              <div className="text-xs text-gray-500">{desc}</div>
            </button>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Or enter a custom amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">₹</span>
            <input
              type="number"
              min="100"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
              placeholder="Enter amount"
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-pink-300 text-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name (optional)</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Anonymous supporter"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-pink-300"
          />
        </div>

        <button
          onClick={handleDonate}
          disabled={currentAmount < 100}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <CreditCard size={20} />
          {currentAmount >= 100 ? `Donate ₹${currentAmount}` : "Select an amount"}
        </button>

        <p className="text-xs text-gray-400 text-center mt-3">
          This is a demo. No real payment is processed. In production, integrate Razorpay, Paytm, or similar.
        </p>
      </div>

      {/* Success message */}
      {donated && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
            <CheckCircle2 size={48} className="mx-auto text-green-500 mb-3" />
            <h3 className="text-xl font-bold mb-2">Thank you! 💝</h3>
            <p className="text-gray-600 text-sm">
              Your donation of ₹{currentAmount} would help fund menstrual health education in schools.
            </p>
            <button
              onClick={() => setDonated(false)}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Where funds go */}
      <div className="mt-10 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-pink-100">
        <h3 className="font-bold text-lg mb-4">Where your donation goes</h3>
        <div className="space-y-3">
          {[
            { pct: "40%", label: "Hygiene kits & products for students", color: "bg-pink-500" },
            { pct: "30%", label: "Workshop materials & educator training", color: "bg-purple-500" },
            { pct: "20%", label: "School partnerships & outreach", color: "bg-teal-500" },
            { pct: "10%", label: "Platform maintenance & development", color: "bg-amber-500" },
          ].map(({ pct, label, color }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-600 w-10">{pct}</span>
              <div className={`h-2.5 rounded-full ${color}`} style={{ width: pct }} />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
