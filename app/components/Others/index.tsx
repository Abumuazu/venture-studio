"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "AFRICA DIGITAL INNOVATION SUMMIT",
    subheading:
      "Africa Digital Innovation Summit is Africa's most collaborative community-driven event for digital innovators, spotlighting the importance of our Africa continental free trade zone and the role of digital transformation in promoting it.",
  },
  {
    heading: "ACTIVATION EVENTS AND MIXERS",
    subheading:
      "We host mixers and activation events on behalf of our partners network to foster collaborations, networking and strategic partnerships as well as user acquisition and in some cases new market entry.",
  },
];

const Why = () => {
  const SliderRef = React.createRef<Slider>();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const images = [
    "/assets/why/slide1.jpeg",
    "/assets/why/slide2.jpeg",
    "/assets/why/slide3.jpeg",
    "/assets/why/slide4.jpeg",
    "/assets/why/slide5.jpeg",
    "/assets/why/slide6.jpeg",
    "/assets/why/slide7.jpeg",
    "/assets/why/slide8.jpeg",
  ];

  return (
    <div id="about" className="">
      <div className="mx-auto max-w-7xl px-4 sm:py-20 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap--5 ">
          {/* COLUMN-1 */}
          <div className="max-w-full overflow-hidden">
            <Slider ref={SliderRef} {...settings}>
              {images.map((src, i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src={src}
                    alt={`iPad-image-${i}`}
                    width={500}
                    height={900}
                    style={{ borderRadius: "0.5rem", maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* COLUMN-2 */}
          <div>
            <div>
              {whydata.map((items, i) => (
                <div className="flex " key={i}>
                  <div className="rounded-full h-10 w-[30%] flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
