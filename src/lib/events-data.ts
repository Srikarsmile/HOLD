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
  gallery: { src: string; alt: string }[];
  blogContent: {
    intro: string;
    sections: { heading: string; body: string }[];
    quote?: { text: string; author: string };
    closing: string;
  };
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
    image: "/media/roots/roots-1.jpeg",
    imageAlt: "Volunteers and families at the Roots & Wings Family Fun Day",
    badge: "300+ Attendees",
    gallery: [
      { src: "/media/roots/roots-1.jpeg", alt: "Roots & Wings team group photo" },
      { src: "/media/roots/roots-2.jpeg", alt: "Families enjoying the fun day activities" },
      { src: "/media/roots/roots-3.jpeg", alt: "Young person with medal" },
      { src: "/media/roots/roots-5.jpeg", alt: "Fathers at outdoor discussion" },
      { src: "/media/roots/roots-7.jpeg", alt: "Face painting at the event" },
      { src: "/media/roots/roots-10.jpeg", alt: "Dancing and performing" },
      { src: "/media/image-5.jpeg", alt: "Family at the fun day" },
      { src: "/media/image-6.jpeg", alt: "Youth activities" },
      { src: "/media/image-7.jpeg", alt: "Child showing medal" },
      { src: "/media/image-9.jpeg", alt: "Award ceremony" },
      { src: "/media/image-8.jpeg", alt: "Community support" },
      { src: "/media/image-3.jpeg", alt: "Community partners" },
    ],
    blogContent: {
      intro:
        "On a warm Saturday in June, Heavers Farm Primary School was transformed into a vibrant celebration of fatherhood, family, and community. The Roots & Wings Family Fun Day 2025 brought together over 300 people — fathers, mothers, grandparents, children, volunteers, and community leaders — for a day that was equal parts joyful and deeply meaningful.",
      sections: [
        {
          heading: "A Day Built Around Connection",
          body: "From the moment families arrived, the energy was electric. Father-and-child races kicked off the morning, with dads and kids laughing their way through three-legged races and egg-and-spoon challenges. The football pitch was alive with competitive yet playful matches, while younger children explored face painting stations and creative arts corners.\n\nBut Roots & Wings isn't just about fun — it's about intentional connection. Throughout the day, facilitated discussions gave fathers and male carers space to talk openly about vulnerability, love, and what it means to show up for their families. These conversations, held in small circles under the open sky, were some of the most powerful moments of the day.",
        },
        {
          heading: "Performances That Moved Us",
          body: "The stage came alive with dance performances and spoken-word acts from young people in the community. Their words carried weight — stories of identity, belonging, and hope that resonated with every person watching. These weren't just performances; they were declarations of resilience and pride.",
        },
        {
          heading: "The Tree of Hope",
          body: "One of the most touching elements was The Tree of Hope — a collaborative art installation where families wrote their hopes, dreams, and reflections on leaves and hung them from the branches. By the end of the day, the tree was full of messages about legacy, healing, and the future. It stood as a living testament to what this community believes in: that every voice matters, and every family deserves to be celebrated.",
        },
        {
          heading: "The Impact We Saw",
          body: "With around 100 fathers and male carers present, the visibility of men as active, caring, emotionally present figures was powerful. Children beamed with pride as their dads participated alongside them. Grandparents shared stories with younger generations. Volunteers from across the community gave their time to make every detail perfect.\n\nThe ripple effects of a day like this extend far beyond the event itself. Families left with stronger bonds. Young people felt heard. Fathers found a community of peers who understand the joys and challenges of parenthood.",
        },
      ],
      quote: {
        text: "I've never been to anything like this. My son kept saying 'Dad, this is the best day ever.' That means everything.",
        author: "Father & attendee",
      },
      closing:
        "Roots & Wings 2025 was more than an event — it was a movement. It proved that when you create space for families to come together with intention, magic happens. We're already planning the next one, and we can't wait to see what grows from the seeds planted today.",
    },
  },
  {
    slug: "talk-di-tingz-2025",
    title: "Talk Di TingZ — Youth Podcast Sessions",
    date: "Ongoing 2025",
    location: "Various community spaces, Croydon",
    desc: "A youth-led safe space to discuss identity, relationships, and life issues. Young people lead the conversation, building emotional literacy and driving cultural change through truth-telling and respect. Sessions take place across different community venues in Croydon, bringing together diverse voices.",
    highlights: [
      "Youth-led podcast recording sessions",
      "Open discussions on identity & relationships",
      "Building emotional literacy through dialogue",
      "Guest speakers from the community",
    ],
    impact: [],
    image: "/media/talkdi/talkdi-1.jpeg",
    imageAlt: "Talk Di TingZ youth podcast team out in the community",
    badge: "Youth-Led",
    gallery: [
      { src: "/media/talkdi/talkdi-1.jpeg", alt: "Talk Di TingZ team" },
    ],
    blogContent: {
      intro:
        "In a world that often talks at young people rather than with them, Talk Di TingZ flips the script. This youth-led podcast series gives young people in Croydon a microphone, a platform, and most importantly — the freedom to speak their truth.",
      sections: [
        {
          heading: "Youth Voices, Unfiltered",
          body: "Talk Di TingZ isn't your typical youth programme. There's no script, no agenda imposed from above. Young people choose the topics, lead the discussions, and shape every episode. From identity and mental health to relationships, masculinity, and what it really means to grow up in South London — nothing is off the table.\n\nThe sessions take place in community spaces across Croydon, creating a relaxed atmosphere that feels more like a conversation between friends than a formal recording. And that's exactly the point.",
        },
        {
          heading: "Building Emotional Literacy",
          body: "At its core, Talk Di TingZ is about emotional literacy. Through open dialogue, young people learn to name their feelings, listen to others, and understand that vulnerability is a strength. Guest speakers from the community — mentors, activists, and everyday role models — join the conversation, adding diverse perspectives and showing that growth is a lifelong journey.",
        },
        {
          heading: "More Than a Podcast",
          body: "The recordings are just one part of the picture. Each session builds trust within the group, creates a sense of belonging, and gives young people transferable skills — communication, critical thinking, and leadership. Many participants have gone on to take on mentoring roles themselves, passing on what they've learned to the next cohort.\n\nTalk Di TingZ is proof that when you trust young people with real responsibility and real conversations, they rise to the occasion every single time.",
        },
      ],
      quote: {
        text: "This is the only place where I feel like people actually listen to what I have to say. It changed how I see myself.",
        author: "Young person, age 17",
      },
      closing:
        "Talk Di TingZ continues to grow in 2025, with new episodes, new voices, and an expanding community of young people who refuse to be silenced. If you're a young person in Croydon looking for a space where your voice matters — this is it.",
    },
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
      { src: "/media/roots/roots-20.jpeg", alt: "High ropes adventure" },
      { src: "/media/roots/roots-18.jpeg", alt: "River crossing activity" },
      { src: "/media/roots/roots-12.jpeg", alt: "Football in the park" },
    ],
    blogContent: {
      intro:
        "Summer 2024 saw some of our most adventurous programming yet. We took young people out of their comfort zones and into the great outdoors — climbing high ropes, crossing rivers, and discovering that the limits they thought they had were just starting points.",
      sections: [
        {
          heading: "Pushing Boundaries Safely",
          body: "For many of our young people, outdoor adventure activities were a first. High ropes courses towered above them, river crossings demanded trust in their teammates, and nature trails pushed physical endurance. But every challenge was designed with safety and support at its core.\n\nExperienced instructors and Hold It Down mentors were alongside them every step of the way — not doing it for them, but showing them they could do it themselves. The look on a young person's face when they reach the top of a climbing wall for the first time? That's what this work is about.",
        },
        {
          heading: "Teamwork Changes Everything",
          body: "The outdoor environment strips away the usual distractions. No phones, no social media — just the group, the challenge, and the need to work together. Young people who arrived as acquaintances left as brothers. River crossings required communication, trust, and the willingness to catch someone when they stumble.\n\nThese are skills that translate directly back to everyday life. When you've trusted someone to hold your rope 30 feet in the air, resolving a disagreement on the ground feels a lot more manageable.",
        },
        {
          heading: "Football, Fun & Fresh Air",
          body: "It wasn't all intensity. Football matches in the park, nature walks, and just hanging out in the fresh air gave everyone a chance to relax, connect, and enjoy being young. Physical activity and wellbeing go hand in hand, and days spent outdoors left our young people energised, proud, and hungry for more.",
        },
      ],
      quote: {
        text: "I was scared of heights but I did the high ropes anyway. The team kept cheering me on. I didn't know I could do something like that.",
        author: "Young person, age 14",
      },
      closing:
        "Our outdoor adventures proved that resilience isn't something you're born with — it's something you build. Every challenge conquered, every fear faced, every teammate supported added another layer of confidence. These experiences stay with young people long after the day ends.",
    },
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
    blogContent: {
      intro:
        "On an autumn evening at Alchemy in Croydon, Hold It Down CIC brought together a powerful room of community members, parents, mentors, volunteers, and supporters. This wasn't just a networking night — it was a celebration of everything we've built together and a launchpad for what's next.",
      sections: [
        {
          heading: "A Room Full of Purpose",
          body: "The energy at Alchemy was tangible. Parents who had seen their children transform through our programmes stood alongside mentors who had given their time and heart to the cause. Community leaders, local organisations, and supporters old and new filled the space with warmth and shared purpose.\n\nThe evening opened with reflections on the year's achievements — the families served, the young people empowered, the connections made. But this wasn't about looking back. It was about looking forward.",
        },
        {
          heading: "Stories That Inspire",
          body: "The most powerful moments came from the stories shared by community members themselves. A father spoke about how Roots & Wings changed his relationship with his son. A young person described finding their voice through Talk Di TingZ. A volunteer reflected on what it means to give time to something bigger than yourself.\n\nThese testimonials weren't rehearsed. They were raw, honest, and deeply moving. They reminded everyone in the room why this work matters.",
        },
        {
          heading: "Planning the Future Together",
          body: "The second half of the evening was dedicated to co-production — a core principle of Hold It Down. Attendees broke into groups to discuss what programmes they wanted to see, what the community needs most, and how we can all play a part.\n\nNew partnerships were formed. Ideas were exchanged. And by the end of the night, it was clear that Hold It Down isn't just an organisation — it's a movement powered by its community.",
        },
      ],
      quote: {
        text: "Being in that room reminded me that I'm not alone in this. There's a whole community behind us, pushing for the same things.",
        author: "Parent & community member",
      },
      closing:
        "The Community Gathering & Networking Night was a turning point for Hold It Down CIC. It strengthened existing bonds, forged new ones, and set the stage for an even more impactful year ahead. When community comes together with intention, change is inevitable.",
    },
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
    blogContent: {
      intro:
        "Not every breakthrough happens with words. Sometimes it happens with paint, clay, fabric, and the quiet concentration of creating something with your hands. Our Creative Arts & Wellbeing Workshops gave young people and families in Croydon exactly that — a calm, inclusive space where creativity becomes a pathway to healing.",
      sections: [
        {
          heading: "Creativity as Therapy",
          body: "These workshops were designed with wellbeing at their heart. Every activity — from collage-making to craft projects — was chosen to promote mindfulness, self-expression, and emotional processing. For young people who find it hard to talk about their feelings, art offers a different language.\n\nFacilitators created a judgment-free environment where there was no wrong answer and no wrong way to create. The only rule? Be yourself.",
        },
        {
          heading: "Families Creating Together",
          body: "Some of the most beautiful moments came when families worked side by side. Parents and children collaborating on a piece of art, sharing ideas, and learning from each other. These shared creative experiences strengthened bonds in ways that a conversation alone sometimes can't.\n\nGrandparents taught traditional techniques. Children brought fresh ideas. And together, they created something new — both on the table and in their relationship.",
        },
        {
          heading: "Identity Through Art",
          body: "A central theme across the workshops was identity exploration. Participants created pieces that reflected who they are, where they come from, and who they want to become. Culture, heritage, and personal story were woven into every session.\n\nThe result was a collection of artwork that told the story of a community — diverse, resilient, and deeply creative. These pieces weren't just crafts. They were declarations of identity and belonging.",
        },
      ],
      quote: {
        text: "I didn't think I was creative, but when I saw what I made, I was proud. It felt like a part of me was on that paper.",
        author: "Workshop participant, age 15",
      },
      closing:
        "Our Creative Arts & Wellbeing Workshops showed that healing doesn't always look like a therapy room. Sometimes it looks like a table covered in art supplies, a room full of people creating together, and the quiet pride of making something that's entirely your own.",
    },
  },
];
