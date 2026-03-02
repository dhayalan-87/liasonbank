// static/menus.jsx

// Header navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us-liaison" },
  { name: "Our Clients", href: "/client-liaison" },
  { name: "Completed", href: "/completed-liaison-bank" },
  { name: "On Going", href: "/ongoing-liaison-bank" },
  { 
    name: "Our Services", 
    submenu: [
      { name: "Licensing", href: ""},
      { name: "Liaisoning", href: ""},
      { name: "Food And Beverage License Services", href: ""},
      { name: "License And Permit Services", href: ""},
      { name: "PNG Pipelining Services", href: ""},
      { name: "Fire Safety and Prevention Services", href: ""},
      { name: "Liaison Architect Services", href: ""},
      { name: "Electrical Audit and AMC Services", href: ""},
      { name: "Welding Services", href: ""},
      { name: "Interior Design Services", href: ""},
    ]
  },  
  { name: "Process", href: "/process-liaison-bank" },
  { name: "Contact Us", href: "/contact-us-liaison-bank" },
  // { name: "Login", href: "/Login" },
]

// Footer links
const importantLinks = [
  // { name: "Home", href: "/" },
  // { name: "About", href: "/about-us-liaison" },
  { name: "Article", href: "/article-liaison-bank" },
  { name: "CEO's Desk", href: "/ceos-desk" },
  { name: "Careers", href: "/careers-liaison-bank/" },
  // { name: "Client", href: "/client-liaison/" },
  // { name: "Process", href: "/process-liaison-bank" },
  { name: "Testimonials", href: "/testimonials-liaison-bank" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-and-conditions" },
  { name: "Sitemap", href: "/sitemap" }
]

const informationLinks = [
 
  { name: "Contact Us", href: "/contact-us-liaison-bank" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms and Conditions", href: "/terms-conditions" },
]


// Named exports
export { navLinks, importantLinks, informationLinks }
