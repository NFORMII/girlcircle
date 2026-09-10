export const mockQuestions = [
  {
    id: 1,
    text: "Is it normal to have cramps before my period starts?",
    author: "Anonymous Fox",
    avatar: "🦊",
    timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
    upvotes: 24,
    answer: {
      text: "Yes, completely normal! Cramps before your period are called premenstrual cramps. They happen because your uterus is contracting to shed its lining. Try warm compresses, gentle exercise, and staying hydrated. If pain is severe, talk to a healthcare provider.",
      educator: "Educator",
      verified: true,
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
  },
  {
    id: 2,
    text: "How do I track my cycle if it's irregular?",
    author: "Anonymous Owl",
    avatar: "🦉",
    timestamp: new Date(Date.now() - 86400000 * 5).toISOString(),
    upvotes: 18,
    answer: {
      text: "Great question! Track at least 3-4 cycles to see patterns. Note the first day of each period, flow intensity, and any symptoms. Irregular cycles are common in the first few years after starting. Our Cycle Tracker tool can help!",
      educator: "Educator",
      verified: true,
      timestamp: new Date(Date.now() - 86400000 * 4).toISOString(),
    },
  },
  {
    id: 3,
    text: "What products can I use during my period?",
    author: "Anonymous Butterfly",
    avatar: "🦋",
    timestamp: new Date(Date.now() - 86400000 * 7).toISOString(),
    upvotes: 31,
    answer: null,
  },
  {
    id: 4,
    text: "Why do I feel emotional before my period?",
    author: "Anonymous Cat",
    avatar: "🐱",
    timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
    upvotes: 15,
    answer: null,
  },
  {
    id: 5,
    text: "Can I exercise during my period?",
    author: "Anonymous Deer",
    avatar: "🦌",
    timestamp: new Date(Date.now() - 86400000 * 10).toISOString(),
    upvotes: 22,
    answer: {
      text: "Absolutely! Light to moderate exercise can actually help with cramps and mood. Walking, yoga, and swimming are great options. Listen to your body and rest if you need to. Stay hydrated!",
      educator: "Educator",
      verified: true,
      timestamp: new Date(Date.now() - 86400000 * 9).toISOString(),
    },
  },
];

export const anonymousAvatars = ["🦊", "🦉", "🦋", "🐱", "🦌", "🐰", "🦋", "🌸", "🌺", "🌻"];

export const educationModules = [
  {
    id: 1,
    title: "Understanding Your Cycle",
    description: "Learn about the 4 phases of the menstrual cycle",
    icon: "🌸",
    color: "from-pink-400 to-rose-500",
    totalLessons: 4,
    lessons: [
      { id: 1, title: "Menstrual Phase", content: "The menstrual phase is when the uterus sheds its lining, resulting in bleeding that typically lasts 3-7 days. This is day 1 of your cycle.", duration: "3 min" },
      { id: 2, title: "Follicular Phase", content: "During the follicular phase, the pituitary gland releases FSH which stimulates ovarian follicles to mature. One follicle becomes dominant.", duration: "3 min" },
      { id: 3, title: "Ovulation", content: "Ovulation occurs around day 14. A mature egg is released from the ovary. This is when you're most fertile.", duration: "2 min" },
      { id: 4, title: "Luteal Phase", content: "After ovulation, progesterone rises to prepare the uterus for potential pregnancy. If no pregnancy occurs, hormone levels drop and menstruation begins.", duration: "3 min" },
    ],
    quiz: [
      { q: "How many phases does the menstrual cycle have?", options: ["2", "3", "4", "5"], correct: 2 },
      { q: "When does ovulation typically occur?", options: ["Day 1", "Day 7", "Day 14", "Day 28"], correct: 2 },
    ],
  },
  {
    id: 2,
    title: "Hygiene & Self-Care",
    description: "Essential hygiene tips during your period",
    icon: "🧼",
    color: "from-purple-400 to-indigo-500",
    totalLessons: 3,
    lessons: [
      { id: 1, title: "Changing Products", content: "Change pads every 4-6 hours, tampons every 4-8 hours, and menstrual cups every 8-12 hours to prevent infection and odor.", duration: "2 min" },
      { id: 2, title: "Washing & Cleaning", content: "Wipe front to back. Use warm water to clean the vaginal area. Avoid scented soaps inside the vagina as they disrupt natural pH balance.", duration: "3 min" },
      { id: 3, title: "Comfort & Clothing", content: "Wear breathable cotton underwear. Loose-fitting clothes help with comfort. Have a spare set of underwear and products in your school bag.", duration: "2 min" },
    ],
    quiz: [
      { q: "How often should you change a pad?", options: ["Every 1 hour", "Every 4-6 hours", "Once a day", "Every 12 hours"], correct: 1 },
      { q: "Which direction should you wipe?", options: ["Back to front", "Front to back", "Side to side", "Doesn't matter"], correct: 1 },
    ],
  },
  {
    id: 3,
    title: "Body Anatomy 101",
    description: "Know your body - reproductive system basics",
    icon: "🫀",
    color: "from-teal-400 to-cyan-500",
    totalLessons: 3,
    lessons: [
      { id: 1, title: "External Anatomy", content: "The vulva includes the labia majora (outer lips), labia minora (inner lips), clitoris, and vaginal opening. Each person's anatomy is unique and normal.", duration: "3 min" },
      { id: 2, title: "Internal Anatomy", content: "The uterus, fallopian tubes, and ovaries are the internal reproductive organs. The uterus is where a fetus develops during pregnancy.", duration: "4 min" },
      { id: 3, title: "Hormones Explained", content: "Estrogen and progesterone are the key hormones controlling your cycle. They fluctuate throughout the month, affecting mood, energy, and body.", duration: "3 min" },
    ],
    quiz: [
      { q: "Where does a fetus develop?", options: ["Ovaries", "Fallopian tubes", "Uterus", "Vagina"], correct: 2 },
      { q: "What are the two main cycle hormones?", options: ["Testosterone & cortisol", "Estrogen & progesterone", "Insulin & glucagon", "Adrenaline & dopamine"], correct: 1 },
    ],
  },
  {
    id: 4,
    title: "Myths vs Facts",
    description: "Debunking common menstrual myths",
    icon: "💡",
    color: "from-amber-400 to-orange-500",
    totalLessons: 3,
    lessons: [
      { id: 1, title: "Myth: You can't swim", content: "MYTH! You can absolutely swim during your period. Use a tampon or menstrual cup. Water pressure may temporarily slow flow. Swimming can actually help with cramps.", duration: "2 min" },
      { id: 2, title: "Myth: Periods sync up", content: "MYTH! While it may seem like friends' cycles sync, research shows this is likely coincidence. Cycles vary in length and timing naturally.", duration: "2 min" },
      { id: 3, title: "Myth: You can't exercise", content: "MYTH! Exercise during your period is safe and beneficial. It releases endorphins that reduce cramps and improve mood. Just listen to your body.", duration: "2 min" },
    ],
    quiz: [
      { q: "Can you swim during your period?", options: ["No, never", "Yes, absolutely", "Only with a pad", "Only after day 3"], correct: 1 },
      { q: "Do periods really sync up?", options: ["Yes, always", "No, it's a myth", "Only with close friends", "Only in summer"], correct: 1 },
    ],
  },
];
