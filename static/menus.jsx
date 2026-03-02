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
      { name: "AMC", href: "" },
      { name: "Pest Control", href: "" },
      { name: "Licensing", href: "" },
      { name: "Liaisoning", href: "" },
      { name: "Equipment Solution Department ( ESD )", href: "" },
      { name: "Electrical Execution, Compliance & Maintenance Services ( EECM )", href: "" },
      { name: "Fire & Safety Systems and Compliance Solutions ( FSSCS )", href: "" },
      { name: "Integrated Licensing & Compliance Solutions ( ILCS )", href: "" },
      { name: "Integrated Liaisoning, Approvals & Compliance Solutions ( ILACS )", href: "" },
      { name: "Piped Natural Gas (Png) Services & Regulatory Compliance ( PNGRC )", href: "" },

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
