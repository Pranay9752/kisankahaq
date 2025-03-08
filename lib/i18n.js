import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Your translations
const resources = {
  en: {
    translation: {
      contact_us: "Contact Us",
      contact_description:
        "Have questions or need assistance? We're here to help you.",
      call_us: "Call Us",
      email_us: "Email Us",
      office_address: "Office Address",
      whatsapp_support: "WhatsApp Support",
      send_message: "Send Us a Message",
      your_name: "Your Name",
      your_email: "Your Email",
      subject: "Subject",
      your_message: "Your Message",
      phone_number: "Phone Number (Optional)",
      send: "Send Message",
      thank_you: "Thank you for your message! We'll get back to you soon.",
      hero_title: "Empowering Farmers, Connecting Directly",
      hero_description:
        "We're building a sustainable future by connecting farmers directly with buyers, eliminating middlemen, and ensuring fair prices for quality produce.",
      get_started: "Get Started",
      about_us: "About Us",
      mission_title: "Our Mission",
      mission_description:
        "For too long, middlemen have cut into farmers' profits, while buyers struggle to source quality produce. Kisan Ka Haq bridges this gap by providing a streamlined platform that connects farmers directly with buyers, ensuring fair prices and quality assurance.",
      vision_title: "Our Vision",
      vision_description:
        "We envision a future where every farmer has direct access to markets, practices sustainable agriculture, and contributes to rural economic growth. We're working toward a world where technology empowers traditional farming.",
      story_title: "Our Story",
      story_description:
        "Rooted in Jaunpur, Uttar Pradesh, Kisan Ka Haq was born from witnessing the struggles of local farmers. Inspired by their resilience and determination, we created this platform to give them the voice and direct market access they deserve.",
      how_it_works: "How It Works",
      register: "Register",
      register_description:
        "Farmers register and list their available crops with details and photos.",
      browse: "Browse",
      browse_description:
        "Buyers browse available produce and place orders directly with farmers.",
      transaction: "Transaction",
      transaction_description:
        "Secure transactions and smooth logistics are facilitated through our platform.",
      payment: "Payment",
      payment_description:
        "Farmers receive payments directly, eliminating middlemen and maximizing profits.",
      marketplace: "Our Marketplace",
      for_farmers: "For Farmers",
      for_farmers_description:
        "List your produce directly on our platform and connect with buyers across the country. Cut out middlemen and get the fair price you deserve for your hard work.",
      sell_crops: "Sell Your Crops",
      for_buyers: "For Buyers",
      for_buyers_description:
        "Source the freshest produce directly from farms. Get quality assurance, competitive prices, and support local farmers while growing your business.",
      browse_produce: "Browse Produce",
      success_stories: "Success Stories",
      testimonials_description:
        "Hear from farmers and buyers who have transformed their businesses with Kisan Ka Haq.",
      view_all_products: "View All Products",
      featured_products: "Featured Products",
      discover_products:
        "Discover quality produce from farms across the country.",
      organic_wheat: "Organic Wheat",
      basmati_rice: "Basmati Rice",
      fresh_potatoes: "Fresh Potatoes",
      tomatoes: "Tomatoes",
      register_now: "Register Now",
      list_your_produce: "List Your Produce",
      buy_directly: "Buy Directly",
      secure_transactions: "Secure Transactions",
      direct_payment: "Direct Payment",
      customer_reviews: "Customer Reviews",
      connect_with_us: "Connect With Us",
    },
  },
  hi :{
    translation: {
        contact_us: "ff"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
