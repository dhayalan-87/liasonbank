"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { importantLinks } from "../static/menus.jsx";
import logoScrolled from "@/assets/images/logo.png";

import NewLauncb from "@/components/NewLaunch";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Footer() {
  useEffect(() => {
    let ticking = false;
    const footer = document.querySelector("footer");

    if (!footer) return;

    const updateFooter = () => {
      // ❌ Disable footer reveal below 1023px
      if (window.innerWidth < 1024) {
        footer.style.marginBottom = "0px";
        ticking = false;
        return;
      }

      const scrolled = window.scrollY;
      footer.style.marginBottom = `-${Math.min(scrolled / 5, 600)}px`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateFooter);
        ticking = true;
      }
    };

    const onResize = () => {
      if (window.innerWidth < 1024) {
        footer.style.marginBottom = "0px";
      }
    };

    // Initial check
    onResize();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <footer className="text-white px-2 py-2 font-sans text-md">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap items-center justify-between gap-10">
          
          {/* Logo & About */}
          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <Image
              src={logoScrolled}
              width={200}
              height={200}
              quality={100}
              alt="Liaison Bank"
              loading="lazy"
            />
            <p className="mt-4 leading-relaxed">
              Liaison Bank, established in 2007 and headquartered in Mumbai, is a
              specialized consultancy firm providing end-to-end licensing,
              regulatory compliance, and project liaisoning services.
            </p>
          </div>

          {/* Important Links */}
          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">
              Important Links
            </h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">
              Quick Contacts
            </h4>

            <p className="mb-3">
              Plot No. 466, New Apollo CHS, 14th Road, near Blue Tokai Coffee,
              Khar West, Mumbai – 400052
            </p>

            <div className="mb-3 flex items-center gap-2">
              <Image src="/phone.png" width={25} height={25} alt="Call" />
              <a href="tel:+919136443852">+91 91364 43852</a>
              <span>/</span>
              <a href="tel:+919321709258">932170 9258</a>
            </div>

            <div className="mb-3 flex items-center gap-2">
              <Image src="/mail.png" width={25} height={25} alt="Email" />
              <a href="mailto:ceo.desk@liaisonbank.com" target="_blank">
                ceo.desk@liaisonbank.com
              </a>
            </div>

            <div className="mb-3 flex items-center gap-2">
              <Image src="/timer.png" width={35} height={35} alt="Office Time" />
              <span>Mon – Sat : 8:00am to 5:00pm</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-gray-800 py-4 text-center text-md mb-5">
          © 2026 Liaison Bank | All Rights Reserved
        </div>
      </footer>

      {/* Utilities */}
      <ScrollToTopButton />

      {/* Marquee */}
      <div className="marquee-branch flex items-center bg-white justify-between">
        <div className="comingsoontitle pl-4 w-1/2">
          <p>Our new branch is opening soon</p>
          <div className="arrow arrow-right"></div>
        </div>
        <div className="location">
          <NewLauncb />
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky-icon">
        <a href="tel:#" className="callnow">
          <i className="fi fi-sr-phone-flip"></i> Call Now
        </a>
        <a href="#" target="_blank" className="whatsapp">
          <i className="fi fi-brands-whatsapp"></i> Whatsapp
        </a>
        <a className="enquire open-form">
          <i className="fi fi-sr-attribution-pencil"></i> Enquire Now
        </a>
      </div>
    </>
  );
}