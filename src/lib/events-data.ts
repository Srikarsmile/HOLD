export interface GalleryItem {
  src: string;
  alt: string;
  type?: "image" | "video";
}

export interface EventData {
  slug: string;
  title: string;
  date: string;
  location: string;
  desc: string;
  highlights: string[];
  impact: string[];
  image: string;
  imageAlt: string;
  badge: string;
  gallery: GalleryItem[];
}

export const events: EventData[] = [
  {
    slug: "roots-and-wings-2025",
    title: "Roots & Wings Family Fun Day 2025",
    date: "14 June 2025",
    location: "Heavers Farm Primary School, Croydon",
    desc: "Approximately 300 people attended, including around 100 fathers and male carers, 100 children and young people aged 5–24, and a wider group of mothers, grandparents, volunteers and community members. The day was filled with father-and-child races, football challenges, dance performances, spoken-word acts, and facilitated men's discussions on vulnerability and love.",
    highlights: [
      "Father-and-child races & traditional family games",
      "Football & athletics challenges",
      "Dance and spoken-word performances",
      "Facilitated men's discussion on vulnerability and love",
      "The Tree of Hope — families reflecting on legacy and the future",
      "Face painting and creative activities for children",
    ],
    impact: [
      "Emotional wellbeing & sense of belonging among children",
      "Positive male role modelling & visibility of men as carers",
      "Strengthened family bonds & community cohesion",
      "Increased youth voice & leadership",
    ],
    image: "/media/roots/roots-11.jpeg",
    imageAlt: "Children playing at the Roots & Wings Family Fun Day",
    badge: "300+ Attendees",
    gallery: [
      { src: "/media/roots/roots-11.jpeg", alt: "Children running and playing at the fun day" },
      { src: "/media/image-1.jpeg", alt: "Hold It Down CIC founders at the selfie booth" },
      { src: "/media/image-5.jpeg", alt: "Family in matching red shirts at the fun day" },
      { src: "/media/image-6.jpeg", alt: "Girl with face painting smiling at the fun day" },
      { src: "/media/image-7.jpeg", alt: "Boy proudly showing his medal" },
      { src: "/media/image-9.jpeg", alt: "Girl with trophy and medal at award ceremony" },
      { src: "/media/image-8.jpeg", alt: "Food donations from Tesco at community stall" },
      { src: "/media/image-3.jpeg", alt: "Community authors showcasing children's books" },
      { src: "/media/roots/roots-23.jpeg", alt: "Young people doing crafts at outdoor workshop" },
      { src: "/media/roots/roots-24.jpeg", alt: "Children playing football outdoors" },
      { src: "/media/image-10.jpeg", alt: "Volunteers in Roots & Wings t-shirts" },
    ],
  },
  {
    slug: "talk-di-tingz-2025",
    title: "Talk Di TingZ — Community Walk Sessions",
    date: "Ongoing 2025",
    location: "Various community spaces, Croydon",
    desc: "A youth-led community walk session creating safe spaces to discuss identity, relationships, and life issues. Young people lead the conversation while walking together, building emotional literacy and driving cultural change through truth-telling and respect. Sessions take place across different community venues and outdoor spaces in Croydon, bringing together diverse voices.",
    highlights: [
      "Youth-led community walk sessions",
      "Open discussions on identity & relationships",
      "Building emotional literacy through dialogue",
      "Guest speakers from the community",
    ],
    impact: [],
    image: "/media/talkdi/talkdi-1.jpeg",
    imageAlt: "Talk Di TingZ youth community walk session",
    badge: "Youth-Led",
    gallery: [
      { src: "/media/talkdi/talkdi-1.jpeg", alt: "Talk Di TingZ team" },
      { src: "/media/talkdi/talkdi-vid-1.mp4", alt: "Talk Di TingZ session 1", type: "video" },
      { src: "/media/talkdi/talkdi-vid-2.mp4", alt: "Talk Di TingZ session 2", type: "video" },
      { src: "/media/talkdi/talkdi-vid-3.mp4", alt: "Talk Di TingZ session 3", type: "video" },
      { src: "/media/talkdi/talkdi-vid-4.mp4", alt: "Talk Di TingZ session 4", type: "video" },
      { src: "/media/talkdi/talkdi-vid-5.mp4", alt: "Talk Di TingZ session 5", type: "video" },
      { src: "/media/talkdi/talkdi-vid-6.mp4", alt: "Talk Di TingZ session 6", type: "video" },
      { src: "/media/talkdi/talkdi-vid-7.mp4", alt: "Talk Di TingZ session 7", type: "video" },
      { src: "/media/talkdi/talkdi-vid-8.mp4", alt: "Talk Di TingZ session 8", type: "video" },
      { src: "/media/talkdi/talkdi-vid-9.mp4", alt: "Talk Di TingZ session 9", type: "video" },
      { src: "/media/talkdi/talkdi-vid-10.mp4", alt: "Talk Di TingZ session 10", type: "video" },
      { src: "/media/talkdi/talkdi-vid-11.mp4", alt: "Talk Di TingZ session 11", type: "video" },
      { src: "/media/talkdi/talkdi-vid-12.mp4", alt: "Talk Di TingZ session 12", type: "video" },
    ],
  },
  {
    slug: "outdoor-adventures-2024",
    title: "Outdoor Adventure & Team Building",
    date: "Summer 2024",
    location: "Various outdoor centres",
    desc: "Young people were taken on outdoor adventure trips designed to build resilience, teamwork and confidence. Activities included high ropes, river crossings, football matches and nature exploration — pushing boundaries in a safe, supported environment.",
    highlights: [
      "High ropes & climbing challenges",
      "River crossing adventures",
      "Football & sports in the park",
      "Nature walks and exploration",
      "Team-building exercises",
    ],
    impact: [
      "Increased confidence & resilience",
      "Stronger peer bonds & teamwork",
      "Physical activity & wellbeing",
    ],
    image: "/media/roots/roots-20.jpeg",
    imageAlt: "Young person on high ropes adventure course",
    badge: "Youth Adventure",
    gallery: [
      { src: "/media/roots/roots-20.jpeg", alt: "Young person climbing high ropes pole" },
      { src: "/media/roots/roots-21.jpeg", alt: "Boy balancing on rope bridge course" },
      { src: "/media/roots/roots-17.jpeg", alt: "Group watching as child crosses high ropes" },
      { src: "/media/roots/roots-16.jpeg", alt: "Person laughing on high ropes challenge" },
      { src: "/media/roots/roots-18.jpeg", alt: "Girl jumping into river on adventure day" },
      { src: "/media/roots/roots-19.jpeg", alt: "Canoeing on the river" },
      { src: "/media/roots/roots-12.jpeg", alt: "Football match in the park" },
    ],
  },
  {
    slug: "community-gathering-2024",
    title: "Community Gathering & Networking Night",
    date: "Autumn 2024",
    location: "Alchemy, Croydon",
    desc: "An evening gathering bringing together community members, parents, mentors and supporters for networking, sharing stories and building connections. The event celebrated the work done so far and explored next steps for Hold It Down's mission.",
    highlights: [
      "Community networking & connections",
      "Story sharing & testimonials",
      "Discussion on future programmes",
      "Celebrating collective achievements",
    ],
    impact: [
      "Wider community engagement",
      "New partnerships & collaborations",
      "Increased visibility for Hold It Down CIC",
    ],
    image: "/media/roots/roots-15.jpeg",
    imageAlt: "Community members gathered for networking evening",
    badge: "Community",
    gallery: [
      { src: "/media/roots/roots-15.jpeg", alt: "Community gathering" },
    ],
  },
  {
    slug: "creative-workshops-2024",
    title: "Creative Arts & Wellbeing Workshops",
    date: "2024",
    location: "Community spaces, Croydon",
    desc: "A series of creative workshops designed to help young people and families express themselves through art, crafts, and creative activities. These sessions provided a calm, inclusive environment for building confidence and promoting emotional wellbeing.",
    highlights: [
      "Craft-making & creative arts",
      "Wellbeing-focused sessions",
      "Inclusive family activities",
      "Creative expression & identity exploration",
    ],
    impact: [
      "Improved emotional wellbeing",
      "Creative confidence & self-expression",
      "Family bonding through shared activities",
    ],
    image: "/media/roots/roots-22.jpeg",
    imageAlt: "Creative crafts and activities made by participants",
    badge: "Wellbeing",
    gallery: [
      { src: "/media/roots/roots-22.jpeg", alt: "Creative workshop outputs" },
    ],
  },
];
