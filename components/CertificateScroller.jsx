"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import { certificateList } from "../lib/data/certificateList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function CertificateScroller() {
  const sliderRef = useRef(null);
  const slideCountRef = useRef(0);

  /* ------------------ FANCYBOX ------------------ */
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: false,
      Toolbar: { display: ["close"] },
    });

    return () => Fancybox.destroy();
  }, []);

  /* ------------------ SLIDER SETTINGS ------------------ */
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    beforeChange: () => {
      slideCountRef.current += 1;

      if (slideCountRef.current % 2 === 0) {
        const slider = sliderRef.current;

        if (!slider) return;

        slider.slickPause();

        setTimeout(() => {
          slider?.slickPlay();
        }, 5000);
      }
    },
  };

  /* ------------------ RENDER ------------------ */
  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {certificateList.map((item, index) => (
          <div key={index} className="slide-item">
            <figure>
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={item.caption}
              >
                <Image
                  src={item.src}
                  width={400}
                  height={200}
                  alt={item.caption}
                  className="certificate"
                />
              </a>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}