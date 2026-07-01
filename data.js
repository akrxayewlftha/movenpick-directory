/* ============================================================================
   Mövenpick Hotel Mansour Eddahbi Marrakech — Room Directory
   Données dynamiques : tout le contenu du directory est défini ici.
   Pour mettre à jour le site, il suffit de modifier cet objet.
   (La partie "Chambres & prix" est volontairement exclue.)
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
      id: "bienvenue", title: "Bienvenue", en: "Welcome", icon: "welcome", pid: "welcome_msg",
      tagline: "Une oasis contemporaine au cœur de Marrakech",
      items: [
        {
          name: "Le mot de bienvenue", tagline: "Marhaba", pid: "welcome_msg",
          chips: ["Hivernage", "5 étoiles", "5 hectares de jardins"],
          body: "Idéalement situé dans le très chic quartier de l'Hivernage, le Mövenpick Hotel Mansour Eddahbi Marrakech est à quelques minutes de l'animation de la place Jemaa El Fna et de la M Avenue, et dispose d'un accès direct au Palais des Festivals et des Congrès. Oasis contemporaine en plein centre-ville sur 5 hectares de jardins luxuriants, cet hôtel 5 étoiles entièrement rénové vous offre un accueil alliant authenticité, calme et élégance."
        },
        {
          name: "Présentation", tagline: "L'hôtel en quelques mots", pid: "about",
          chips: ["503 chambres", "7 restaurants", "3 piscines", "Spa Cinq Mondes"],
          body: "Situé sur l'avenue Mohammed VI, à 4 km seulement de l'aéroport international, l'hôtel met à votre disposition des équipements exceptionnels : 503 chambres, 7 restaurants, un bar, un centre de bien-être (spa Ô de Roses par Cinq Mondes, studio de yoga, salle de fitness), 3 piscines dont deux chauffées à 28°C en hiver, un bassin pour les enfants, un kids club avec baby-sitting, des salles pour les corporate events et des espaces pour les événements privés."
        },
        {
          name: "L'héritage", tagline: "Le Victorieux & le Doré", pid: "heritage",
          chips: ["Dynastie saâdienne", "La source de l'oasis"],
          body: "Le Victorieux (al-Mansour) et le Doré (Eddahbi) sont les surnoms du sixième sultan de la dynastie saâdienne, qui a conduit Marrakech à une renaissance culturelle. Le lobby abrite le trésor du domaine, sa source, symbolisée par une fontaine épurée surmontée d'un lustre de cuivre monumental en forme de goutte, sous une coupole grandiose. Autour de cette cascade de lumière, installez-vous dans l'élégance du salon d'honneur du Maître de l'Oasis."
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "restaurants", title: "Restaurants & Bars", en: "Dining", icon: "dining", pid: "nosh",
      tagline: "Sept tables, mille saveurs",
      items: [
        { name: "Le Marcelona", tagline: "Cuisine espagnole", pid: "marcelona", sid: "cd5e4aae-55a1-459d-805f-5a1df0631800",
          chips: ["19h00 – 23h00", "Air conditionné", "Terrasse fumeur"],
          body: "Le Marcelona vous accueille tous les soirs, à l'intérieur ou sur sa terrasse sous le superbe olivier. Tapas traditionnelles, paella, tortilla, viandes et poissons, sans oublier de délicieux desserts. Chaque soir, une danseuse flamenco illumine la scène, accompagnée d'un trio musical live, pour un spectacle vibrant et authentique qui fait toute l'âme du Marcelona." },
        { name: "Le Saray", tagline: "Buffet international", pid: "saray",
          chips: ["Lun–Ven 06h30 – 10h30", "Week-end 06h30 – 11h00", "Air conditionné"],
          body: "À l'élégance contemporaine inspirée de la tente caïdale, le Saray est le restaurant principal de l'hôtel, ouvert pour le petit-déjeuner et le dîner. Sa vaste salle et sa terrasse ombragée d'oliviers offrent un généreux buffet, à commencer par les spécialités marocaines. Le soir, buffet marocain et carte internationale contemporaine dans un festival de saveurs d'ici et d'ailleurs." },
        { name: "Le Jamra", tagline: "Cuisine healthy méditerranéenne", pid: "jamra", sid: "7966ad40-cf31-4ebc-98d4-8fcc66af580d",
          chips: ["12h00 – 18h00", "Espace fumeur"],
          body: "Fraîcheur et Méditerranée vous attendent au Jamra. Avec sa carte aux accents italiens, ce restaurant est idéal pour savourer des pâtes fraîches, une salade ensoleillée, un poisson à la sicilienne ou une viande à la romaine — et même un petit plat vegan. Découvrez la sophistication décontractée de sa terrasse à la cuisine ouverte, en bordure de la piscine aux lignes arrondies." },
        { name: "Le Manso Bar", tagline: "Bar · Tapas", pid: "manso_bar",
          chips: ["18h00 – 00h00", "Air conditionné", "Espace fumeur"],
          body: "Le bar de l'hôtel, avec vue sur la piscine principale. Dans une ambiance feutrée à l'esprit club, le confortable Manso Bar vous invite à un moment privilégié autour d'un apéritif classique ou d'un cocktail signature, accompagné de délicieuses tapas. Seul ou entre amis, en journée comme le soir, le lieu de détente par excellence." },
        { name: "Le Manso Pool", tagline: "Snacking au bord de la piscine", pid: "manso_pool", sid: "028bcea2-d925-4ce0-82e7-2b1bae8d3b5c",
          chips: ["12h00 – 18h00", "Espace fumeur"],
          body: "Pour agrémenter votre baignade ou profiter de l'ambiance du bord de la grande piscine, le Manso Pool vous accueille de midi au début de soirée. Salades fraîches, pâtes généreuses, grillades, pizzas gourmandes et desserts internationaux, accompagnés d'un jus de fruit frais ou d'un cocktail signature." },
        { name: "Le MFF", tagline: "Coffee shop · Pâtisserie", pid: "mff",
          chips: ["07h00 – 21h00", "Air conditionné", "Terrasse fumeur"],
          body: "Marrakech Fine Food, c'est la parenthèse légèreté et gourmandise au cœur de l'hôtel. Une offre originale, salée et sucrée, à savourer sur place ou à emporter. Dans une ambiance cosy aux allures de parisian coffee shop, choisissez parmi une sélection de cafés, thés et jus de fruits frais." },
        { name: "Le Dahbi", tagline: "Cuisine marocaine", pid: "dahbi",
          chips: ["Lun–Sam 19h00 – 23h00", "Air conditionné", "Terrasse fumeur"],
          body: "Le restaurant marocain de l'hôtel. Sous la direction de la talentueuse cheffe Meryem Cherkaoui, le Dahbi vous invite à redécouvrir la richesse culinaire du Maroc au travers de menus d'exception et d'une carte créative où chaque plat raconte une histoire. Au fond des jardins, un univers raffiné au luxe discret, pour une expérience sensorielle inoubliable." },
        { name: "Le Nosh", tagline: "Sky lounge · Levantin & asiatique", pid: "nosh",
          chips: ["Mer–Dim 19h00 – 00h00", "Bar jusqu'à 01h00", "Espace fumeur"],
          body: "Embarquez à bord du Nosh pour un voyage où les saveurs levantines rencontrent la finesse de la cuisine asiatique. Surplombant la grande piscine, le sky lounge de l'hôtel offre une vue exceptionnelle sur les jardins et la M Avenue. Laissez-vous séduire par une sélection de mezzés raffinés : houmous onctueux, taboulé frais, falafels croustillants." },
        { name: "Chocolate Hour", tagline: "Swiss Moment of Joy & Delight", pid: "chocolate",
          chips: ["17h00 – 18h00", "Lobby", "Gracieusement offert"],
          body: "Instant signature des hôtels Mövenpick. Chaque jour à 17h, venez déguster 60 minutes chocolatées présentées en un généreux buffet, gracieusement offertes dans le lobby. Une célébration quotidienne du savoir-faire suisse, pour éveiller les sens. Pour les plus petits, le Chocolate Hour se décline en douceurs au Kids Club." },
        { name: "Service en chambre", tagline: "Room service 24h/24", pid: "room_service",
          chips: ["Composez le 8790", "ou le 8792"],
          body: "Pour un moment de confort et d'intimité, notre service en chambre est disponible 24h/24 : petit-déjeuner au lit, déjeuner léger, dîner raffiné ou simple envie de snacking. Des petits déjeuners continentaux, marocains ou américains aux salades, sandwiches, pâtes, viandes et poissons cuisinés à la demande, et spécialités marocaines — jusqu'aux desserts maison. La qualité Mövenpick jusque dans votre chambre." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "spa", title: "Spa & Bien-être", en: "Wellness", icon: "spa", pid: "spa_ode",
      tagline: "Un véritable programme bien-être 5 étoiles",
      items: [
        { name: "Ô de Roses par Cinq Mondes", tagline: "Spa · Hammam · Soins", pid: "spa_ode", sid: "02f7dcd8-8cbb-4d3c-bdd4-7dd052e99e3a",
          chips: ["10h00 – 20h00", "7j/7", "Air conditionné"],
          body: "Avec sa décoration épurée en noir et blanc rehaussée de touches de cuivre, le spa Ô de Roses par Cinq Mondes entièrement rénové s'épanouit autour de deux patios discrets, dans la partie la plus calme de l'hôtel. Vous y trouverez 7 cabines de soin, une salle de manucure et pédicure, un salon de coiffure, un hammam avec 4 cabines de gommage (dont 2 avec vapeur), un sauna… et même un jacuzzi en plein air." },
        { name: "Studio Om Yoga", tagline: "Yoga & Pilates", pid: "yoga",
          chips: ["08h00 – 20h00", "15 types de yoga", "32 cours / semaine"],
          body: "Au cœur de l'hôtel, le studio Om Yoga vous propose 15 types différents de yoga, enseignés par une équipe de professeurs passionnés venus du monde entier. 32 cours sont organisés chaque semaine. Bordé par un grand bassin, le studio a été pensé pour retirer toutes les vertus d'une pratique sereine et relaxante." },
        { name: "Gainz Express", tagline: "Salle de fitness · Technogym", pid: "fitness",
          chips: ["07h00 – 23h00", "Air conditionné"],
          body: "Pour les sportifs, le Gainz Express est ouvert toute la semaine. Notre salle de sport, entièrement rénovée et équipée d'un matériel de dernière génération (machines Technogym), vous attend. Conservez vos habitudes toniques ou adoptez-en de nouvelles." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "kids", title: "Kids Club", en: "Family", icon: "kids", pid: "kids_club",
      tagline: "Parce que chaque âge mérite ses moments magiques",
      items: [
        { name: "Petits Sultans", tagline: "Kids Club · 4 à 12 ans", pid: "kids_club",
          chips: ["9h30 – 17h30", "7j/7", "+25 activités"],
          body: "Un espace joyeux et sécurisé pour les enfants de 4 à 12 ans. Plus de 25 activités variées : ateliers créatifs, street art, découvertes ludiques, jeux en extérieur, avec un thème différent chaque jour. Apprentissage ludique et encouragement de la créativité, dans une ambiance bienveillante et dynamique." },
        { name: "Baby-Club", tagline: "1 à 4 ans · encadré", pid: "baby_club",
          chips: ["300 MAD ½ journée", "400 MAD journée", "Selon disponibilité"],
          body: "Le Baby-Club accueille les tout-petits de 1 à 4 ans dans un environnement adapté, encadré par des professionnels. Service payant : 300 MAD la demi-journée, 400 MAD la journée (selon disponibilité). Un service de baby-sitting est également disponible sur demande auprès de l'équipe du Kids Club." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "loisirs", title: "Loisirs & Lounge", en: "Lifestyle", icon: "leisure", pid: "jardins",
      tagline: "Un art de vivre entre bien-être, culture et évasion",
      items: [
        { name: "Jardins & Piscines", tagline: "Trois piscines, une oasis", pid: "jardins",
          chips: ["09h00 – 20h00", "Chauffées à 28°C en hiver"],
          body: "L'hôtel est connu pour ses jardins délicieux et ses 3 piscines aux ambiances variées. Dès la sortie du lobby, la grande piscine chauffée à 28°C en hiver vous tend les transats. Les jardins, recomposés sous la direction du paysagiste Madison Cox, mêlent palmiers, agrumes et oliviers. Plus loin, la piscine design du Jamra et le bassin enfants ; vers le spa, une piscine plus calme, également chauffée, pour un moment de pure quiétude." },
        { name: "Culture & Art de vivre", tagline: "Mezzanine Art Gallery & concept store", pid: "culture",
          chips: ["Vernissages", "Galerie d'art", "Shopping"],
          body: "Pour les amoureux d'art, rendez-vous à la Mezzanine Art Gallery qui surplombe le lobby : street art, photographie, peinture, sculpture, art premier — un nouvel artiste tous les deux mois environ. Envie de shopping ? Le concept store de l'hôtel offre une sélection régulièrement renouvelée de produits tendance et de créations locales, autour du lobby et face aux jardins." },
        { name: "Expériences & Recommandations", tagline: "La conciergerie à votre service", pid: "experiences",
          chips: ["Golf", "Visites culturelles", "Nightlife", "Excursions"],
          body: "Envie d'une activité bien-être, d'une sortie nocturne ou d'une escapade dans les montagnes de l'Atlas ? Notre conciergerie est à votre disposition pour vous accompagner, vous conseiller et effectuer vos réservations : parcours de golf, visites culturelles, découvertes culinaires, nightlife, excursions… Laissez-nous vous ouvrir les portes du meilleur de Marrakech." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "outdoors", title: "Activités & Excursions", en: "Outdoors", icon: "outdoor", pid: "experiences",
      tagline: "Mille et une expériences à quelques pas",
      items: [
        { name: "Urban Padel Marrakech", tagline: "Padel · à 200 m",
          chips: ["4 000 m²", "À 200 mètres"],
          body: "À seulement 200 mètres de l'hôtel, ce centre de 4 000 m² dédié au padel vous accueille dans une ambiance moderne et conviviale. Idéal pour une pause sportive entre amis ou collègues, à deux pas de votre chambre." },
        { name: "Golf Royal de Marrakech", tagline: "Golf · à 10 min",
          chips: ["70 hectares", "Oliveraie centenaire"],
          body: "Situé à environ 10 minutes de l'hôtel, ce parcours mythique s'étend sur plus de 70 hectares. Tracé dans une oliveraie centenaire, il offre une expérience golfique de haut niveau au pied des montagnes de l'Atlas." },
        { name: "Palmeraie Quad", tagline: "Quad · à 20 min",
          chips: ["15 à 30 km", "Dunes & villages berbères"],
          body: "À une vingtaine de minutes du centre-ville, explorez la célèbre Palmeraie sur des parcours de 15 à 30 km en quad, à travers les dunes, les villages berbères et les sentiers désertiques. Une immersion totale dans la nature locale." },
        { name: "Terres d'Amanar", tagline: "Nature & aventure · à 35 km",
          chips: ["100 hectares", "Accrobranche & tyroliennes"],
          body: "Installé sur un domaine de 100 hectares aux portes du parc national du Toubkal (à 35 km de Marrakech), ce site éco-touristique propose accrobranche, tyroliennes géantes et randonnées dans un décor naturel grandiose." },
        { name: "Marrakech Kart Racing", tagline: "Karting · à 30 min",
          chips: ["9 hectares", "Circuit 1 200 m"],
          body: "À environ 30 minutes de l'hôtel, ce complexe s'étend sur 9 hectares avec un circuit de 1 200 mètres conforme aux normes internationales. Parfait pour les amateurs de vitesse et les sorties en famille ou en groupe." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "ville", title: "Virée en Ville", en: "Discover Marrakech", icon: "city", pid: "lobby",
      tagline: "Au cœur battant de la Ville Rouge",
      items: [
        { name: "Place Jemaa el-Fna", tagline: "Le cœur battant de la Ville Rouge",
          chips: ["UNESCO", "Spectacle vivant"],
          body: "Inscrite au Patrimoine Culturel Immatériel de l'UNESCO, la Place Jemaa el-Fna est le théâtre vibrant de la vie marrakchie. Dès la fin d'après-midi, elle s'anime de conteurs, musiciens Gnaouas, charmeurs de serpents et stands de nourriture, offrant un spectacle sensoriel unique au monde, sous le regard bienveillant de la Koutoubia." },
        { name: "Mosquée Koutoubia", tagline: "Le phare spirituel de Marrakech",
          chips: ["XIIe siècle", "Minaret de 77 m"],
          body: "Emblème incontesté de Marrakech, la Koutoubia impressionne par son minaret du XIIe siècle, chef-d'œuvre de l'architecture almohade. Culminant à 77 mètres, il a servi de modèle à la Giralda de Séville et à la Tour Hassan de Rabat. Sa majesté extérieure et ses jardins attenants sont un spectacle à ne pas manquer." },
        { name: "Jardins Majorelle", tagline: "Une oasis d'art et de couleur",
          chips: ["Bleu Majorelle", "Musée Berbère"],
          body: "Conçu par le peintre Jacques Majorelle en 1924 et magnifiquement restauré par Yves Saint Laurent et Pierre Bergé, ce jardin botanique est une symphonie de formes et de couleurs. Célèbre pour son bleu Majorelle intense, il abrite une collection impressionnante de plantes exotiques et le Musée Berbère." },
        { name: "Palais de la Bahia", tagline: "Splendeur de l'architecture marocaine",
          chips: ["XIXe siècle", "Zelliges & cèdre peint"],
          body: "Édifié à la fin du XIXe siècle pour le grand vizir Ba Ahmed, le Palais de la Bahia (la Belle) est un témoignage éblouissant du raffinement marocain. Explorez ses vastes cours, ses salons richement décorés de zelliges, de stucs ciselés et de plafonds en bois de cèdre peint." },
        { name: "Tombeaux Saadiens", tagline: "Un trésor caché de la dynastie",
          chips: ["XVIe siècle", "Marbre de Carrare"],
          body: "Redécouverts en 1917, ces mausolées royaux datent de l'époque du grand sultan Ahmed al-Mansur Saadi. Ils abritent les sépultures de la dynastie et constituent un joyau d'architecture hispano-mauresque, avec des décorations d'une finesse remarquable en marbre de Carrare, stuc et bois de cèdre, particulièrement dans la Salle des Douze Colonnes." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "services", title: "Services & Équipements", en: "Services A–Z", icon: "services", pid: "room1",
      tagline: "Tout pour un séjour sans souci, de A à V",
      items: [
        { name: "Adaptateur", tagline: "Réception", chips: ["220 volts"],
          body: "Le courant électrique est de 220 volts. Si vous avez besoin d'un adaptateur ou d'un transformateur, contactez la Réception." },
        { name: "Baby-sitting", tagline: "Kids Club", chips: ["Sur demande"],
          body: "Berceaux et équipements pour bébé disponibles sur simple demande. Pour organiser un service de baby-sitting, l'équipe du Kids Club est à votre écoute." },
        { name: "Bagagerie", tagline: "Conciergerie", chips: ["24h/24"],
          body: "Nos bagagistes se tiennent à votre disposition 24h/24 pour prendre soin de vos effets personnels. Contactez la Conciergerie pour toute assistance." },
        { name: "Billet d'avion", tagline: "Conciergerie",
          body: "Besoin de confirmer un vol ou d'obtenir des informations pour votre voyage ? Notre Conciergerie se charge volontiers de vos démarches." },
        { name: "Blanchisserie", tagline: "Tous les jours", chips: ["Frais applicables"],
          body: "Un service de blanchisserie est assuré tous les jours : placez votre linge dans le sac prévu et remplissez la fiche à linge. Le personnel s'en occupera (des frais supplémentaires s'appliquent)." },
        { name: "Boutiques", tagline: "Concept store",
          body: "Autour du lobby et face aux jardins, le concept store propose une sélection pointue de marques et de créations locales. L'adresse idéale pour un moment shopping ou pour dénicher le cadeau parfait." },
        { name: "Bureau de change", tagline: "Derrière la Réception",
          body: "Un bureau de change est situé derrière la Réception. Le taux appliqué est celui de la Banque du Maroc en vigueur." },
        { name: "Business Center", tagline: "Rez-de-chaussée", chips: ["24h/24"],
          body: "Situé au rez-de-chaussée et accessible 24h/24, le Business Center met à votre disposition ordinateurs, imprimantes, service de fax et assistance bureautique (des frais peuvent s'appliquer)." },
        { name: "Butler digital", tagline: "WhatsApp", chips: ["+212 524 339 100"],
          body: "Notre Butler digital, accessible à tout moment via WhatsApp au +212 524 339 100, vous accompagne tout au long de votre séjour. Horaires du spa, réservation d'un restaurant, conseils : il vous répond instantanément, avec efficacité et convivialité." },
        { name: "Carte de crédit", tagline: "Paiements",
          body: "Nous acceptons les cartes American Express, Visa, MasterCard et autres principales cartes bancaires." },
        { name: "Climatisation & chauffage", tagline: "En chambre",
          body: "Un panneau mural dans votre chambre vous permet de régler la température à votre convenance." },
        { name: "Coffre-fort", tagline: "En chambre",
          body: "Un coffre-fort est à votre disposition dans votre chambre. L'hôtel décline toute responsabilité en cas de perte d'objets de valeur non déposés." },
        { name: "Conciergerie", tagline: "Lobby",
          body: "Situés dans le Lobby, nos concierges sont à votre écoute pour organiser vos déplacements, excursions, réservations, courses ou toute autre demande." },
        { name: "Consigne à bagages", tagline: "Après le check-out",
          body: "Après le check-out, vous pouvez laisser vos valises en consigne et venir les récupérer plus tard." },
        { name: "Départ de l'hôtel", tagline: "Check-out", chips: ["Midi"],
          body: "Les chambres doivent être libérées à midi. Pour tout départ tardif, veuillez consulter la Réception." },
        { name: "Eau", tagline: "Room service · 8790 / 8792",
          body: "L'eau du robinet est traitée et potable. Des bouteilles d'eau minérale sont gracieusement mises à votre disposition. Pour en obtenir davantage, contactez le Room Service au 8790 ou 8792." },
        { name: "Gouvernante", tagline: "Composez le 9", chips: ["9h – 17h", "Couverture 18h – 21h30"],
          body: "Les chambres sont nettoyées de 9h à 17h. Un service de couverture est proposé en soirée entre 18h et 21h30. Pour un horaire spécifique, composez le 9." },
        { name: "Internet / Wifi", tagline: "Tout l'établissement",
          body: "Un accès Internet Wifi est disponible dans l'ensemble de l'établissement. Pour toute assistance, la Réception se tient à votre disposition." },
        { name: "Location de voiture", tagline: "Conciergerie", chips: ["Avec ou sans chauffeur"],
          body: "Un service de location de voiture avec ou sans chauffeur est disponible sur demande auprès de la Conciergerie." },
        { name: "Médecin / Infirmerie", tagline: "Composez le 9",
          body: "Une infirmière est à votre disposition pour toute assistance médicale. Veuillez contacter la Réception ou composer le 9." },
        { name: "Mini-bar", tagline: "Réapprovisionné chaque jour",
          body: "Votre mini-bar contient des bouteilles d'eau et est réapprovisionné chaque jour." },
        { name: "Ne pas déranger", tagline: "Indicateur de porte",
          body: "Utilisez l'indicateur « Ne pas déranger » sur votre porte. Pour votre sécurité, il reste de notre responsabilité d'accéder à la chambre au moins toutes les 24 à 48 heures ; un effort est fait pour vous prévenir au préalable." },
        { name: "Objet trouvé", tagline: "Conciergerie",
          body: "Pour toute perte ou objet oublié, la Conciergerie est à votre disposition." },
        { name: "Oreiller", tagline: "Room service",
          body: "Des oreillers supplémentaires ou spéciaux peuvent être demandés via le Room Service." },
        { name: "Piscines", tagline: "Extérieures", chips: ["09h00 – 20h00"],
          body: "Nos piscines extérieures sont ouvertes de 9h à 20h. Pour toute information ou pour obtenir une serviette, adressez-vous au pisciniste." },
        { name: "Réveil", tagline: "Réception",
          body: "Un service de réveil est disponible sur demande auprès de la Réception ou via votre téléphone en appuyant sur la touche dédiée." },
        { name: "Sécurité", tagline: "24h/24", chips: ["Caméras espaces publics"],
          body: "Un service de sécurité est assuré 24h/24 et des caméras couvrent les espaces publics. Par précaution, verrouillez toujours votre porte." },
        { name: "Taxi", tagline: "Conciergerie",
          body: "Nos concierges organisent vos transferts et réservations de taxis à tout moment." },
        { name: "Visites organisées", tagline: "Conciergerie",
          body: "Nos concierges seront ravis d'organiser vos visites à travers Marrakech et ses alentours." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "comm", title: "Téléphone & Internet", en: "Connectivity", icon: "comm", pid: "room2",
      tagline: "Rester connecté, quand vous le souhaitez",
      items: [
        { name: "Chambre à chambre", tagline: "Appel interne",
          body: "Pour rester à l'écoute de vos proches résidents à l'hôtel, composez simplement le numéro de leur chambre." },
        { name: "Appels nationaux", tagline: "Marrakech & Maroc", chips: ["Composez le 0"],
          body: "Composez le « 0 », suivi du numéro souhaité, pour tout appel vers l'extérieur, que ce soit à Marrakech ou ailleurs dans le pays." },
        { name: "Appels internationaux", tagline: "Vers l'étranger", chips: ["0 + 00 + indicatif"],
          body: "Pour joindre un numéro à l'étranger, composez le « 0 » + 00 + indicatif du pays + indicatif ville, suivi du numéro. Le tarif est basé sur la durée de l'appel, le prix à la minute additionné d'une commission, selon les opérateurs." },
        { name: "Connexion Wifi", tagline: "Dans tout l'hôtel",
          body: "Profitez d'une connexion Internet Wifi dans tout l'hôtel, en chambre comme au Lobby, en insérant votre adresse électronique. Pour toute assistance, contactez la Réception." },
        { name: "Business Center", tagline: "Lobby", chips: ["Frais possibles"],
          body: "L'accès Internet est disponible au Business Center situé dans le Lobby, où ordinateurs et imprimantes sont à votre disposition (des frais supplémentaires peuvent s'appliquer)." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "urgence", title: "Urgence & Sécurité", en: "Safety", icon: "safety", pid: "room3",
      tagline: "Votre sécurité est notre priorité",
      items: [
        { name: "Numéros d'urgence", tagline: "À composer en cas de besoin",
          chips: ["Police : 19", "Pompiers / Médical : 150", "Réception : 9"],
          body: "Pour la sécurité de l'hôtel ou une urgence médicale, contactez immédiatement la Réception en composant le 9 — la sécurité prendra le relais. Police : 19. Pompiers / Urgence médicale : 150." },
        { name: "Sécurité en chambre", tagline: "Bonnes pratiques",
          body: "Des coffres-forts sont à votre disposition en chambre ; utilisez-les pour vos objets de valeur. Des équipements complets de prévention incendie sont installés. Il est strictement interdit de fumer (cigarettes et chichas), de cuisiner ou d'utiliser des plaques chauffantes, et de recevoir des invités non-résidents dans les chambres." },
        { name: "À votre arrivée", tagline: "Premiers réflexes",
          body: "Vérifiez que vos bagages sont au complet et contactez la Conciergerie pour toute anomalie. Le plan situé derrière votre porte indique les sorties de secours, les extincteurs et les RIA : familiarisez-vous avec leur emplacement. Tous les Ambassadeurs de l'hôtel portent un badge ; vérifiez l'identité par le judas avant d'ouvrir." },
        { name: "En cas d'urgence", tagline: "Garder son calme",
          body: "Informez la réception, la sécurité prendra le relais. Gardez votre calme et suivez les procédures affichées au dos de votre porte. N'utilisez pas les ascenseurs en cas d'évacuation. En cas d'incendie, empruntez la plus proche sortie de secours. En cas de séisme, protégez votre tête, abritez-vous sous une structure solide, puis rejoignez calmement le point de rassemblement à l'extérieur." }
      ]
    }

  ]
};
