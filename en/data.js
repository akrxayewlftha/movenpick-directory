/* ============================================================================
   Mövenpick Hotel Mansour Eddahbi Marrakech — Room Directory
   Dynamic data: all directory content is defined here.
   To update the site, simply modify this object.
   (The "Rooms & prices" section is intentionally excluded.)
   ========================================================================== */

const ICONS = {
  welcome: '<path d="M12 3c2.5 4 4 6.5 4 9a4 4 0 1 1-8 0c0-2.5 1.5-5 4-9Z"/>',
  dining:  '<path d="M7 3v8m0 0a2 2 0 0 0 2-2V3M5 3v6M17 3c-1.5 0-2.5 2-2.5 5V13h2.5m0 0v8m0-8V3"/>',
  spa:     '<path d="M12 13c0-3 1.5-5 4-7-3 0-5 1-6 3-1-2-3-3-6-3 2.5 2 4 4 4 7a2 2 0 1 0 4 0Z"/><path d="M12 13v8"/>',
  kids:    '<circle cx="12" cy="6" r="3"/><path d="M12 9c-4 0-6 3-6 6l3 1 1 5h4l1-5 3-1c0-3-2-6-6-6Z"/>',
  leisure: '<circle cx="12" cy="8" r="3.2"/><path d="M3 17c2-1.5 3-1.5 5 0s3 1.5 5 0 3-1.5 5 0M3 21c2-1.5 3-1.5 5 0s3 1.5 5 0 3-1.5 5 0"/>',
  outdoor: '<path d="M3 19h18L15 7l-3.2 5.5L9.5 9 3 19Z"/><circle cx="17" cy="6" r="2"/>',
  city:    '<path d="M5 21V8l4-3 4 3v13M13 21V11l3-2 3 2v10M3 21h18M8 12v0M8 16v0"/>',
  services:'<path d="M12 4v2M6 12a6 6 0 0 1 12 0H6ZM4 12h16M9 16h6a2 2 0 0 1-6 0Z"/>',
  comm:    '<path d="M5 4h4l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/>',
  safety:  '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"/><path d="M12 8v4M12 15v0"/>'
};

const DIRECTORY = {
  hotel: "Mövenpick Hotel Mansour Eddahbi",
  city: "Marrakech",
  whatsapp: "212524339100",
  butler: "+212 524 339 100",
  roomService: "8790 / 8792",
  categories: [

    /* ---------------------------------------------------------------- */
    {
      id: "bienvenue", title: "Welcome", en: "Welcome", icon: "welcome", pid: "welcome_msg",
      tagline: "A contemporary oasis in the heart of Marrakech",
      items: [
        {
          name: "Welcome Message", tagline: "Marhaba", pid: "welcome_msg",
          chips: ["Hivernage", "5-star", "5 hectares of gardens"],
          body: "Ideally located in the chic Hivernage district, Mövenpick Hotel Mansour Eddahbi Marrakech is just a few minutes from the lively Jemaa El Fna square and M Avenue, with direct access to the Palais des Festivals et des Congrès. A contemporary oasis in the heart of the city, set within 5 hectares of lush gardens, this fully renovated 5-star hotel welcomes you with an experience that blends authenticity, tranquillity and elegance."
        },
        {
          name: "About the Hotel", tagline: "The hotel at a glance", pid: "about",
          chips: ["503 rooms", "7 restaurants", "3 pools", "Spa Cinq Mondes"],
          body: "Located on Avenue Mohammed VI, just 4 km from the international airport, the hotel offers exceptional facilities: 503 rooms, 7 restaurants, a bar, a wellness centre (Ô de Roses spa by Cinq Mondes, yoga studio, fitness room), 3 swimming pools — two heated to 28°C in winter — a children's pool, a kids club with babysitting, conference rooms and private event spaces."
        },
        {
          name: "The Heritage", tagline: "The Victorious & the Golden", pid: "heritage",
          chips: ["Saadian dynasty", "The source of the oasis"],
          body: "The Victorious (al-Mansour) and the Golden (Eddahbi) are the epithets of the sixth sultan of the Saadian dynasty, who led Marrakech into a cultural renaissance. The lobby houses the estate's centrepiece — its source — symbolised by a pure fountain topped by a monumental copper chandelier in the shape of a water drop, beneath a grand dome. Around this cascade of light, settle into the elegance of the Master of the Oasis's ceremonial salon."
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "restaurants", title: "Restaurants & Bars", en: "Dining", icon: "dining", pid: "nosh",
      tagline: "Seven tables, a thousand flavours",
      items: [
        { name: "Le Marcelona", tagline: "Spanish cuisine", pid: "marcelona",
          chips: ["7:00 PM – 11:00 PM", "Air-conditioned", "Smoking terrace"],
          body: "Le Marcelona welcomes you every evening, indoors or on its terrace beneath a magnificent olive tree. Traditional tapas, paella, tortilla, meat and fish dishes, and delicious desserts. Every evening, a flamenco dancer lights up the stage, accompanied by a live musical trio, for a vibrant and authentic show that truly captures the soul of Le Marcelona." },
        { name: "Le Saray", tagline: "International buffet", pid: "saray",
          chips: ["Mon–Fri 6:30 AM – 10:30 AM", "Weekend 6:30 AM – 11:00 AM", "Air-conditioned"],
          body: "With its contemporary elegance inspired by the traditional caidal tent, Le Saray is the hotel's main restaurant, open for breakfast and dinner. Its spacious dining room and olive-shaded terrace offer a generous buffet, beginning with Moroccan specialities. In the evening, enjoy a Moroccan buffet and a contemporary international menu in a festival of local and international flavours." },
        { name: "Le Jamra", tagline: "Healthy Mediterranean cuisine", pid: "jamra",
          chips: ["12:00 PM – 6:00 PM", "Smoking area"],
          body: "Freshness and Mediterranean flavours await you at Le Jamra. With its Italian-inspired menu, this restaurant is ideal for enjoying fresh pasta, a sun-drenched salad, Sicilian-style fish or Roman-style meat — and even a small vegan dish. Discover the relaxed sophistication of its poolside open-kitchen terrace." },
        { name: "Le Manso Bar", tagline: "Bar · Tapas", pid: "manso_bar",
          chips: ["6:00 PM – 12:00 AM", "Air-conditioned", "Smoking area"],
          body: "The hotel bar, with a view of the main pool. In a discreet club-like atmosphere, the comfortable Manso Bar invites you to enjoy a special moment over a classic aperitif or signature cocktail, accompanied by delicious tapas. Whether alone or with friends, by day or evening, the perfect place to unwind." },
        { name: "Le Manso Pool", tagline: "Poolside snacking", pid: "manso_pool",
          chips: ["12:00 PM – 6:00 PM", "Smoking area"],
          body: "To enhance your swim or enjoy the atmosphere by the main pool, Le Manso Pool welcomes you from noon until early evening. Fresh salads, generous pasta, grilled dishes, gourmet pizzas and international desserts, accompanied by fresh fruit juice or a signature cocktail." },
        { name: "Le MFF", tagline: "Coffee shop · Pastries", pid: "mff",
          chips: ["7:00 AM – 9:00 PM", "Air-conditioned", "Smoking terrace"],
          body: "Marrakech Fine Food is the light and gourmet pause at the heart of the hotel. An original selection of sweet and savoury treats, to enjoy on-site or take away. In a cosy atmosphere reminiscent of a Parisian coffee shop, choose from a selection of coffees, teas and fresh fruit juices." },
        { name: "Le Dahbi", tagline: "Moroccan cuisine", pid: "dahbi",
          chips: ["Mon–Sat 7:00 PM – 11:00 PM", "Air-conditioned", "Smoking terrace"],
          body: "The hotel's Moroccan restaurant. Under the direction of talented chef Meryem Cherkaoui, Le Dahbi invites you to rediscover the richness of Moroccan cuisine through exceptional menus and a creative carte where each dish tells a story. Deep within the gardens, a refined setting of discreet luxury, for an unforgettable sensory experience." },
        { name: "Le Nosh", tagline: "Sky lounge · Levantine & Asian", pid: "nosh",
          chips: ["Wed–Sun 7:00 PM – 12:00 AM", "Bar until 1:00 AM", "Smoking area"],
          body: "Embark on a journey aboard Le Nosh, where Levantine flavours meet the finesse of Asian cuisine. Overlooking the main pool, the hotel's sky lounge offers an exceptional view of the gardens and M Avenue. Let yourself be seduced by a selection of refined mezzes: creamy hummus, fresh tabbouleh, crispy falafels." },
        { name: "Chocolate Hour", tagline: "Swiss Moment of Joy & Delight", pid: "chocolate",
          chips: ["5:00 PM – 6:00 PM", "Lobby", "Complimentary"],
          body: "A signature moment at Mövenpick hotels. Every day at 5 PM, enjoy 60 minutes of chocolate presented as a generous buffet, offered complimentary in the lobby. A daily celebration of Swiss craftsmanship to awaken the senses. For younger guests, Chocolate Hour is available as sweet treats at the Kids Club." },
        { name: "Room Service", tagline: "24-hour room service", pid: "room_service",
          chips: ["Dial 8790", "or 8792"],
          body: "For a moment of comfort and intimacy, our room service is available 24 hours a day: breakfast in bed, a light lunch, a refined dinner or a simple snack. From continental, Moroccan or American breakfasts to salads, sandwiches, pasta, meat and fish dishes prepared on request, and Moroccan specialities — right through to home-made desserts. Mövenpick quality delivered to your room." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "spa", title: "Spa & Wellness", en: "Wellness", icon: "spa", pid: "spa_ode",
      tagline: "A true 5-star wellness programme",
      items: [
        { name: "Ô de Roses by Cinq Mondes", tagline: "Spa · Hammam · Treatments", pid: "spa_ode",
          chips: ["10:00 AM – 8:00 PM", "7 days/week", "Air-conditioned"],
          body: "With its refined black-and-white décor enhanced by copper accents, the fully renovated Ô de Roses spa by Cinq Mondes is set around two discreet patios in the quietest part of the hotel. You will find 7 treatment rooms, a manicure and pedicure room, a hair salon, a hammam with 4 scrub cabins (2 with steam), a sauna… and even an outdoor jacuzzi." },
        { name: "Studio Om Yoga", tagline: "Yoga & Pilates", pid: "yoga",
          chips: ["8:00 AM – 8:00 PM", "15 types of yoga", "32 classes/week"],
          body: "At the heart of the hotel, Studio Om Yoga offers 15 different types of yoga, taught by a passionate team of teachers from around the world. 32 classes are held each week. Bordered by a large pool, the studio was designed to help you enjoy all the benefits of a serene and relaxing practice." },
        { name: "Gainz Express", tagline: "Fitness room · Technogym", pid: "fitness",
          chips: ["7:00 AM – 11:00 PM", "Air-conditioned"],
          body: "For sports enthusiasts, Gainz Express is open all week. Our fully renovated gym, equipped with state-of-the-art Technogym machines, awaits you. Maintain your fitness routine or build new healthy habits." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "kids", title: "Kids Club", en: "Family", icon: "kids", pid: "kids_club",
      tagline: "Because every age deserves its magical moments",
      items: [
        { name: "Petits Sultans", tagline: "Kids Club · Ages 4 to 12", pid: "kids_club",
          chips: ["9:30 AM – 5:30 PM", "7 days/week", "+25 activities"],
          body: "A joyful and safe space for children aged 4 to 12. Over 25 varied activities: creative workshops, street art, interactive discoveries, outdoor games, with a different theme each day. Fun learning and encouragement of creativity in a caring and dynamic environment." },
        { name: "Baby Club", tagline: "Ages 1 to 4 · Supervised", pid: "baby_club",
          chips: ["300 MAD half-day", "400 MAD full day", "Subject to availability"],
          body: "The Baby Club welcomes toddlers aged 1 to 4 in a suitable, professionally supervised environment. Paid service: 300 MAD for a half-day, 400 MAD for a full day (subject to availability). A babysitting service is also available on request from the Kids Club team." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "loisirs", title: "Leisure & Lounge", en: "Lifestyle", icon: "leisure", pid: "jardins",
      tagline: "An art of living between well-being, culture and escapism",
      items: [
        { name: "Gardens & Pools", tagline: "Three pools, one oasis", pid: "jardins",
          chips: ["9:00 AM – 8:00 PM", "Heated to 28°C in winter"],
          body: "The hotel is renowned for its beautiful gardens and 3 pools with varied atmospheres. Right from the lobby exit, the main pool — heated to 28°C in winter — invites you to relax on sun loungers. The gardens, redesigned under landscape architect Madison Cox, blend palm trees, citrus trees and olive trees. Further on, the Jamra pool and children's pool; near the spa, a quieter heated pool for a moment of pure serenity." },
        { name: "Culture & Art de Vivre", tagline: "Mezzanine Art Gallery & concept store", pid: "culture",
          chips: ["Exhibitions", "Art gallery", "Shopping"],
          body: "For art lovers, visit the Mezzanine Art Gallery overlooking the lobby: street art, photography, painting, sculpture, tribal art — a new artist every two months or so. Fancy some shopping? The hotel's concept store offers a regularly updated selection of trending products and local creations, around the lobby and facing the gardens." },
        { name: "Experiences & Recommendations", tagline: "Your concierge at your service", pid: "experiences",
          chips: ["Golf", "Cultural visits", "Nightlife", "Excursions"],
          body: "Fancy a wellness activity, a night out or an escape to the Atlas Mountains? Our concierge team is at your disposal to guide you, advise you and make your reservations: golf courses, cultural visits, culinary discoveries, nightlife, excursions… Let us open the doors to the best of Marrakech for you." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "outdoors", title: "Activities & Excursions", en: "Outdoors", icon: "outdoor", pid: "experiences",
      tagline: "A thousand and one experiences just steps away",
      items: [
        { name: "Urban Padel Marrakech", tagline: "Padel · 200 m away",
          chips: ["4,000 m²", "200 metres away"],
          body: "Just 200 metres from the hotel, this 4,000 m² padel centre welcomes you in a modern and friendly atmosphere. Perfect for a sporting break with friends or colleagues, right next door to your room." },
        { name: "Royal Golf Marrakech", tagline: "Golf · 10 min away",
          chips: ["70 hectares", "Century-old olive grove"],
          body: "Located about 10 minutes from the hotel, this legendary course extends over more than 70 hectares. Set within a century-old olive grove, it offers a high-level golfing experience at the foot of the Atlas Mountains." },
        { name: "Palmeraie Quad", tagline: "Quad biking · 20 min away",
          chips: ["15 to 30 km", "Dunes & Berber villages"],
          body: "About twenty minutes from the city centre, explore the famous Palmeraie on 15 to 30 km quad bike routes, through dunes, Berber villages and desert trails. A total immersion in the local landscape." },
        { name: "Terres d'Amanar", tagline: "Nature & adventure · 35 km away",
          chips: ["100 hectares", "Tree climbing & zip lines"],
          body: "Set on a 100-hectare estate at the gateway to Toubkal National Park (35 km from Marrakech), this eco-tourism site offers tree climbing, giant zip lines and hiking in a breathtaking natural setting." },
        { name: "Marrakech Kart Racing", tagline: "Karting · 30 min away",
          chips: ["9 hectares", "1,200 m circuit"],
          body: "About 30 minutes from the hotel, this complex spans 9 hectares with a 1,200-metre circuit meeting international standards. Perfect for speed enthusiasts and family or group outings." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "ville", title: "City Tour", en: "Discover Marrakech", icon: "city", pid: "lobby",
      tagline: "In the beating heart of the Red City",
      items: [
        { name: "Jemaa el-Fna Square", tagline: "The beating heart of the Red City",
          chips: ["UNESCO", "Living performance"],
          body: "Listed as a UNESCO Intangible Cultural Heritage, Jemaa el-Fna Square is the vibrant theatre of Marrakech life. From late afternoon, it comes alive with storytellers, Gnawa musicians, snake charmers and food stalls, offering a unique sensory experience under the watchful gaze of the Koutoubia Mosque." },
        { name: "Koutoubia Mosque", tagline: "Marrakech's spiritual landmark",
          chips: ["12th century", "77-metre minaret"],
          body: "The undisputed emblem of Marrakech, the Koutoubia impresses with its 12th-century minaret, a masterpiece of Almohad architecture. Rising 77 metres, it served as the model for the Giralda in Seville and the Hassan Tower in Rabat. Its majestic exterior and surrounding gardens are not to be missed." },
        { name: "Majorelle Gardens", tagline: "An oasis of art and colour",
          chips: ["Majorelle Blue", "Berber Museum"],
          body: "Designed by painter Jacques Majorelle in 1924 and magnificently restored by Yves Saint Laurent and Pierre Bergé, this botanical garden is a symphony of shapes and colours. Famous for its intense Majorelle Blue, it houses an impressive collection of exotic plants and the Berber Museum." },
        { name: "Bahia Palace", tagline: "Splendour of Moroccan architecture",
          chips: ["19th century", "Zellige & painted cedar"],
          body: "Built in the late 19th century for Grand Vizier Ba Ahmed, the Bahia Palace (meaning 'The Beautiful') is a dazzling testament to Moroccan refinement. Explore its vast courtyards and richly decorated salons adorned with zellige tilework, carved stucco and painted cedar ceilings." },
        { name: "Saadian Tombs", tagline: "A hidden treasure of the dynasty",
          chips: ["16th century", "Carrara marble"],
          body: "Rediscovered in 1917, these royal mausoleums date from the era of the great Sultan Ahmed al-Mansur Saadi. They house the tombs of the dynasty and are a jewel of Hispano-Moorish architecture, with remarkably fine decorations in Carrara marble, stucco and cedar wood, particularly in the Hall of Twelve Columns." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "services", title: "Services & Facilities", en: "Services A–Z", icon: "services", pid: "room1",
      tagline: "Everything for a worry-free stay, from A to Z",
      items: [
        { name: "Adapter", tagline: "Reception", chips: ["220 volts"],
          body: "The electrical current is 220 volts. If you require an adapter or transformer, please contact Reception." },
        { name: "Babysitting", tagline: "Kids Club", chips: ["On request"],
          body: "Cots and baby equipment are available on request. To arrange babysitting, the Kids Club team is at your service." },
        { name: "Luggage Storage", tagline: "Concierge", chips: ["24 hours/day"],
          body: "Our porters are at your disposal 24 hours a day to take care of your personal effects. Please contact the Concierge for assistance." },
        { name: "Flight Tickets", tagline: "Concierge",
          body: "Need to confirm a flight or obtain information for your journey? Our Concierge team is happy to assist with your arrangements." },
        { name: "Laundry", tagline: "Every day", chips: ["Additional charges apply"],
          body: "A laundry service is available every day: place your laundry in the provided bag and fill in the laundry form. Our staff will take care of it (additional charges apply)." },
        { name: "Boutiques", tagline: "Concept store",
          body: "Around the lobby and facing the gardens, the concept store offers a carefully curated selection of brands and local creations. The ideal destination for a shopping moment or to find the perfect gift." },
        { name: "Currency Exchange", tagline: "Behind Reception",
          body: "A currency exchange desk is located behind Reception. The rate applied is the current Bank of Morocco rate." },
        { name: "Business Centre", tagline: "Ground floor", chips: ["24 hours/day"],
          body: "Located on the ground floor and accessible 24 hours a day, the Business Centre provides computers, printers, fax service and office assistance (charges may apply)." },
        { name: "Digital Butler", tagline: "WhatsApp", chips: ["+212 524 339 100"],
          body: "Our Digital Butler, accessible at any time via WhatsApp at +212 524 339 100, is with you throughout your stay. Spa hours, restaurant reservation, recommendations: it responds instantly, with efficiency and friendliness." },
        { name: "Credit Cards", tagline: "Payments",
          body: "We accept American Express, Visa, MasterCard and other major credit cards." },
        { name: "Air Conditioning & Heating", tagline: "In-room",
          body: "A wall panel in your room allows you to adjust the temperature to your comfort." },
        { name: "Safe", tagline: "In-room",
          body: "A safe is available in your room. The hotel accepts no liability for the loss of valuables not stored in the safe." },
        { name: "Concierge", tagline: "Lobby",
          body: "Located in the Lobby, our concierge team is at your service to organise your transfers, excursions, reservations, errands or any other request." },
        { name: "Left Luggage", tagline: "After check-out",
          body: "After check-out, you can leave your luggage in storage and collect it later." },
        { name: "Check-out", tagline: "Departure", chips: ["Noon"],
          body: "Rooms must be vacated by noon. For a late check-out, please consult Reception." },
        { name: "Water", tagline: "Room service · 8790 / 8792",
          body: "Tap water is treated and safe to drink. Complimentary mineral water bottles are provided in your room. To obtain more, please contact Room Service on 8790 or 8792." },
        { name: "Housekeeping", tagline: "Dial 9", chips: ["9 AM – 5 PM", "Turndown 6 PM – 9:30 PM"],
          body: "Rooms are cleaned from 9 AM to 5 PM. A turndown service is offered in the evening between 6 PM and 9:30 PM. For a specific time, dial 9." },
        { name: "Internet / Wi-Fi", tagline: "Throughout the hotel",
          body: "Wi-Fi internet access is available throughout the hotel. For any assistance, Reception is at your disposal." },
        { name: "Car Rental", tagline: "Concierge", chips: ["With or without driver"],
          body: "A car rental service with or without a driver is available on request from the Concierge." },
        { name: "Doctor / Medical", tagline: "Dial 9",
          body: "A nurse is available for any medical assistance. Please contact Reception or dial 9." },
        { name: "Mini-bar", tagline: "Restocked daily",
          body: "Your mini-bar contains water bottles and is restocked every day." },
        { name: "Do Not Disturb", tagline: "Door indicator",
          body: "Use the 'Do Not Disturb' indicator on your door. For your safety, it remains our responsibility to access the room at least every 24 to 48 hours; every effort is made to notify you in advance." },
        { name: "Lost & Found", tagline: "Concierge",
          body: "For any lost items or forgotten belongings, the Concierge team is at your disposal." },
        { name: "Pillow", tagline: "Room service",
          body: "Additional or special pillows can be requested via Room Service." },
        { name: "Swimming Pools", tagline: "Outdoor", chips: ["9:00 AM – 8:00 PM"],
          body: "Our outdoor pools are open from 9 AM to 8 PM. For information or to obtain a towel, please speak to the pool attendant." },
        { name: "Wake-up Call", tagline: "Reception",
          body: "A wake-up call service is available on request from Reception or via your telephone by pressing the dedicated button." },
        { name: "Security", tagline: "24 hours/day", chips: ["Cameras in public areas"],
          body: "A security service operates 24 hours a day and cameras cover public areas. As a precaution, always lock your door." },
        { name: "Taxi", tagline: "Concierge",
          body: "Our concierge team organises your transfers and taxi reservations at any time." },
        { name: "Guided Tours", tagline: "Concierge",
          body: "Our concierge team will be delighted to organise tours of Marrakech and its surroundings." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "comm", title: "Phone & Internet", en: "Connectivity", icon: "comm", pid: "room2",
      tagline: "Stay connected, whenever you wish",
      items: [
        { name: "Room to Room", tagline: "Internal call",
          body: "To stay in touch with fellow guests staying at the hotel, simply dial their room number." },
        { name: "National Calls", tagline: "Marrakech & Morocco", chips: ["Dial 0"],
          body: "Dial '0' followed by the desired number for any call outside the hotel, whether within Marrakech or elsewhere in the country." },
        { name: "International Calls", tagline: "Abroad", chips: ["0 + 00 + country code"],
          body: "To reach a number abroad, dial '0' + 00 + country code + area code, followed by the number. The rate is based on the duration of the call, the per-minute price plus a commission, depending on the operator." },
        { name: "Wi-Fi Connection", tagline: "Throughout the hotel",
          body: "Enjoy Wi-Fi internet access throughout the hotel — in your room and in the Lobby — by entering your email address. For any assistance, please contact Reception." },
        { name: "Business Centre", tagline: "Lobby", chips: ["Charges may apply"],
          body: "Internet access is available at the Business Centre in the Lobby, where computers and printers are at your disposal (additional charges may apply)." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "urgence", title: "Emergency & Safety", en: "Safety", icon: "safety", pid: "room3",
      tagline: "Your safety is our priority",
      items: [
        { name: "Emergency Numbers", tagline: "To dial in case of need",
          chips: ["Police: 19", "Fire / Medical: 150", "Reception: 9"],
          body: "For hotel security or a medical emergency, immediately contact Reception by dialling 9 — security will take over. Police: 19. Fire brigade / Medical emergency: 150." },
        { name: "Room Safety", tagline: "Best practices",
          body: "Safes are available in your room; use them for your valuables. Complete fire prevention equipment is installed throughout the hotel. It is strictly forbidden to smoke (cigarettes and shisha), to cook or use hot plates, and to receive non-resident guests in the rooms." },
        { name: "On Arrival", tagline: "First steps",
          body: "Check that your luggage is complete and contact the Concierge for any discrepancy. The plan located behind your door indicates emergency exits, fire extinguishers and hose reels: familiarise yourself with their location. All hotel Ambassadors wear a badge; verify identity through the peephole before opening." },
        { name: "In Case of Emergency", tagline: "Stay calm",
          body: "Inform Reception; security will take over. Stay calm and follow the procedures posted on the back of your door. Do not use the lifts during evacuation. In case of fire, use the nearest emergency exit. In case of earthquake, protect your head, shelter under a solid structure, then calmly make your way to the assembly point outside." }
      ]
    }

  ]
};
