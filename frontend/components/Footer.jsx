import { footerLinks, informationLinks } from '../static/menus.jsx'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-2 py-2 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap justify-between gap-10">

        <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
          <h4 className="text-yellow-400 font-semibold mb-4 text-base">Office Address</h4>
          <p className="leading-relaxed">
            Office No-1 &amp; 2, Ground Floor,<br />
            New Apollo CHS, Next to Farmer Cafe &amp;<br />
            Blue Tokai Coffee, 14th Road, Khar West,<br />
            Mumbai-400052.<br />
            Landmark- Domino&apos;s Pizza,14th Road.
          </p>
        </div>

        <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
          <h4 className="text-yellow-400 font-semibold mb-4 text-base">Contact Information</h4>
          <p className="mb-3">
            <strong className="block mb-1">Phone</strong>
            (+91) 91364 43852/(+91) 9321709258
          </p>
          <p className="mb-3">
            <strong className="block mb-1">Email</strong>
            contact@liaisonbank.com
          </p>
          <p>Mon - Sat : 8:00am to 5pm</p>
        </div>

        <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
          <h4 className="text-yellow-400 font-semibold mb-4 text-base">Important Links</h4>
          <ul>
              {footerLinks.map(link => (
              <li key={link.name} className="py-2">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <li className="font-bold py-2">
              <a href="/article" className="cursor-pointer hover:underline">Article</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
          <h4 className="text-yellow-400 font-semibold mb-4 text-base">Information</h4>
          <ul>
              {informationLinks.map(link => (
              <li key={link.name} className="py-2">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            {/* {[
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact Us", href: "/contact-us-liaison-bank" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms and Conditions", href: "/terms-conditions" }
            ].map(({ label, href }) => (
              <li key={label} className="border-b border-gray-700 py-2">
                <a href={href} className="cursor-pointer hover:underline">{label}</a>
              </li>
            ))} */}
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 py-4 text-center text-gray-500 text-xs">
        © Copyright 2026 Liaison Bank
      </div>
    </footer>
  );
}
