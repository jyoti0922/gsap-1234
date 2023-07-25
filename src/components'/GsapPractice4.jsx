import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
const cards = gsap.utils.toArray(".card");

const GsapPractice4 = () => {
  cards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: () => `top bottom-=100`,
        end: () => `top top+=40`,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
      },
      // ease: "none",
      scale: () => 1 - (cards.length - index) * 0.025,
    });

    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: "+=300%",
      pin: true,
      pinSpacing: false,
      markers: false,
      id: "pin",
      invalidateOnRefresh: true,
    });
  });

  return (
    <>
      <div className="bg-black">
        <div className="container">
          <h1 className="text-center text-white text-[40px]">Stacking Cards</h1>
          <div className="ms-[100px] cards">
            <div className="h-[200px] w-[400px] mb-[50px] bg-[white] text-[36px] card top-10 flex justify-center items-center">
              1
            </div>
            <div className="h-[200px] w-[400px] mb-[50px] bg-[white] text-[36px] card top-[45px] flex justify-center items-center ">
              2
            </div>
            <div className="h-[200px] w-[400px] mb-[50px] bg-[white] text-[36px] card top-[50px] flex justify-center items-center">
              3
            </div>
            <div className="h-[200px] w-[400px] mb-[50px] bg-[white] text-[36px] card top-[55px] flex justify-center items-center">
              4
            </div>
            <div className="h-[200px] w-[400px] mb-[50px] bg-[white] text-[36px] card top-[60px] flex justify-center items-center">
              5
            </div>
          </div>
          <div className="bg-[yellow] w-full h-[800px]"></div>
        </div>
      </div>
    </>
  );
};

export default GsapPractice4;
