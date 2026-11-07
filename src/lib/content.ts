export type Program = {
  slug: string;
  name: string;
  hindi: string;
  verb: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  unit: string;
  unitAmount: number;
  facts: { value: string; label: string }[];
  paragraphs: string[];
  actions: string[];
  quote: { text: string; name: string; role: string };
};

export const programmes: Program[] = [
  {
    slug: "annapurna",
    name: "Annapurna",
    hindi: "अन्नपूर्णा",
    verb: "Food",
    tagline: "A hot meal, without a question attached.",
    summary:
      "Eleven community kitchens serving dal, sabzi, rice and roti six days a week — to children, elders, daily-wage workers and anyone who walks in.",
    image: "/images/food.jpg",
    imageAlt:
      "A cook serving a plate of hot food to a young girl at a community kitchen",
    unit: "meal",
    unitAmount: 25,
    facts: [
      { value: "11", label: "community kitchens" },
      { value: "1,900", label: "meals served every day" },
      { value: "₹25", label: "cost of one full plate" },
    ],
    paragraphs: [
      "Annapurna began in 2014 with one rented kitchen in Lucknow and a borrowed pressure cooker. Today it is the spine of everything else we do: eleven kitchens, open six days a week, where the menu changes with the season and the door does not ask why you are hungry.",
      "Each kitchen is run by a local team — cooks, cleaners, a nutritionist and a manager who has lived in the neighbourhood for years. Food is cooked fresh each morning. Leftovers are packed and sent to two night shelters. Nothing is thrown away while someone is still waiting.",
      "The kitchens are also where we notice things first. A child who stops coming. An elder who looks unwell. A family that has just arrived from another district. Annapurna is a meal, but it is also our earliest warning system.",
    ],
    actions: [
      "Serve a full plate to one person for ₹25.",
      "Fund a kitchen for a day — 100 meals — for ₹2,500.",
      "Fund a week of kitchen gas, grain and vegetables for ₹17,500.",
    ],
    quote: {
      text: "The kitchen opens at six. By seven there is a line, and by eight the first pots are empty. Hunger is not a story here. It is a timetable.",
      name: "Sunita Devi",
      role: "Kitchen lead, Lucknow",
    },
  },
  {
    slug: "vidya",
    name: "Vidya",
    hindi: "विद्या",
    verb: "Learning",
    tagline: "A room, a teacher, and the time to be a child.",
    summary:
      "After-school learning centres for children in government schools — reading, maths, art, and a hot evening snack.",
    image: "/images/hero.jpg",
    imageAlt:
      "A teacher reading a picture book with four children at a learning centre",
    unit: "school kit",
    unitAmount: 500,
    facts: [
      { value: "34", label: "learning centres" },
      { value: "6,800", label: "children every week" },
      { value: "1:18", label: "teacher to child ratio" },
    ],
    paragraphs: [
      "Vidya is not a school. It is the hour after school, when a child has somewhere safe to go and an adult who has time to sit beside them. Our centres run in borrowed rooms, temple halls and one former bus depot. The walls are covered with work, not posters.",
      "Most children arrive for the snack. They stay for the reading. Teachers work at the child's pace, in the language they think in, and keep a simple record of what has changed. Parents are visited at home once a term. No child is turned away for missing a day.",
      "Six centres now have a small computer room. The rest have a library, a water filter and a place to leave a school bag. The ambition is not to build more centres. It is to make each one good enough that a child wants to return tomorrow.",
    ],
    actions: [
      "Give one child a full school kit for a year for ₹500.",
      "Fund a learning centre for a month — 60 children — for ₹9,000.",
      "Stock a centre library with 40 new books for ₹6,000.",
    ],
    quote: {
      text: "I came for the khichdi. Then I found the books about snakes. Now I read one every week and tell my brother the facts he does not believe.",
      name: "Aarti, 11",
      role: "Vidya centre, Patna",
    },
  },
  {
    slug: "aashray",
    name: "Aashray",
    hindi: "आश्रय",
    verb: "Shelter",
    tagline: "A bed, a lock on the door, and someone who knows your name.",
    summary:
      "Nine shelters for elders and children without a safe home, with meals, medical checks, legal help and a route back to family where it is safe.",
    image: "/images/care.jpg",
    imageAlt:
      "A caregiver reading a storybook with a group of attentive children",
    unit: "safe night",
    unitAmount: 350,
    facts: [
      { value: "9", label: "shelters" },
      { value: "1,100", label: "people under a roof" },
      { value: "24 hr", label: "care staff on site" },
    ],
    paragraphs: [
      "Aashray is for the people who have run out of sofas to sleep on. Elders whose families cannot or will not care for them. Children found at railway stations. Women leaving a violent home who need a locked door before they can think about what comes next.",
      "Every shelter has a doctor on call, a hot meal three times a day and a caseworker who begins with the question: what would safe look like for you? Some people stay for a week. Some stay for years. Both are allowed. We do not move anyone out to make a number look better.",
      "Where a family reunion is safe, we work toward it slowly, with the person's consent and a follow-up visit every month for a year. Where it is not, we say so plainly. Dignity is not a slogan here. It is a lock, a bed and a name on a file.",
    ],
    actions: [
      "Give one safe night — bed, meals and care — for ₹350.",
      "Fund a medical camp at one shelter for ₹8,000.",
      "Support a caseworker's month of follow-up visits for ₹22,000.",
    ],
    quote: {
      text: "They asked what I wanted to eat on my first night. No one had asked me that in four years. I said dal and rice. They brought dal and rice.",
      name: "Rukmini, 68",
      role: "Aashray shelter, Varanasi",
    },
  },
  {
    slug: "sahayata",
    name: "Sahayata",
    hindi: "सहायता",
    verb: "Relief",
    tagline: "When the water rises, we are already there.",
    summary:
      "Winter blankets, dry rations, tarpaulin and medical camps in flood- and cold-affected districts.",
    image: "/images/warmth.jpg",
    imageAlt:
      "A volunteer handing a folded blanket to an elderly man at a relief distribution",
    unit: "winter kit",
    unitAmount: 750,
    facts: [
      { value: "24", label: "districts reached last year" },
      { value: "18,000", label: "relief kits distributed" },
      { value: "48 hr", label: "from alert to first distribution" },
    ],
    paragraphs: [
      "Sahayata is the part of our work that cannot be scheduled. Floods in the east, a cold wave in the north, a fire in a settlement. We keep four warehouses stocked and a list of local partners who can move before the roads are officially open.",
      "A relief kit is deliberately boring: a blanket, a ground sheet, dry rations for a week, soap, oral rehydration salts and a torch. It is packed so one person can carry it. Distribution is done with local women's groups, not from the back of a truck with a camera.",
      "After the water goes down, the work continues. We stay for the rebuild — roof sheets, school bags, a re-opened kitchen. Relief that ends when the news cycle ends is not relief. It is a photograph.",
    ],
    actions: [
      "Give one winter kit — blanket, socks, cap — for ₹750.",
      "Give a family a week of dry rations for ₹1,200.",
      "Fund a medical camp in a flood-affected district for ₹25,000.",
    ],
    quote: {
      text: "The water came at night. By the next afternoon there was a tarpaulin, a bag of rice and someone who wrote down our names. That is the whole story.",
      name: "Mohan Yadav",
      role: "Sahayata distribution, Bahraich",
    },
  },
];

export const stats = [
  {
    value: 3400000,
    suffix: "",
    label:
      "hot meals served since 2014 — from eleven kitchens across six states.",
  },
  {
    value: 6800,
    suffix: "",
    label:
      "children in our after-school learning centres every single week.",
  },
  {
    value: 1100,
    suffix: "",
    label:
      "elders and children with a bed, a meal and a locked door tonight.",
  },
  {
    value: 24,
    suffix: "",
    label:
      "districts reached with relief kits and medical camps in the last year.",
  },
];

export const faqs = [
  {
    q: "Where does my money actually go?",
    a: "Eighty-two paise of every rupee goes directly to programme costs — food, teachers, shelter staff, relief kits. Eleven paise goes to the people who run those programmes, and seven paise to audit, compliance and the boring things that keep a charity honest. Our audited accounts are published every year.",
  },
  {
    q: "Is my donation tax-deductible in India?",
    a: "Yes. NitiSeva Foundation is registered for 80G exemption. Enter your PAN on the donation form and we will email a receipt within seven working days. Donations from NRI accounts are welcome; the receipt is issued in Indian rupees.",
  },
  {
    q: "Can I choose which programme my money supports?",
    a: "You can. The donation form lets you direct your gift to Annapurna, Vidya, Aashray, Sahayata or wherever the need is greatest. Undesignated gifts are allocated by the programme team each quarter and reported in our annual note.",
  },
  {
    q: "Do you accept monthly donations?",
    a: "Online monthly giving is not live yet. If you would like to set up a standing instruction or a monthly UPI mandate, write to give@nitiseva.org and we will send the form. It usually takes one working day.",
  },
  {
    q: "Can I visit a kitchen or shelter?",
    a: "Yes, by appointment. The Lucknow kitchen hosts visitors on Saturday mornings. Shelters are private homes for the people who live there, so visits are limited and always arranged with residents' consent. Write to hello@nitiseva.org.",
  },
  {
    q: "How do you keep shelters safe?",
    a: "Every shelter has a resident committee, a written complaints channel that goes outside the shelter manager, unannounced visits from our safeguarding lead, and an external audit twice a year. No staff member is alone with a child behind a closed door.",
  },
  {
    q: "Can my company give through CSR?",
    a: "Yes. We have a CSR-1 registration and can issue the documentation your finance team needs. Write to partnerships@nitiseva.org with an idea of the programme and budget, and we will send a short concept note within a week.",
  },
  {
    q: "What payment methods can I use?",
    a: "UPI, credit and debit cards, net banking and popular wallets, processed securely by Cashfree. We never store your card or UPI details on our servers.",
  },
];

export const principles = [
  {
    title: "Dignity is the method",
    body: "No photographs of people receiving food. No queues arranged for a camera. The person at the plate is not a beneficiary; they are a guest.",
  },
  {
    title: "Local hands run it",
    body: "Eighty-four per cent of our staff live in the districts they serve. The kitchen manager in Patna is from Patna. That is not a diversity line; it is why the work lasts.",
  },
  {
    title: "Small enough to notice",
    body: "Eleven kitchens, nine shelters, thirty-four learning centres. We would rather know every manager by name than add a twelfth district for a map.",
  },
  {
    title: "Show the books",
    body: "Audited accounts, programme spending and salaries are published each year. If a number looks inconvenient, we publish it anyway.",
  },
];

export const team = [
  {
    name: "Meera Saxena",
    role: "Chair",
    note: "Teacher, curriculum writer and one of the four people who started the first kitchen.",
  },
  {
    name: "Arjun Prasad",
    role: "Trustee",
    note: "Chartered accountant. Reads the balance sheet before he reads the press release.",
  },
  {
    name: "Dr. Farah Siddiqui",
    role: "Trustee",
    note: "Public health physician. Runs our shelter medical reviews and nutrition standards.",
  },
  {
    name: "Ravi Kumar",
    role: "Executive Director",
    note: "Grew up in Lucknow, joined as a kitchen volunteer in 2013, still tastes the dal on Mondays.",
  },
];

export const reach = [
  "Uttar Pradesh",
  "Bihar",
  "Madhya Pradesh",
  "Rajasthan",
  "Uttarakhand",
  "Delhi",
];

export const fieldNotes = [
  {
    place: "Lucknow",
    note: "The Annapurna kitchen served 212 plates before noon. The line started at 6:40.",
  },
  {
    place: "Patna",
    note: "Fourteen children moved up a reading level this month. Two came every day for the first time.",
  },
  {
    place: "Bahraich",
    note: "Two hundred winter kits reached the flood plain before the road closed.",
  },
  {
    place: "Varanasi",
    note: "A resident at Aashray met her brother for the first time in nine years. She chose the tea.",
  },
];

export const donationTiers = [500, 1000, 2500, 5000];

export const programmeOptions = [
  { value: "general", label: "Wherever it is needed most" },
  ...programmes.map((programme) => ({
    value: programme.slug,
    label: `${programme.name} — ${programme.verb}`,
  })),
];

export const site = {
  name: "NitiSeva Foundation",
  shortName: "NitiSeva",
  email: "hello@nitiseva.org",
  giveEmail: "give@nitiseva.org",
  partnershipsEmail: "partnerships@nitiseva.org",
  volunteerEmail: "volunteer@nitiseva.org",
  phone: "+91 522 400 0000",
  phoneHref: "+915224000000",
  address: ["14 Ashok Marg", "Lucknow 226001", "Uttar Pradesh, India"],
  hours: "Monday to Saturday, 9:30 am – 5:30 pm IST",
  founded: 2014,
};
