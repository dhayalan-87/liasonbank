"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import { certificateList } from "../static/certificateList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function CertificateScroller() {
  const sliderRef = useRef(null);
  const slideCountRef = useRef(0);

  useEffect(() => {
    Fancybox.bind('.slick-slide:not(.slick-cloned) [data-fancybox="gallery"]', {
      Thumbs: false,
      Toolbar: { display: ["close"] },
    });

    return () => Fancybox.destroy();
  }, []);

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
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    beforeChange: () => {
      slideCountRef.current += 1;

      // ⏸ Pause after every 2 auto scrolls
      if (slideCountRef.current % 2 === 0) {
        sliderRef.current.slickPause();

        setTimeout(() => {
          sliderRef.current.slickPlay();
        }, 5000); // ⏱ 5 seconds pause
      }
    },
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {certificateList.map((item, index) => (
          <div key={index} className="slide-item">
            <figure>
              <a href={item.src} data-fancybox="gallery" data-caption={item.caption}>
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

export default CertificateScroller;