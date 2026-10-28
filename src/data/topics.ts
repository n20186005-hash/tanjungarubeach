// Registry for the 31 English long-tail guide pages.
// Each entry is a self-contained guide; content is intentionally distinct so the
// pages do not cannibalise the homepage or each other. Facts that can change
// (prices, opening times) carry a verification note in the site's E-E-A-T style.

export type TopicModule = 'beaches' | 'practical' | 'food' | 'itineraries';

export interface TopicSection {
  heading: string;
  body: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  module: TopicModule;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: TopicSection[];
  faq: TopicFaq[];
  related: string[];
  updated: string;
}

export const MODULE_LABELS: Record<TopicModule, string> = {
  beaches: 'Beach zones & background',
  practical: 'Getting there & practical tips',
  food: 'Food, drinks & nearby spots',
  itineraries: 'Itineraries & special trips',
};

export const TOPIC_URL = (slug: string) => `/${slug}/`;

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export const TOPIC_SLUGS: string[] = [];

const TOPICS_RAW: Topic[] = [
  // ───────────────────────── Module 1: Beach zones ─────────────────────────
  {
    slug: 'first-beach-tanjung-aru',
    module: 'beaches',
    title: 'First Beach (Pantai 1) Tanjung Aru — Food, Playground & Sunset Crowds',
    metaTitle: 'First Beach Tanjung Aru (Pantai 1): Food Stalls, Playground & Sunset',
    metaDescription:
      'First Beach is the busiest part of Tanjung Aru Beach in Kota Kinabalu — food stalls, a children’s playground and the most popular sunset viewpoint. Hours, what to eat and how to get there.',
    intro: [
      'First Beach, locally called Pantai 1, is the main and most lively stretch of Tanjung Aru Beach. It sits closest to the Tanjung Aru Plaza entrance and is where most visitors base themselves for the evening sunset.',
      'If you want food, facilities and a lively atmosphere within a short walk, this is the section to aim for. It is also the most crowded at golden hour, so arrive early to claim a spot on the sand.',
    ],
    sections: [
      {
        heading: 'What you will find on First Beach',
        body: [
          'The shore here is backed by casual food and drinks stalls selling grilled corn, young coconut, ice cream and local snacks. A children’s playground and open lawn make it the default choice for families.',
          'Souvenir stalls and small shops line the access road, and public toilets and basic facilities are concentrated in this section rather than the quieter beaches further along.',
        ],
      },
      {
        heading: 'Best time to be here',
        body: [
          'The beach is open through the day, but the natural peak is the last one to two hours before sunset when the sky over the South China Sea turns orange. Aim to arrive 60–90 minutes before the listed sunset time for your visit date.',
          'Weekday evenings are noticeably calmer than weekends and public holidays, when the lawn and car parks fill up.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is First Beach the same as Tanjung Aru Beach?',
        a: 'Tanjung Aru Beach is one continuous shoreline split into three named sections. First Beach (Pantai 1) is the busiest, northernmost stretch with the most food stalls and facilities.',
      },
      {
        q: 'Can you swim at First Beach?',
        a: 'Always check on-site signs and lifeguard or safety advice before entering the water. Conditions and currents change, and not every section is safe for swimming at all times.',
      },
    ],
    related: ['second-beach-tanjung-aru', 'tanjung-aru-night-market', 'tanjung-aru-beach-safety'],
    updated: 'October 2026',
  },
  {
    slug: 'second-beach-tanjung-aru',
    module: 'beaches',
    title: 'Second Beach (Pantai 2) Tanjung Aru — Quieter Sand & Shade',
    metaTitle: 'Second Beach Tanjung Aru (Pantai 2): Quiet Sunset & Picnic Spot',
    metaDescription:
      'Second Beach (Tanjung Aru Beach 2) is the calmer middle stretch of Tanjung Aru — shaded by casuarina trees, good for picnics and a relaxed sunset away from the crowds.',
    intro: [
      'Second Beach, also written Tanjung Aru Beach 2 or Pantai 2, is the middle section of the shoreline. It is noticeably quieter than First Beach and is the local favourite for a relaxed picnic or an evening stroll.',
      'Casuarina (ru) trees line the back of the beach and give natural shade through the afternoon, which is why many families set up here rather than on the open First Beach lawn.',
    ],
    sections: [
      {
        heading: 'Why choose Pantai 2',
        body: [
          'If your priority is a peaceful spot to lay a mat, read a book or let children play without the bustle of the food court, Second Beach fits. The sand is the same continuous beach, just with fewer stalls.',
          'Bring your own water and snacks — there are far fewer vendors here than on First Beach, and the nearest toilets and food are a short walk back toward the main entrance.',
        ],
      },
      {
        heading: 'Getting to Second Beach',
        body: [
          'From the First Beach entrance, follow the shoreline south on foot; the walk is flat and takes only a few minutes. A Grab or taxi will usually drop you at the main gate, from where you walk in.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Second Beach free to enter?',
        a: 'Beach access at Tanjung Aru is free; there is no ticket gate. You may pay only for parking if you drive.',
      },
      {
        q: 'Which beach is best for families?',
        a: 'First Beach has the playground and stalls within steps; Second Beach is better if you want shade and quiet. Many families split the difference by picnicing on Pantai 2 and walking to First Beach for food.',
      },
    ],
    related: ['first-beach-tanjung-aru', 'third-beach-tanjung-aru', 'tanjung-aru-beach-parking'],
    updated: 'October 2026',
  },
  {
    slug: 'third-beach-tanjung-aru',
    module: 'beaches',
    title: 'Third Beach (Pantai 3) Tanjung Aru — The Quiet End for Photographers',
    metaTitle: 'Third Beach Tanjung Aru (Pantai 3): Quiet End & Photography',
    metaDescription:
      'Third Beach (Tanjung Aru Beach 3) is the southern, quietest end of the shoreline — favoured by photographers and anyone wanting solitude near the resort headland.',
    intro: [
      'Third Beach, or Pantai 3, is the far, southern end of Tanjung Aru Beach. It is the least developed stretch and the one visitors pick when they want the fewest people and the most open horizon.',
      'It curves toward the resort headland, so the light and reflections at sunset are slightly different from the busy First Beach lookout a kilometre north.',
    ],
    sections: [
      {
        heading: 'What to expect',
        body: [
          'Expect almost no stalls and minimal facilities — this is a bring-your-own-everything stretch. The trade-off is real quiet and uninterrupted views.',
          'Because it is furthest from the entrance, allow extra walking time if you arrive by car and park near the main gate.',
        ],
      },
      {
        heading: 'For photographers',
        body: [
          'The open sightline toward the sea and the resort silhouette makes this a calm spot for long-exposure sunset shots. Arrive well before golden hour and scout a clear stretch of sand.',
        ],
      },
    ],
    faq: [
      {
        q: 'How far is Third Beach from the entrance?',
        a: 'It is the farthest of the three sections, a flat walk of several minutes along the sand or path from the main First Beach gate.',
      },
      {
        q: 'Is it safe to walk to Third Beach alone at sunset?',
        a: 'Stay aware of light fading and keep to the main beach path. As with any remote stretch, tell someone your plan and head back before it is fully dark.',
      },
    ],
    related: ['second-beach-tanjung-aru', 'tanjung-aru-sunset-photography', 'tanjung-aru-beach-safety'],
    updated: 'October 2026',
  },
  {
    slug: 'taman-pantai-tanjung-aru',
    module: 'beaches',
    title: 'Taman Pantai Tanjung Aru — Park, Lawns & Green Space',
    metaTitle: 'Taman Pantai Tanjung Aru: Park, Lawns & Green Space Kota Kinabalu',
    metaDescription:
      'Taman Pantai Tanjung Aru is the seaside park and lawn area behind the beach in Kota Kinabalu — playgrounds, open grass and shaded spots for families and evening exercise.',
    intro: [
      'Taman Pantai Tanjung Aru (Tanjung Aru Beach Park) is the landscaped green space that fronts the beach. Searches for “taman pantai tanjung aru kota kinabalu” usually mean this park-and-beach combination rather than a separate gated attraction.',
      'It is the casual backyard of the neighbourhood: evening joggers, families on the lawn, and vendors selling snacks all share the same open ground.',
    ],
    sections: [
      {
        heading: 'What the park offers',
        body: [
          'Open grass lawns, a children’s playground, shade trees and paved paths connect the park to the beach. It is free to use and is busiest from late afternoon into the sunset hour.',
          'Perdana Park, a separate park with a musical fountain, is nearby but has its own entrance and hours — do not assume the two share one ticket or gate.',
        ],
      },
      {
        heading: 'Good to know',
        body: [
          'There is no single “opening time” for the public park; treat it as an open civic space used mainly in the cooler evening. Individual stalls and the playground follow their own schedules.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Taman Pantai Tanjung Aru the same as Perdana Park?',
        a: 'No. The beach park (Taman Pantai) and Perdana Park (musical fountain) are adjacent but separate. Perdana Park has its own entrance and nightly fountain schedule.',
      },
      {
        q: 'Is there an entrance fee?',
        a: 'No ticket is charged for the public beach park. Costs come only from parking, food and any paid activities.',
      },
    ],
    related: ['first-beach-tanjung-aru', 'perdana-park-fountain', 'tanjung-aru-beach-parking'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-beach-history',
    module: 'beaches',
    title: 'Tanjung Aru Beach History & Geography — Kota Kinabalu’s Sunset Coast',
    metaTitle: 'Tanjung Aru Beach History & Geography: Kota Kinabalu Sunset Coast',
    metaDescription:
      'A short background on Tanjung Aru Beach — where the name comes from, its geography in Kota Kinabalu, Sabah, and how the casuarina-fringed coast became the city’s sunset spot.',
    intro: [
      'Tanjung Aru Beach is a long public shoreline on the southwestern edge of Kota Kinabalu, the capital of Sabah, Malaysia. The name “Aru” is tied to the casuarina trees (pokok ru) that have long lined the coast.',
      'This guide is background only — for practical visiting details see the beach-zone and transport guides linked below.',
    ],
    sections: [
      {
        heading: 'Name and landscape',
        body: [
          'The casuarina (ru) trees give the area its identity and much of its shade. The beach itself is a gently curving sweep of sand facing west over the South China Sea, which is what makes the sunset so reliable.',
        ],
      },
      {
        heading: 'A neighbourhood, not a resort',
        body: [
          'Unlike gated resort beaches, Tanjung Aru is a public coastal park used by locals daily. Resorts and hotels sit at the southern end, but the beach in front remains open to everyone.',
        ],
      },
    ],
    faq: [
      {
        q: 'How did Tanjung Aru get its name?',
        a: '“Aru” refers to the casuarina (ru) trees that fringe the coast. The name is used for the beach, the suburb and nearby roads.',
      },
      {
        q: 'What region is the beach in?',
        a: 'It is in Tanjung Aru, Kota Kinabalu, Sabah, Malaysia — about a 10–15 minute drive from the city centre and the airport.',
      },
    ],
    related: ['first-beach-tanjung-aru', 'getting-to-tanjung-aru-beach', 'best-beaches-sabah-comparison'],
    updated: 'October 2026',
  },

  // ───────────────────────── Module 2: Practical ─────────────────────────
  {
    slug: 'getting-to-tanjung-aru-beach',
    module: 'practical',
    title: 'Getting to Tanjung Aru Beach from Kota Kinabalu City',
    metaTitle: 'How to Get to Tanjung Aru Beach from KK City: Grab, Bus & Drive',
    metaDescription:
      'Ways to reach Tanjung Aru Beach from central Kota Kinabalu — Grab/rideshare cost range, local buses, driving and tips for avoiding evening traffic.',
    intro: [
      'Tanjung Aru Beach is close to the centre of Kota Kinabalu, so getting there is straightforward. Most visitors use a rideshare app such as Grab, which is the easiest door-to-door option.',
      'This guide focuses on the trip from the KK city centre and the waterfront area to the beach.',
    ],
    sections: [
      {
        heading: 'By Grab or rideshare',
        body: [
          'A rideshare from central KK to the beach is typically a short trip. Fares vary with demand and time of day; confirm the estimate in the app before you book rather than relying on a fixed number.',
          'Book your return ride a little before you actually want to leave, because drivers can be scarce right at sunset peak when everyone heads home at once.',
        ],
      },
      {
        heading: 'By car or taxi',
        body: [
          'Driving yourself gives flexibility for sunset and dinner. The roads are straightforward; set the destination to “Tanjung Aru Beach” and follow signs toward the Tanjung Aru / airport side of the city.',
          'Evening traffic out of the city can build up, so leave with buffer time if you are aiming for a specific sunset.',
        ],
      },
      {
        heading: 'By public bus',
        body: [
          'Local buses and minibuses connect parts of KK, but routes and frequency change. If you rely on public transport, check the current line and last service time locally, and expect a walk from the nearest stop to the sand.',
        ],
      },
    ],
    faq: [
      {
        q: 'How far is Tanjung Aru Beach from KK city centre?',
        a: 'Roughly a 10–15 minute drive depending on traffic. It is close enough for a casual evening trip.',
      },
      {
        q: 'Is it easy to get a Grab back at night?',
        a: 'Usually yes, but right at sunset the demand spikes. Book a few minutes early or walk slightly away from the busiest gate where more drivers circulate.',
      },
    ],
    related: ['tanjung-aru-beach-parking', 'kota-kinabalu-airport-tanjung-aru', 'tanjung-aru-visit-duration'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-beach-parking',
    module: 'practical',
    title: 'Tanjung Aru Beach Parking — Where to Park & When It Fills Up',
    metaTitle: 'Tanjung Aru Beach Parking: Where to Park & Busy Times',
    metaDescription:
      'Parking at Tanjung Aru Beach near Kota Kinabalu — main car park location, busy periods, and tips for weekends and public holidays.',
    intro: [
      'If you drive to Tanjung Aru Beach, the main parking sits near the First Beach entrance and Tanjung Aru Plaza. It is the most convenient base for food, toilets and the sunset lawn.',
      'Parking here is the one cost many drivers pay, and it fills quickly at peak.',
    ],
    sections: [
      {
        heading: 'Where to park',
        body: [
          'The primary car park serves the First Beach / Plaza side. From there it is a short walk to the sand, food stalls and playground.',
          'If the main lot is full, drivers circulate on the access road; avoid blocking gates or emergency access.',
        ],
      },
      {
        heading: 'When it gets busy',
        body: [
          'The lot fills from late afternoon toward sunset, especially on weekends and Malaysian public holidays. Arriving earlier in the afternoon greatly improves your odds of a spot close to the entrance.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is parking paid at Tanjung Aru Beach?',
        a: 'Beach access is free, but the car park may charge a fee — rates can change, so check the sign on site. Have small cash ready.',
      },
      {
        q: 'Where do I park for Second or Third Beach?',
        a: 'Most visitors park at the main First Beach lot and walk south along the shore. There is no separate large lot at the quieter ends.',
      },
    ],
    related: ['getting-to-tanjung-aru-beach', 'first-beach-tanjung-aru', 'taman-pantai-tanjung-aru'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-sunset-times-weather',
    module: 'practical',
    title: 'Tanjung Aru Sunset Times & Weather — Best Months & What to Check',
    metaTitle: 'Tanjung Aru Sunset Times & Weather: Best Months to Visit',
    metaDescription:
      'When to see the best sunset at Tanjung Aru Beach — how sunset time shifts through the year, the dry vs wet season in Kota Kinabalu, and a weather check before you go.',
    intro: [
      'Tanjung Aru is famous for its sunset, and the timing shifts noticeably through the year. Rather than memorising one clock time, check the sunset time for your specific date and arrive 60–90 minutes before it.',
      'This guide explains the pattern and the seasons so you can plan, without promising a fixed year-round time.',
    ],
    sections: [
      {
        heading: 'How the sunset time moves',
        body: [
          'Around the equator, sunset stays in a fairly narrow window but still shifts by roughly half an hour between the solstices. Always look up the exact time for your visit date instead of assuming one fixed hour.',
          'The sky often colours up 20–40 minutes before the sun actually drops, so being on the sand early captures the full show.',
        ],
      },
      {
        heading: 'Seasons in Kota Kinabalu',
        body: [
          'Sabah has a wet and drier pattern rather than four seasons. The wetter months bring more cloud and afternoon rain that can block the sunset, while clearer spells give the classic unobstructed horizon.',
          'Because weather is local and day-to-day, check the Kota Kinabalu forecast on the morning of your visit and have a backup plan if storms are forecast.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the best month for sunset at Tanjung Aru?',
        a: 'There is no single perfect month; clearer skies tend to come in the drier periods. The reliable rule is to check the forecast for your date and arrive early.',
      },
      {
        q: 'What if it rains at sunset?',
        a: 'Clouds can hide the sun, but storm edges sometimes produce dramatic colour. If heavy rain is forecast, consider the rainy-day alternative guide.',
      },
    ],
    related: ['tanjung-aru-sunset-photography', 'tanjung-aru-rainy-day', 'first-beach-tanjung-aru'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-with-kids',
    module: 'practical',
    title: 'Tanjung Aru with Kids — Family Beach, Playground & Safety',
    metaTitle: 'Tanjung Aru with Kids: Playground, Family Tips & Safety',
    metaDescription:
      'Visiting Tanjung Aru Beach with children — the playground, shallow-edge family spots, what to bring and water-safety reminders for families.',
    intro: [
      'Tanjung Aru is one of the easier Kota Kinabalu beaches to visit with children because of its open lawn, playground and food stalls within reach on First Beach.',
      'This guide highlights the family-friendly practicalities so a sunset trip stays relaxed.',
    ],
    sections: [
      {
        heading: 'Why families pick First Beach',
        body: [
          'The children’s playground and lawn are on the First Beach side, with food and toilets a short walk away. Second Beach offers more shade if your children need a break from the sun.',
        ],
      },
      {
        heading: 'What to bring',
        body: [
          'Bring water, sun protection, a mat or change of clothes, and snacks even though stalls are nearby. The breeze is pleasant but the equatorial sun is strong in the middle of the day.',
        ],
      },
      {
        heading: 'Water safety',
        body: [
          'Never assume the water is safe for swimming. Read on-site signs, keep non-swimmers within arm’s reach, and treat any “safe to swim” claim as something to verify locally rather than a guarantee.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there shade for kids?',
        a: 'Second Beach has casuarina shade; First Beach is more open, so bring a sun umbrella or use the late-afternoon window.',
      },
      {
        q: 'Are there toilets and changing facilities?',
        a: 'Public toilets are concentrated on the First Beach side. Facilities on the quieter beaches are limited, so plan accordingly.',
      },
    ],
    related: ['first-beach-tanjung-aru', 'tanjung-aru-beach-safety', 'tanjung-aru-visit-duration'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-accessibility',
    module: 'practical',
    title: 'Tanjung Aru Beach Accessibility — Paths, Toilets & Wheelchair Notes',
    metaTitle: 'Tanjung Aru Beach Accessibility: Paths, Toilets & Wheelchair Tips',
    metaDescription:
      'Accessibility at Tanjung Aru Beach — paved paths, toilets, wheelchair and stroller access, and what to expect on the sand.',
    intro: [
      'Tanjung Aru is a public park with paved paths and open lawns, which makes much of it easier to navigate than a remote beach. This guide sets realistic expectations rather than guaranteeing facilities.',
      'Conditions can change, so confirm specific accessibility needs on site or with the local authority before you travel.',
    ],
    sections: [
      {
        heading: 'Paths and level access',
        body: [
          'The park has paved walkways and flat lawn areas near the First Beach entrance, suitable for strollers and many wheelchair users. The sand itself is uneven and not firm.',
        ],
      },
      {
        heading: 'Toilets and resting spots',
        body: [
          'Public toilets and shaded seating are concentrated on the First Beach side. The further beaches have far fewer facilities, so plan rest stops near the main entrance.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can a wheelchair reach the shoreline?',
        a: 'Paved paths reach the beach edge, but moving across soft sand is difficult. Stay on the firm path and pick a viewpoint rather than aiming to reach the waterline.',
      },
      {
        q: 'Is it stroller-friendly?',
        a: 'Yes on the paths and lawn. A sturdy stroller handles the paved areas well; avoid the soft sand with a lightweight stroller.',
      },
    ],
    related: ['tanjung-aru-with-kids', 'tanjung-aru-beach-parking', 'first-beach-tanjung-aru'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-sunset-photography',
    module: 'practical',
    title: 'Tanjung Aru Sunset Photography — Best Spots, Timing & Settings',
    metaTitle: 'Tanjung Aru Sunset Photography: Best Spots & Camera Tips',
    metaDescription:
      'How to photograph the Tanjung Aru sunset — best vantage points on the three beaches, timing, and practical camera and phone settings for the Kota Kinabalu coast.',
    intro: [
      'The west-facing horizon and open sky make Tanjung Aru one of Sabah’s most photographed sunsets. You do not need pro gear — a phone works — but a few choices improve the result.',
      'This guide covers where to stand and when, without promising a specific sunset time.',
    ],
    sections: [
      {
        heading: 'Where to shoot',
        body: [
          'First Beach gives the classic wide horizon with silhouettes of stalls and palms. Third Beach offers a calmer, more open frame toward the resort headland. Perdana Park’s fountain is a different, lit subject a short walk away.',
        ],
      },
      {
        heading: 'Timing and light',
        body: [
          'Arrive 60–90 minutes before sunset to capture the build-up of colour. The most saturated light is often in the 20–30 minutes around the sun dropping. Stay a little after for the blue-hour afterglow.',
        ],
      },
      {
        heading: 'Practical settings',
        body: [
          'On a phone, tap to lock exposure on the bright sky and lower it slightly to keep colour. A tripod helps for blue hour. For cameras, shoot RAW and bracket if you want detail in both sky and foreground.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a tripod?',
        a: 'Not for the bright sunset, but a small tripod helps for the darker blue-hour shots after the sun sets.',
      },
      {
        q: 'Is drone photography allowed?',
        a: 'Drone rules change and coastal areas near the airport can be restricted. Check current civil-aviation rules and fly only where permitted.',
      },
    ],
    related: ['third-beach-tanjung-aru', 'tanjung-aru-photography-route', 'tanjung-aru-sunset-times-weather'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-beach-safety',
    module: 'practical',
    title: 'Tanjung Aru Beach Safety — Swimming, Currents, Sun & Jellyfish',
    metaTitle: 'Tanjung Aru Beach Safety: Swimming, Currents & Sun Protection',
    metaDescription:
      'Safety at Tanjung Aru Beach — water-current and swimming cautions, sun protection, jellyfish season awareness and where help is located.',
    intro: [
      'Tanjung Aru is a relaxed public beach, but like any open shoreline it deserves basic caution. This guide covers the reminders that keep a visit safe without overstating risks.',
      'Always defer to on-site signs and lifeguard or local advice over anything written here.',
    ],
    sections: [
      {
        heading: 'Water and currents',
        body: [
          'Do not assume any section is safe for swimming. Tides and currents shift, and some stretches are not suitable for entering the water. Read signs, ask locally, and keep non-swimmers and children supervised at all times.',
        ],
      },
      {
        heading: 'Sun, heat and hydration',
        body: [
          'The equatorial sun is strong. Bring water, use sunscreen and a hat, and avoid the midday hours if you burn easily. The breeze can mask how much sun you are getting.',
        ],
      },
      {
        heading: 'Marine life and storms',
        body: [
          'Jellyfish and other marine life appear seasonally; if you see warnings, stay out of the water. During thunderstorms or rough seas, leave the open beach and shelter.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Tanjung Aru safe at night?',
        a: 'The main beach is busy through the sunset hour and early evening. Use normal travel caution, keep valuables close, and head back before it is fully dark.',
      },
      {
        q: 'Are there lifeguards?',
        a: 'Do not assume lifeguard cover. Treat the beach as an unpatrolled public shore and make your own safety decisions.',
      },
    ],
    related: ['tanjung-aru-with-kids', 'first-beach-tanjung-aru', 'tanjung-aru-rainy-day'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-visit-duration',
    module: 'practical',
    title: 'How Long to Spend at Tanjung Aru Beach — Quick vs Full Evening',
    metaTitle: 'How Long to Spend at Tanjung Aru Beach: Quick vs Full Evening',
    metaDescription:
      'Planning your time at Tanjung Aru Beach — a 1-hour sunset stop versus a 3–4 hour evening of food, walk and photos, with a suggested flow.',
    intro: [
      'How long you stay depends on your goal. Some visitors just want the sunset; others turn the evening into a slow meal-and-walk outing.',
      'This guide gives two common rhythms so you can match the beach to your itinerary.',
    ],
    sections: [
      {
        heading: 'The quick sunset stop (about 1 hour)',
        body: [
          'Arrive roughly 45–60 minutes before sunset, walk to the First Beach viewpoint, watch the sky, and leave. This works if you are fitting the beach between dinner plans.',
        ],
      },
      {
        heading: 'The full evening (3–4 hours)',
        body: [
          'Arrive in the late afternoon, picnic or snack on First Beach, stroll south toward Second or Third Beach, photograph the sunset, then have a meal nearby. This is the more relaxed Sabah pace.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I visit during the day instead of sunset?',
        a: 'Yes, but the headline draw is the sunset. Daytime is good for a walk, though the sun is strong — bring shade and water.',
      },
      {
        q: 'Is it worth combining with Perdana Park?',
        a: 'If you have the evening, yes: beach sunset first, then the nearby musical fountain. Check the fountain schedule locally.',
      },
    ],
    related: ['perdana-park-fountain', 'tanjung-aru-sunset-times-weather', 'tanjung-aru-with-kids'],
    updated: 'October 2026',
  },

  // ───────────────────────── Module 3: Food & nearby ─────────────────────────
  {
    slug: 'aru-by-the-sea-restaurant',
    module: 'food',
    title: 'Aru by the Sea & Beachfront Dining — Menu, Sunset Seats & Booking',
    metaTitle: 'Aru by the Sea Tanjung Aru: Menu, Sunset Seats & Booking Tips',
    metaDescription:
      'A practical guide to Aru by the Sea and beachfront dining at Tanjung Aru — what kind of menu to expect, grabbing a sunset-view seat, and booking tips.',
    intro: [
      '“Aru by the Sea” and similar beachfront names come up often in searches for where to eat with a view at Tanjung Aru. This guide explains what to expect and how to secure a sunset seat without overpromising specifics.',
      'Menus, prices and reservation policies change, so confirm with the venue for your date.',
    ],
    sections: [
      {
        heading: 'What to expect on the menu',
        body: [
          'Beachfront venues around Tanjung Aru generally lean toward casual Western and local fusion plates, grills and drinks, priced above the street stalls. Exact dishes and prices vary by venue and season.',
          'If you want a specific “Aru by the Sea menu”, check the venue’s own listing for the current version rather than relying on a screenshot that may be outdated.',
        ],
      },
      {
        heading: 'Getting a sunset seat',
        body: [
          'Outdoor and edge tables with a sea view are limited and go first. For sunset, book ahead and request a sunset-view seat, or arrive early to walk in before the rush.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a reservation?',
        a: 'For a sunset-view table on a weekend or holiday, yes — book ahead. On a quiet weekday you can often walk in.',
      },
      {
        q: 'Is it expensive compared with the food stalls?',
        a: 'Beachfront restaurants cost more than the casual stalls and food court. The premium is for the view and service, not just the food.',
      },
    ],
    related: ['tanjung-aru-night-market', 'tanjung-aru-seafood-restaurants', 'tanjung-aru-beach-cafes'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-night-market',
    module: 'food',
    title: 'Tanjung Aru Night Market & Food Court — What to Eat',
    metaTitle: 'Tanjung Aru Night Market & Food Court: What to Eat',
    metaDescription:
      'The Tanjung Aru night market and food court — typical Sabah snacks, grilled seafood, drinks, when it gets busy and how it differs from the beach stalls.',
    intro: [
      'Searches for “tanjung aru beach night market” usually point to the casual food court and evening stalls around the First Beach and Tanjung Aru Plaza area, rather than one formal market.',
      'This is where most visitors eat cheaply before or after the sunset.',
    ],
    sections: [
      {
        heading: 'What to eat',
        body: [
          'Expect grilled corn, young coconut, satay, local noodles, fried snacks and iced drinks, plus small seafood grills. It is casual, affordable and very local.',
        ],
      },
      {
        heading: 'When to go',
        body: [
          'Stalls build up from late afternoon and are busiest around the sunset hour. Go a little earlier if you want to eat before the crowds, or lean into the atmosphere after the sun drops.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a single “night market” building?',
        a: 'Think of it as a cluster of evening food stalls and a food court near the beach and plaza, not one enclosed market hall.',
      },
      {
        q: 'Is it halal-friendly?',
        a: 'Most stalls are Malay/Muslim-friendly by default, but if certification matters to you, ask the vendor or look for the halal sign on site.',
      },
    ],
    related: ['first-beach-tanjung-aru', 'aru-by-the-sea-restaurant', 'tanjung-aru-local-cafes'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-seafood-restaurants',
    module: 'food',
    title: 'Tanjung Aru Seafood & Waterfront Restaurants',
    metaTitle: 'Tanjung Aru Seafood Restaurants: Where to Eat by the Water',
    metaDescription:
      'Seafood and waterfront dining near Tanjung Aru Beach — what to expect, how prices work, and how it compares with the casual stalls.',
    intro: [
      'Beyond the stalls, the Tanjung Aru and Marina area has seafood and waterfront restaurants where you can sit down for a longer meal by the water.',
      'This guide sets expectations on style and price rather than naming every outlet.',
    ],
    sections: [
      {
        heading: 'Style and pricing',
        body: [
          'Waterfront seafood spots range from mid-range grills to resort dining. Prices are usually by weight or set plates; confirm before ordering if you are budget-conscious.',
          'They cost more than the food court but give you a proper table, sea breeze and a longer, calmer evening.',
        ],
      },
      {
        heading: 'Pairing with the sunset',
        body: [
          'A common rhythm is to watch the sunset on the beach, then move to a waterfront restaurant for dinner. Book ahead if you want a view table at peak.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the seafood fresh?',
        a: 'Coastal Sabah seafood is generally fresh, but quality and sourcing vary by venue. Choose busy, well-reviewed places and check the displayed prices.',
      },
      {
        q: 'Can I walk from the beach to dinner?',
        a: 'Many waterfront restaurants are a short walk or short ride from the beach. Check the exact distance for your chosen venue.',
      },
    ],
    related: ['aru-by-the-sea-restaurant', 'tanjung-aru-night-market', 'shangri-la-tanjung-aru-guide'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-local-cafes',
    module: 'food',
    title: 'Tanjung Aru Local Cafes & Breakfast — Kopitiam & Malay Breakfast',
    metaTitle: 'Tanjung Aru Local Cafes & Breakfast: Kopitiam & Malay Breakfast',
    metaDescription:
      'Where to get a cheap local breakfast near Tanjung Aru — kopitiam-style coffee shops, nasi lemak and teh tarik before a beach day.',
    intro: [
      'If you want a low-cost, local start to the day before heading to the beach, the Tanjung Aru and nearby suburbs have casual kopitiams and Malay breakfast spots.',
      'This is the opposite end of the experience from the sunset restaurants — cheap, fast and authentically local.',
    ],
    sections: [
      {
        heading: 'What to order',
        body: [
          'A typical Malay-style breakfast is nasi lemak, kuih, roti and a hot drink such as teh tarik or kopi. Chinese kopitiams add toast with kaya, soft-boiled eggs and local coffee.',
        ],
      },
      {
        heading: 'Timing',
        body: [
          'Breakfast spots are morning businesses; most wind down by midday. Go early if you want the freshest kuih and the full spread.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are these cafes near the beach?',
        a: 'Some are within the Tanjung Aru area; others are a short ride toward the city. Use the venue’s location rather than assuming beachfront.',
      },
      {
        q: 'Is breakfast cheap?',
        a: 'Yes — local breakfast is among the best-value meals in KK, typically a fraction of dinner prices at the waterfront.',
      },
    ],
    related: ['tanjung-aru-night-market', 'tanjung-aru-beach-cafes', 'tanjung-aru-budget-guide'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-beach-cafes',
    module: 'food',
    title: 'Tanjung Aru Beach Cafes to Chill & Work — Sea-View Coffee',
    metaTitle: 'Tanjung Aru Beach Cafes: Sea-View Coffee to Chill or Work',
    metaDescription:
      'Casual sea-view cafes around Tanjung Aru for a slow coffee, working remotely or watching the sky — what to expect for Wi-Fi and sockets.',
    intro: [
      'A few cafes around the Tanjung Aru waterfront are good for a long coffee, light work or simply watching the horizon. This guide sets expectations for remote work.',
      'Wi-Fi and power availability change by venue, so confirm before relying on a cafe as a workspace.',
    ],
    sections: [
      {
        heading: 'Working from a beach cafe',
        body: [
          'Some venues have Wi-Fi and sockets; others are purely for lingering. If you need to work, pick a spot with a clear signal and bring a power bank as backup.',
        ],
      },
      {
        heading: 'Best use of the view',
        body: [
          'An afternoon coffee that rolls into the sunset is the classic move. Order something to stay and the staff generally let you keep a table through golden hour.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do beach cafes have reliable Wi-Fi?',
        a: 'It varies. Treat cafe Wi-Fi as a bonus, not a guarantee, and have mobile data as a backup for anything important.',
      },
      {
        q: 'Are they open late for sunset?',
        a: 'Many stay open into the evening, but hours differ. Check the venue’s current hours before you plan around it.',
      },
    ],
    related: ['tanjung-aru-local-cafes', 'aru-by-the-sea-restaurant', 'tanjung-aru-beach-safety'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-beach-activities',
    module: 'food',
    title: 'Tanjung Aru Beach Activities — SUP, Banana Boat & Water Fun',
    metaTitle: 'Tanjung Aru Beach Activities: SUP, Banana Boat & Water Sports',
    metaDescription:
      'Things to do at Tanjung Aru Beach beyond the sunset — stand-up paddle, banana boat and casual beach activities, with safety notes.',
    intro: [
      'Tanjung Aru is best known for its sunset, but the shoreline also supports casual water activities when conditions allow.',
      'Availability changes with season and operator, so treat any specific activity as something to confirm on site.',
    ],
    sections: [
      {
        heading: 'Common activities',
        body: [
          'On calmer days you may find paddleboarding (SUP), banana-boat rides and similar casual water fun operated by local vendors. Offerings come and go, so ask at the beach or check locally.',
        ],
      },
      {
        heading: 'Safety first',
        body: [
          'Only use activities with clear safety briefings and life jackets, and never enter the water if signs or conditions advise against it. Calm-looking seas can still have currents.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I rent a paddleboard there?',
        a: 'Sometimes, depending on the operator and season. Confirm on site; do not assume rentals are available every day.',
      },
      {
        q: 'Is it safe for beginners?',
        a: 'Only with a proper operator, life jacket and calm conditions. If you are new, go with a guided option rather than alone.',
      },
    ],
    related: ['tanjung-aru-beach-safety', 'tanjung-aru-with-kids', 'best-beaches-sabah-comparison'],
    updated: 'October 2026',
  },
  {
    slug: 'shangri-la-tanjung-aru-guide',
    module: 'food',
    title: 'Shangri-La Tanjung Aru (Non-Guest) Visit Guide',
    metaTitle: 'Shangri-La Tanjung Aru Guide for Non-Guests: Dining & Sunset',
    metaDescription:
      'Visiting Shangri-La Tanjung Aru Resort as a non-guest — dining, sunset spots and what day visitors can and cannot access.',
    intro: [
      'The Shangri-La Tanjung Aru Resort & Spa sits at the southern end of the beach. Many visitors ask whether non-guests can enjoy its sunset and restaurants.',
      'This guide explains the non-guest perspective without promising access that depends on the hotel’s own policy.',
    ],
    sections: [
      {
        heading: 'For non-guests',
        body: [
          'Resort facilities are primarily for guests. Non-guests can sometimes dine at the resort’s restaurants or bars, but access, dress code and booking rules are set by the hotel and change — confirm directly with the property.',
        ],
      },
      {
        heading: 'Sunset without the resort',
        body: [
          'You do not need to stay at the resort to enjoy the same coastline sunset; the public beach in front remains open. Use the resort area only as a dining option, not as the viewpoint.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can day visitors use the pool or beach club?',
        a: 'That depends entirely on the hotel’s current day-pass policy. Contact the resort to confirm before you go.',
      },
      {
        q: 'Is it good for honeymooners?',
        a: 'As a resort it is a popular honeymoon choice for the sea-view rooms and dining; see the honeymoon guide for the non-resort side of a romantic evening.',
      },
    ],
    related: ['tanjung-aru-honeymoon-guide', 'tanjung-aru-seafood-restaurants', 'best-beaches-sabah-comparison'],
    updated: 'October 2026',
  },
  {
    slug: 'perdana-park-fountain',
    module: 'food',
    title: 'Perdana Park Musical Fountain — Schedule & Tips',
    metaTitle: 'Perdana Park Musical Fountain KK: Schedule & Visiting Tips',
    metaDescription:
      'Perdana Park’s musical fountain near Tanjung Aru — when shows run, what to expect and how to pair it with a beach sunset.',
    intro: [
      'Perdana Park (Taman Perdana) is a separate park a short distance from Tanjung Aru Beach, known for its nightly musical fountain and lit lake.',
      'It is often paired with a beach sunset because the two are close and both shine in the evening.',
    ],
    sections: [
      {
        heading: 'The fountain show',
        body: [
          'The park’s centrepiece is a musical fountain with lights and water choreography, typically in the evening. Exact show times change, so check the current schedule locally before you go.',
        ],
      },
      {
        heading: 'Pairing with the beach',
        body: [
          'A common plan is beach sunset first, then a short trip to Perdana Park for the fountain. The park also has open lawns and a relaxed evening crowd.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Perdana Park free?',
        a: 'The public park is generally free to enter; confirm any charge for specific attractions or events on site.',
      },
      {
        q: 'How far is it from Tanjung Aru Beach?',
        a: 'It is very close — within a few minutes by car or rideshare. Many visitors do both in one evening.',
      },
    ],
    related: ['tanjung-aru-visit-duration', 'taman-pantai-tanjung-aru', 'kota-kinabalu-half-day-sunset'],
    updated: 'October 2026',
  },
  {
    slug: 'kinabalu-golf-club',
    module: 'food',
    title: 'Kinabalu Golf Club & Tanjung Aru Neighbourhood',
    metaTitle: 'Kinabalu Golf Club & Tanjung Aru Neighbourhood Guide',
    metaDescription:
      'The Kinabalu Golf Club and the wider Tanjung Aru neighbourhood — a green space to stroll past and a look at local life beyond the beach.',
    intro: [
      'The Kinabalu Golf Club sits in the Tanjung Aru area and is part of the local residential and leisure fabric that surrounds the beach.',
      'This guide is for visitors curious about the neighbourhood rather than just the shoreline.',
    ],
    sections: [
      {
        heading: 'The club and green space',
        body: [
          'The golf club is a green expanse in the suburb; access and visitors’ play are set by the club. Even from outside, it shows the leafy, low-rise character of Tanjung Aru.',
        ],
      },
      {
        heading: 'Exploring the neighbourhood',
        body: [
          'Beyond the beach, Tanjung Aru has local eateries, the plaza and quiet streets. A pre-sunset walk through the area gives a more complete picture of daily KK life.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can visitors play at the golf club?',
        a: 'Visitor play depends on the club’s policy and tee-time availability — contact them directly to confirm.',
      },
      {
        q: 'Is the area walkable from the beach?',
        a: 'Parts of Tanjung Aru are walkable, though the tropical heat makes a short ride more comfortable for longer distances.',
      },
    ],
    related: ['tanjung-aru-local-cafes', 'taman-pantai-tanjung-aru', 'tanjung-aru-beach-parking'],
    updated: 'October 2026',
  },
  {
    slug: 'pantai-point-pantai-bistro',
    module: 'food',
    title: 'Pantai Point & Pantai Bistro — Casual Beach Hangouts',
    metaTitle: 'Pantai Point & Pantai Bistro Tanjung Aru: Casual Hangouts',
    metaDescription:
      'Pantai Point and Pantai Bistro-style spots around Tanjung Aru — casual places to sit, snack and watch the sea.',
    intro: [
      'Names like “Pantai Point” and “Pantai Bistro” describe the casual, relaxed hangout style of venues along the Tanjung Aru coast — places to sit with a drink and watch the water.',
      'This guide is about the vibe and what to expect rather than one fixed outlet.',
    ],
    sections: [
      {
        heading: 'The casual hangout vibe',
        body: [
          'These spots trade formality for a laid-back, sea-breeze feel — good for groups, a quick bite or a long chat. Expect simpler menus and relaxed service.',
        ],
      },
      {
        heading: 'When to go',
        body: [
          'Late afternoon into the evening is the sweet spot, when the heat drops and the sky starts to colour. Arrive early for the best open-air seats.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are these on the sand?',
        a: 'Many are just behind or beside the beach rather than literally on the sand. Check the venue location for the exact setup.',
      },
      {
        q: 'Good for groups?',
        a: 'Yes — the casual style and shared snacks suit groups better than a formal dinner.',
      },
    ],
    related: ['tanjung-aru-beach-cafes', 'tanjung-aru-night-market', 'aru-by-the-sea-restaurant'],
    updated: 'October 2026',
  },

  // ───────────────────────── Module 4: Itineraries ─────────────────────────
  {
    slug: 'kota-kinabalu-half-day-sunset',
    module: 'itineraries',
    title: 'Kota Kinabalu Half-Day + Tanjung Aru Sunset',
    metaTitle: 'KK Half-Day Itinerary with Tanjung Aru Sunset',
    metaDescription:
      'A half-day Kota Kinabalu plan ending at Tanjung Aru sunset — waterfront, dinner and the classic Sabah golden hour.',
    intro: [
      'If you have an afternoon and evening in Kota Kinabalu, this half-day flow pairs the city waterfront with the Tanjung Aru sunset.',
      'It is paced for a relaxed evening rather than a rushed checklist.',
    ],
    sections: [
      {
        heading: 'Afternoon',
        body: [
          'Spend the late afternoon around the KK waterfront or a café, then head to Tanjung Aru about 60–90 minutes before sunset. Keep the gap flexible so you are on the sand in good time.',
        ],
      },
      {
        heading: 'Sunset and dinner',
        body: [
          'Watch the sunset on First Beach, then choose between the food court for something cheap or a waterfront restaurant for a longer meal. End the evening with a short visit to Perdana Park’s fountain if it fits.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much time do I need total?',
        a: 'Plan roughly 4–5 hours from afternoon start to dinner finish, depending on how long you linger.',
      },
      {
        q: 'Can I do this without a car?',
        a: 'Yes — rideshare apps handle both legs; just book your return a bit early at sunset peak.',
      },
    ],
    related: ['perdana-park-fountain', 'tanjung-aru-night-market', 'getting-to-tanjung-aru-beach'],
    updated: 'October 2026',
  },
  {
    slug: 'sabah-day-trip-tanjung-aru',
    module: 'itineraries',
    title: 'Sabah Day Trip Ending at Tanjung Aru Beach',
    metaTitle: 'Sabah Day Trip Ending at Tanjung Aru Beach Sunset',
    metaDescription:
      'A Sabah day-trip idea that closes at Tanjung Aru — morning sightseeing, afternoon transfer and a relaxed beach sunset.',
    intro: [
      'A common Sabah rhythm is a daytime excursion followed by a Kota Kinabalu sunset. Tanjung Aru is the easy evening anchor because it is so close to the city.',
      'This guide keeps the day flexible rather than naming one fixed attraction.',
    ],
    sections: [
      {
        heading: 'Daytime',
        body: [
          'Spend the day on a Sabah sightseeing option of your choice, then route back toward KK in the late afternoon so you reach Tanjung Aru with buffer time before sunset.',
        ],
      },
      {
        heading: 'Evening anchor',
        body: [
          'End on the beach for the sunset, then dinner nearby. Keep the last activity light so the travel back to your hotel is easy.',
        ],
      },
    ],
    faq: [
      {
        q: 'What if my day trip runs late?',
        a: 'Sunset waits for no one — if you are delayed, skip the beach walk and go straight to a waterfront dinner with a view.',
      },
      {
        q: 'Is Tanjung Aru worth it after a long day?',
        a: 'Yes, precisely because it is close and low-effort: a short ride, a short walk, and one of Sabah’s best sunsets.',
      },
    ],
    related: ['kota-kinabalu-half-day-sunset', 'tanjung-aru-sunset-times-weather', 'best-beaches-sabah-comparison'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-honeymoon-guide',
    module: 'itineraries',
    title: 'Tanjung Aru Honeymoon & Couples Sunset Guide',
    metaTitle: 'Tanjung Aru Honeymoon & Couples Guide: Romantic Sunset',
    metaDescription:
      'A romantic Tanjung Aru evening for couples and honeymooners — quiet beach corners, sunset dinner and private moments without a resort.',
    intro: [
      'Tanjung Aru is a favourite for couples because the sunset does the work. You do not need a resort to make it romantic.',
      'This guide focuses on the public-beach side of a couples’ evening.',
    ],
    sections: [
      {
        heading: 'A quiet corner',
        body: [
          'For more privacy, walk toward Second or Third Beach where the crowds thin out. Bring a mat and enjoy the sky without the food-court buzz.',
        ],
      },
      {
        heading: 'Sunset dinner',
        body: [
          'For a special meal, book a waterfront restaurant or resort dining ahead and request a sunset-view table. Pair it with a slow beach walk beforehand.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Tanjung Aru good for honeymooners?',
        a: 'The coastline sunset is genuinely romantic and free to enjoy; for luxury, add a resort dinner. Many couples do both.',
      },
      {
        q: 'Where is the most private spot?',
        a: 'Third Beach is the quietest end. Go early to claim space and head back before full dark.',
      },
    ],
    related: ['third-beach-tanjung-aru', 'shangri-la-tanjung-aru-guide', 'tanjung-aru-seafood-restaurants'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-rainy-day',
    module: 'itineraries',
    title: 'Tanjung Aru Rainy Day Alternatives — Indoor & After-Rain Plans',
    metaTitle: 'Tanjung Aru Rainy Day: Indoor Alternatives & After-Rain Plans',
    metaDescription:
      'What to do when it rains at Tanjung Aru — indoor options nearby, malls and why after-rain skies can still deliver a sunset.',
    intro: [
      'A rainy evening can block the sunset, but it does not have to ruin the day. Kota Kinabalu has indoor options a short ride away.',
      'This guide is about flexibility, not a fixed rainy-day venue list.',
    ],
    sections: [
      {
        heading: 'Indoor nearby',
        body: [
          'If the weather is poor, pivot to a mall, café or museum in KK for the afternoon, then re-check the sky. Tanjung Aru Plaza also has sheltered food and shops right by the beach.',
        ],
      },
      {
        heading: 'After the rain',
        body: [
          'Storms sometimes clear before sunset, and the cleared sky can produce dramatic colour. Keep an eye on the forecast and stay flexible rather than abandoning the beach entirely.',
        ],
      },
    ],
    faq: [
      {
        q: 'Will I still see a sunset in the wet season?',
        a: 'Not always, but gaps do appear. The wetter months simply lower the odds, so build a backup plan.',
      },
      {
        q: 'Where can I wait out a storm near the beach?',
        a: 'The plaza and covered food areas offer shelter; otherwise move to an indoor KK option and return if the sky clears.',
      },
    ],
    related: ['tanjung-aru-sunset-times-weather', 'tanjung-aru-beach-safety', 'tanjung-aru-local-cafes'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-budget-guide',
    module: 'itineraries',
    title: 'Tanjung Aru on a Budget — Free Beach & Cheap Eats',
    metaTitle: 'Tanjung Aru Budget Guide: Free Beach & Cheap Food',
    metaDescription:
      'Visiting Tanjung Aru cheaply — free beach access, the cheapest food options, and low-cost transport tips for backpackers.',
    intro: [
      'Tanjung Aru is one of the easiest Kota Kinabalu outings to do on a tight budget: the beach itself is free.',
      'This guide focuses on keeping the evening cheap without missing the main draw.',
    ],
    sections: [
      {
        heading: 'Free and cheap',
        body: [
          'Beach access costs nothing. Eat at the food court or stalls for a few ringgit instead of the waterfront restaurants, and bring your own water to avoid repeated buys.',
        ],
      },
      {
        heading: 'Transport savings',
        body: [
          'If you are staying in central KK, compare a rideshare against a local bus for the trip. For a group, one rideshare split several ways is often cheaper than expected.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the absolute minimum cost?',
        a: 'Technically just transport to and from the beach, since access and the sunset are free. Food and parking are the only optional costs.',
      },
      {
        q: 'Is it safe for solo backpackers?',
        a: 'The main beach is busy at sunset and fine for solo travellers using normal precautions. Keep valuables close and head back before full dark.',
      },
    ],
    related: ['tanjung-aru-night-market', 'tanjung-aru-beach-parking', 'tanjung-aru-accessibility'],
    updated: 'October 2026',
  },
  {
    slug: 'tanjung-aru-photography-route',
    module: 'itineraries',
    title: 'Tanjung Aru All-Day Photography Route — Light from Dawn to Dusk',
    metaTitle: 'Tanjung Aru Photography Route: Dawn to Dusk Light',
    metaDescription:
      'An all-day photography route around Tanjung Aru — morning calm, midday details and the headline sunset, with spot suggestions.',
    intro: [
      'For photography enthusiasts, Tanjung Aru and its surroundings offer more than the sunset: quiet morning light, daytime textures and the famous golden hour.',
      'This route strings the day together without requiring special access.',
    ],
    sections: [
      {
        heading: 'Morning',
        body: [
          'Early light on the sand and the casuarina trees is soft and crowd-free. Arrive at first light for clean compositions before the day heats up.',
        ],
      },
      {
        heading: 'Midday and golden hour',
        body: [
          'Use midday for detail shots, shade patterns and casual life. Then commit to the golden hour and blue hour on the beach for the signature Sabah sunset frames.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the beach open in the morning?',
        a: 'The public beach is an open civic space used through the day; mornings are quiet and good for photography.',
      },
      {
        q: 'Any drone restrictions?',
        a: 'Coastal areas near the airport can be restricted. Check current civil-aviation rules before flying.',
      },
    ],
    related: ['tanjung-aru-sunset-photography', 'third-beach-tanjung-aru', 'tanjung-aru-sunset-times-weather'],
    updated: 'October 2026',
  },
  {
    slug: 'kota-kinabalu-airport-tanjung-aru',
    module: 'itineraries',
    title: 'Kota Kinabalu Airport (BKI) to Tanjung Aru — Transit Stop',
    metaTitle: 'KK Airport (BKI) to Tanjung Aru: Transit & Layover Sunset',
    metaDescription:
      'Using a Kota Kinabalu airport layover for a quick Tanjung Aru sunset — distance, time needed and how to fit it between flights.',
    intro: [
      'Kota Kinabalu International Airport (BKI) is close to Tanjung Aru, which makes a short beach sunset realistic during a longer layover.',
      'This guide helps you judge whether you have enough time without risking your connection.',
    ],
    sections: [
      {
        heading: 'Distance and time',
        body: [
          'The airport and Tanjung Aru are only a short drive apart — typically well under half an hour in light traffic. The limiting factor is your layover buffer, not the distance.',
        ],
      },
      {
        heading: 'Is it worth it?',
        body: [
          'If you have a comfortable layover with no checked-baggage stress, a quick sunset is feasible. If your connection is tight or late at night, skip it and rest instead.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long should I budget for the trip?',
        a: 'Allow buffer for immigration, luggage and the ride both ways, plus sunset time. Only attempt it with a genuinely generous layover.',
      },
      {
        q: 'Can I store bags at the airport?',
        a: 'Bag storage depends on the airport’s current services — check with BKI directly rather than assuming.',
      },
    ],
    related: ['getting-to-tanjung-aru-beach', 'tanjung-aru-visit-duration', 'tanjung-aru-sunset-times-weather'],
    updated: 'October 2026',
  },
  {
    slug: 'best-beaches-sabah-comparison',
    module: 'itineraries',
    title: 'Best Beaches in Sabah — Tanjung Aru vs the Islands',
    metaTitle: 'Best Beaches in Sabah: Tanjung Aru vs Manukan & Others',
    metaDescription:
      'Comparing Sabah beaches — Tanjung Aru against the Tunku Abdul Rahman islands and other KK-area shores, for sunset, ease and cost.',
    intro: [
      'Searches for “pantai di Sabah” usually compare Tanjung Aru with the nearby islands and other KK-area beaches. This guide helps you choose.',
      'It is a comparison of character and convenience, not a ranking of one “best”.',
    ],
    sections: [
      {
        heading: 'Tanjung Aru vs the islands',
        body: [
          'Tanjung Aru wins on convenience and sunset: free, close to the city, no boat needed. The Tunku Abdul Rahman islands (Manukan, Sapi and others) win on clearer water and a true island feel, but need a boat and a day.',
        ],
      },
      {
        heading: 'How to choose',
        body: [
          'Pick Tanjung Aru for an easy evening sunset and local food. Pick an island if you want swimming, snorkelling and a full beach day and do not mind the boat transfer.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which is best for a sunset?',
        a: 'Tanjung Aru is the classic, zero-effort sunset. Islands are better for daytime swimming but less convenient for a quick golden hour.',
      },
      {
        q: 'Are the islands worth a separate trip?',
        a: 'Yes if you want clearer water and snorkelling. Combine them on a different day from your Tanjung Aru sunset rather than rushing both.',
      },
    ],
    related: ['tanjung-aru-beach-activities', 'sabah-day-trip-tanjung-aru', 'tanjung-aru-beach-safety'],
    updated: 'October 2026',
  },
];

// Populate the slug index and export the frozen list.
for (const t of TOPICS_RAW) TOPIC_SLUGS.push(t.slug);
export const TOPICS: Topic[] = TOPICS_RAW;
