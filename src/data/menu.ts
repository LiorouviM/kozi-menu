import type { Dish, DishOrbitLabels } from "@/components/ui/dish-orbit-carousel"

export type Lang = "en" | "el"

/* Restaurant facts. Address and phone come from public listings (TripAligner, Airbnb);
   confirm them with the owner before going live. */
export const KOZI = {
  name: "Kozi",
  tagline: { en: "Souvlaki & Greek tavern", el: "Σουβλατζίδικο & ψητοπωλείο" },
  place: { en: "Chora, Naxos", el: "Χώρα Νάξου" },
  address: { en: "Leof. Naxou Eggaron, Chora, Naxos 843 00", el: "Λεωφ. Νάξου Εγγαρών, Χώρα Νάξου 843 00" },
  phone: "+30 2285 024571",
  // Kozi's own Google Maps page (place id from the owner's link), not a bare map
  maps: "https://www.google.com/maps?cid=11917925162255759958",
  // Turn-by-turn directions from wherever the visitor is, ending at Kozi's door
  directions: "https://www.google.com/maps/dir/?api=1&destination=37.1081012,25.375892",
  wolt: "https://wolt.com/en/grc/naxos/restaurant/kozi",
}

const base = import.meta.env.BASE_URL
const img = (name: string) => base + "dishes/" + name + ".jpg"

type FeaturedDish = {
  image: string
  accent: string
  en: Omit<Dish, "image" | "accent" | "chef" | "kitchen">
  el: Omit<Dish, "image" | "accent" | "chef" | "kitchen">
}

/* The dishes in the carousel. Photos: free Unsplash photos of similar dishes
   (not Kozi's own plates); swap in the restaurant's photos when available. */
const FEATURED: FeaturedDish[] = [
  {
    image: img("gyros-pitta"),
    accent: "#f2b183",
    en: {
      title: "Pitta bread", subtitle: "With pork", label: "Pork pitta",
      alt: "Pork wrapped in pitta bread with fries, tomato and onion",
      description: "Grilled pork wrapped in warm pitta with tomato, onion, tzatziki and fries. The classic on-the-go bite.",
      ingredients: ["Pork", "Pitta bread", "Tomato", "Onion", "Tzatziki", "Fries"],
    },
    el: {
      title: "Πίτα", subtitle: "Χοιρινό", label: "Πίτα χοιρινό",
      alt: "Πίτα με χοιρινό, πατάτες, ντομάτα και κρεμμύδι",
      description: "Χοιρινό σχάρας τυλιγμένο σε ζεστή πίτα με ντομάτα, κρεμμύδι, τζατζίκι και πατάτες.",
      ingredients: ["Χοιρινό", "Πίτα", "Ντομάτα", "Κρεμμύδι", "Τζατζίκι", "Πατάτες"],
    },
  },
  {
    image: img("pork-skewers"),
    accent: "#e9967a",
    en: {
      title: "Meat on", subtitle: "Skewer", label: "Pork skewer",
      alt: "Pork skewers on a charcoal grill",
      description: "Hand-threaded skewers over charcoal: pork, chicken, kebab, sheftalia, sausage or chicken & bacon.",
      ingredients: ["Pork", "Chicken", "Kebab", "Sheftalia", "Sausage"],
    },
    el: {
      title: "Καλαμάκι", subtitle: "Σουβλάκι", label: "Καλαμάκι χοιρινό",
      alt: "Καλαμάκια χοιρινά στα κάρβουνα",
      description: "Καλαμάκια περασμένα στο χέρι, στα κάρβουνα: χοιρινό, κοτόπουλο, κεμπάπ, σεφταλιά, λουκάνικο.",
      ingredients: ["Χοιρινό", "Κοτόπουλο", "Κεμπάπ", "Σεφταλιά", "Λουκάνικο"],
    },
  },
  {
    image: img("kebab"),
    accent: "#f4c77b",
    en: {
      title: "On the grill", subtitle: "Kebab", label: "Kebab",
      alt: "Kebab skewers with fries, tomato and onion",
      description: "Spiced minced-meat kebab off the grill, served with fries, tomato and onion.",
      ingredients: ["Kebab", "Fries", "Tomato", "Onion", "Pitta"],
    },
    el: {
      title: "Στη σχάρα", subtitle: "Κεμπάπ", label: "Κεμπάπ",
      alt: "Κεμπάπ με πατάτες, ντομάτα και κρεμμύδι",
      description: "Κεμπάπ από τη σχάρα με πατάτες τηγανητές, ντομάτα και κρεμμύδι.",
      ingredients: ["Κεμπάπ", "Πατάτες", "Ντομάτα", "Κρεμμύδι", "Πίτα"],
    },
  },
  {
    image: img("meat-variety"),
    accent: "#d9a07a",
    en: {
      title: "To share", subtitle: "Mixed grill", label: "Mixed grill",
      alt: "Mixed grill platter with lamb chops, chicken, bifteki, village sausage and pancetta",
      description: "A platter for the table: lamb chops, chicken, bifteki, Greek village sausage and pancetta, all off the charcoal grill.",
      ingredients: ["Lamb chops", "Chicken", "Bifteki", "Village sausage", "Pancetta"],
    },
    el: {
      title: "Για παρέα", subtitle: "Ποικιλίες", label: "Ποικιλίες",
      alt: "Ποικιλία με αρνίσια παϊδάκια, κοτόπουλο, μπιφτέκι, χωριάτικο λουκάνικο και πανσέτα",
      description: "Πιατέλα για το τραπέζι: αρνί, κοτόπουλο, μπιφτέκι, χωριάτικο λουκάνικο και πανσέτα, όλα στα κάρβουνα.",
      ingredients: ["Αρνί", "Κοτόπουλο", "Μπιφτέκι", "Χωριάτικο λουκάνικο", "Πανσέτα"],
    },
  },
  {
    image: img("steak"),
    accent: "#c9b58a",
    en: {
      title: "Char grill", subtitle: "Steak beef", label: "Beef steak",
      alt: "Grilled beef steak with fries",
      description: "Beef steak seared over charcoal, with fries. Hungry? Ask for the XXL, 800 g and up.",
      ingredients: ["Beef steak", "Fries", "Sea salt", "Oregano"],
    },
    el: {
      title: "Κάρβουνα", subtitle: "Μοσχαρίσια", label: "Μπριζόλα μοσχαρίσια",
      alt: "Μοσχαρίσια μπριζόλα σχάρας με πατάτες",
      description: "Μοσχαρίσια μπριζόλα στα κάρβουνα με πατάτες. Πεινάτε πολύ; Ζητήστε την XXL, 800γρ. και πάνω.",
      ingredients: ["Μπριζόλα", "Πατάτες", "Αλάτι", "Ρίγανη"],
    },
  },
  {
    image: img("kokkinisto"),
    accent: "#e88a6e",
    en: {
      title: "Greek cuisine", subtitle: "Kokkinisto", label: "Beef in red sauce",
      alt: "Beef slow-cooked in red tomato sauce",
      description: "Beef cooked slowly in a red tomato sauce, the way Greek homes do it on a Sunday.",
      ingredients: ["Beef", "Tomato", "Onion", "Olive oil", "Spices"],
    },
    el: {
      title: "Μαγειρευτά", subtitle: "Κοκκινιστό", label: "Μοσχάρι κοκκινιστό",
      alt: "Μοσχάρι κοκκινιστό σε σάλτσα ντομάτας",
      description: "Μοσχάρι μαγειρεμένο σιγά σιγά σε κόκκινη σάλτσα, όπως το κυριακάτικο του σπιτιού.",
      ingredients: ["Μοσχάρι", "Ντομάτα", "Κρεμμύδι", "Ελαιόλαδο", "Μπαχαρικά"],
    },
  },
  {
    image: img("salad"),
    accent: "#b8d48c",
    en: {
      title: "Fresh", subtitle: "Salads", label: "Salads",
      alt: "A fresh salad with tomatoes and greens",
      description: "From the Greek and the Naxian salad to Ntakos and the house Kozi salad. Fresh, local and generous.",
      ingredients: ["Tomato", "Cucumber", "Naxos cheese", "Olive oil", "Greens"],
    },
    el: {
      title: "Φρέσκες", subtitle: "Σαλάτες", label: "Σαλάτες",
      alt: "Φρέσκια σαλάτα με ντομάτες και πράσινα φύλλα",
      description: "Από τη χωριάτικη και τη ναξιώτικη ως τον ντάκο και τη σαλάτα Kozi. Φρέσκες και πλούσιες.",
      ingredients: ["Ντομάτα", "Αγγούρι", "Τυρί Νάξου", "Ελαιόλαδο", "Χόρτα"],
    },
  },
  {
    image: img("shrimp-spaghetti"),
    accent: "#9fc8e4",
    en: {
      title: "Pasta", subtitle: "Shrimps", label: "Shrimp spaghetti",
      alt: "Spaghetti with shrimps and tomato",
      description: "Spaghetti tossed with shrimps in a light tomato sauce. A taste of the Aegean.",
      ingredients: ["Spaghetti", "Shrimps", "Tomato", "Garlic", "Parsley"],
    },
    el: {
      title: "Ζυμαρικά", subtitle: "Γαρίδες", label: "Γαριδομακαρονάδα",
      alt: "Σπαγγέτι με γαρίδες και ντομάτα",
      description: "Σπαγγέτι με γαρίδες σε ελαφριά σάλτσα ντομάτας. Μια γεύση από το Αιγαίο.",
      ingredients: ["Σπαγγέτι", "Γαρίδες", "Ντομάτα", "Σκόρδο", "Μαϊντανός"],
    },
  },
]

export function featured(lang: Lang): Dish[] {
  return FEATURED.map((d) => ({
    ...d[lang],
    image: d.image,
    accent: d.accent,
    chef: lang === "en" ? "Kozi kitchen" : "Κουζίνα Kozi",
    kitchen: KOZI.place[lang],
  }))
}

export const LABELS: Record<Lang, Partial<DishOrbitLabels>> = {
  en: {
    region: "Kozi favourites",
    chooseDish: "Choose a dish",
    play: "Find us",
    order: "Order on Wolt",
    menu: "Full menu",
    eyebrow: (n) => "#" + n + " Kozi favourite",
  },
  el: {
    region: "Αγαπημένα του Kozi",
    chooseDish: "Διάλεξε πιάτο",
    details: "Λεπτομέρειες πιάτου",
    overview: "Περιγραφή",
    ingredients: "Υλικά",
    play: "Πού είμαστε",
    order: "Παραγγελία Wolt",
    like: "Μου αρέσει",
    likes: "μου αρέσει",
    notForMe: "Δεν μου αρέσει",
    search: "Αναζήτηση",
    menu: "Όλο το μενού",
    previous: "Προηγούμενο πιάτο",
    next: "Επόμενο πιάτο",
    eyebrow: (n) => "#" + n + " Αγαπημένο του Kozi",
    rated: (r) => "Βαθμολογία " + r + " στα 5",
    status: (n, total, name) => "Πιάτο " + n + " από " + total + ": " + name,
  },
}

/* The full menu, as on kozinaxos.gr/menu.html. No prices there, so none here. */
type Item = [en: string, el: string]
export type Section = { en: string; el: string; items: Item[] }

export const MENU: Section[] = [
  { en: "Appetizers", el: "Ορεκτικά", items: [
    ["Garlic salad", "Σκορδαλιά"], ["Dolmades", "Ντολμαδάκια"], ["Fish roe salad", "Ταραμοσαλάτα"],
    ["Octopus in vinegar", "Χταπόδι ξιδάτο"], ["Tzatziki", "Τζατζίκι"], ["Tyrokafteri", "Τυροκαυτερή"],
    ["Baked feta", "Φέτα ψητή"], ["Zucchini balls", "Κολοκυθοκεφτέδες"], ["Meatballs", "Κεφτεδάκια"],
    ["Saganaki", "Σαγανάκι"], ["Fried potatoes", "Πατάτες τηγανητές"], ["Roasted peppers", "Πιπεριές ψητές"],
    ["Fried peppers", "Πιπεριές τηγανητές"], ["Fried aubergines", "Μελιτζάνες τηγανητές"],
    ["Fried zucchini", "Κολοκυθάκια τηγανητά"], ["Stuffed mushrooms", "Μανιτάρια γεμιστά"],
    ["Stuffed potato", "Πατάτα γεμιστή"],
  ] },
  { en: "Salads", el: "Σαλάτες", items: [
    ["Cucumber salad", "Αγγουροσαλάτα"], ["Tomato salad", "Ντοματοσαλάτα"], ["Cucumber – tomato salad", "Αγγουροντομάτα"],
    ["Cucumber – tomato – pepper – onion salad", "Αγγούρι, ντομάτα, πιπεριά, κρεμμύδι"], ["Beetroot salad", "Παντζαροσαλάτα"],
    ["Putanesca", "Πουτανέσκα"], ["Kozi salad", "Σαλάτα Kozi"], ["Portara salad", "Σαλάτα Πορτάρα"],
    ["Greek salad", "Χωριάτικη"], ["Lettuce salad", "Μαρουλοσαλάτα"], ["Cabbage – carrot salad", "Λάχανο – καρότο"],
    ["Potato salad", "Πατατοσαλάτα"], ["Green salad", "Πράσινη σαλάτα"], ["Mixed salad", "Ανάμεικτη σαλάτα"],
    ["Chicken salad", "Σαλάτα κοτόπουλο"], ["Naxian salad", "Ναξιώτικη σαλάτα"], ["Ntakos", "Ντάκος"],
    ["Chef salad", "Σαλάτα του σεφ"], ["Caesar's salad", "Σαλάτα του Καίσαρα"],
  ] },
  { en: "On the grill", el: "Στη σχάρα", items: [
    ["Lamb chops", "Παϊδάκια αρνίσια"], ["Chicken cutlets", "Μπριζολάκια κοτόπουλο"], ["Pancetta", "Πανσέτα"],
    ["Rib", "Πλευρά"], ["Kebab", "Κεμπάπ"], ["Sheftalia", "Σεφταλιά"], ["Pork steak", "Χοιρινή μπριζόλα"],
    ["Pork steak XXL 800 g+", "Χοιρινή μπριζόλα XXL 800γρ.+"], ["Beef steak", "Μοσχαρίσια μπριζόλα"],
    ["Beef steak XXL 800 g+", "Μοσχαρίσια μπριζόλα XXL 800γρ.+"], ["Burger", "Μπιφτέκι"],
    ["Stuffed burger", "Μπιφτέκι γεμιστό"], ["Beef liver", "Συκώτι μοσχαρίσιο"], ["Sausage", "Λουκάνικο"],
    ["Chicken", "Κοτόπουλο"], ["Chicken fillet with cream sauce", "Φιλέτο κοτόπουλο με σάλτσα κρέμας"],
    ["Grilled chicken", "Κοτόπουλο σχάρας"], ["Schnitzel", "Σνίτσελ"], ["Schnitzel with cream sauce", "Σνίτσελ με σάλτσα κρέμας"],
    ["Schnitzel roquefort", "Σνίτσελ ροκφόρ"], ["Pepper steak", "Μπριζόλα πιπεράτη"],
    ["Steak with cream sauce", "Μπριζόλα με σάλτσα κρέμας"], ["Mixed grill", "Ποικιλίες"],
  ] },
  { en: "Pitta bread", el: "Πίτες", items: [
    ["Pitta with pork", "Πίτα χοιρινό"], ["Pitta with chicken", "Πίτα κοτόπουλο"], ["Pitta with kebab", "Πίτα κεμπάπ"],
    ["Pitta with sheftalia", "Πίτα σεφταλιά"], ["Pitta with sausage", "Πίτα λουκάνικο"],
    ["Pitta with chicken & bacon", "Πίτα κοτόπουλο & μπέικον"],
  ] },
  { en: "Cyprian pitta bread", el: "Κυπριακή πίτα", items: [
    ["Pitta with pork", "Πίτα χοιρινό"], ["Pitta with chicken", "Πίτα κοτόπουλο"], ["Pitta with kebab", "Πίτα κεμπάπ"],
    ["Pitta with sheftalia", "Πίτα σεφταλιά"], ["Pitta with sausage", "Πίτα λουκάνικο"],
    ["Pitta with chicken & bacon", "Πίτα κοτόπουλο & μπέικον"], ["Pitta with pancetta pork", "Πίτα πανσέτα"],
  ] },
  { en: "Meat on skewer", el: "Καλαμάκια", items: [
    ["Pork skewer", "Καλαμάκι χοιρινό"], ["Chicken skewer", "Καλαμάκι κοτόπουλο"], ["Kebab skewer", "Καλαμάκι κεμπάπ"],
    ["Sheftalia skewer", "Καλαμάκι σεφταλιά"], ["Sausage skewer", "Καλαμάκι λουκάνικο"],
    ["Chicken & bacon skewer", "Καλαμάκι κοτόπουλο & μπέικον"],
  ] },
  { en: "Spit-roasted meat", el: "Σούβλα", items: [
    ["Kontosouvli", "Κοντοσούβλι"], ["Pork with cheese & pepper", "Χοιρινό με τυρί & πιπεριά"],
    ["Baby pork", "Γουρουνόπουλο"], ["Pork", "Χοιρινό"],
  ] },
  { en: "Greek cuisine", el: "Μαγειρευτά", items: [
    ["Mousaka", "Μουσακάς"], ["Pastitsio", "Παστίτσιο"], ["Beef cooked in red sauce", "Μοσχάρι κοκκινιστό"],
    ["Rabbit cooked with onions", "Κουνέλι στιφάδο"], ["Rooster cooked with red sauce & wine", "Κόκορας κρασάτος"],
    ["Fried kalamari", "Καλαμαράκια τηγανητά"], ["Kebab with yogurt", "Κεμπάπ με γιαούρτι"],
  ] },
  { en: "Naxos cheese", el: "Τυριά Νάξου", items: [
    ["Graviera", "Γραβιέρα"], ["Kefalotyri", "Κεφαλοτύρι"], ["Cream cheese", "Κρεμώδες τυρί"],
    ["Feta", "Φέτα"], ["Cheese variety", "Ποικιλία τυριών"],
  ] },
  { en: "Pasta", el: "Ζυμαρικά", items: [
    ["Napolitana", "Ναπολιτάνα"], ["Bolognese", "Μπολονέζ"], ["Carbonara", "Καρμπονάρα"],
    ["Kozi", "Kozi"], ["Shrimp spaghetti", "Γαριδομακαρονάδα"],
  ] },
]

export const UI = {
  en: {
    menuTitle: "Our menu", menuIntro: "Grill, pitta, Greek home cooking and Naxos cheese. Ask us for today's specials.",
    findUs: "Find us", call: "Call us", order: "Order on Wolt", directions: "Directions", scroll: "Scroll to taste",
    footer: "Photos are illustrative.", lang: "Ελληνικά",
  },
  el: {
    menuTitle: "Το μενού μας", menuIntro: "Σχάρα, πίτες, σπιτικά μαγειρευτά και τυριά Νάξου. Ρωτήστε μας για τα πιάτα ημέρας.",
    findUs: "Πού είμαστε", call: "Τηλέφωνο", order: "Παραγγελία Wolt", directions: "Οδηγίες", scroll: "Κύλησε για να γευτείς",
    footer: "Οι φωτογραφίες είναι ενδεικτικές.", lang: "English",
  },
}
