"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
// import Image from "next/image";
// import rightsideBanner from "@/public/complaince.png"

export default function HeroSection() {
 const wordsRef = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      wordsRef.current,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.25,
      }
    );
  }, [pathname]); // run animation on route change

    return (
        <section className="hero-section">
            <div className="hero-grid container">
                {/* LEFT CONTENT */}
                <div className="hero-content pt-4">
                    <h1 className="hero-title">
                        {["Efficient, ", "Reliable, ", "Hassle-Free Solutions"].map((word, i) => (
                            <span className="mask" key={i}>
                                <span
                                ref={(el) => (wordsRef.current[i] = el)}
                                className="reveal-text"
                                >
                                {word}
                                </span>
                            </span>
                        ))}
                    </h1>
                    <div className="global-serach-wrapper">
                        <div className="search-box">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="hero-buttons">

                    </div>
                    <div className="hero-desc">
                        <h3> Streameline Your License Acquisitions</h3>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="hero-image" data-aos="fade-left">
                    {/* <Image
                        src={rightsideBanner}
                        width={600}
                        height={500}
                        alt="Business Services"
                        priority
                    /> */}
                </div>
            </div>
        </section>
    );
}