import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const GsapPractice2 = () => {
  const element1Ref = useRef();
  const element2Ref = useRef();
  const element3Ref = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(element1Ref.current, {
      x: 200,
      opacity: 0,
      duration: 3,
      overflow: "hidden",
      scrollTrigger: {
        trigger: element1Ref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });
  });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(element2Ref.current, {
      x: -200,
      opacity: 0,
      duration: 3,
      overflow: "hidden",
      scrollTrigger: {
        trigger: element2Ref.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
        markers: false,
      },
    });
  });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(element3Ref.current, {
      y: -180,
      opacity: 0,
      duration: 3,
      overflow: "hidden",
      scrollTrigger: {
        trigger: element3Ref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });
  });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".boxeliminate", {
      xPercent: 1000,
      rotation: 360,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".boxeliminate",
        toggleActions: "restart pause reverse pause ",
        start: "top center",
        end: "top 100px",
        pin: true,
        scrub: true,
        markers: false,
      },
    });
  });

  return (
    <>
      <div className="bg-black  py-36 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-3">
          <div ref={element1Ref} className="overflow-hidden">
            <p className="w-[300px] text-[gray] mx-auto border border-solid border-white p-4 bg-white rounded-[8px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
              voluptatem nobis autem temporibus quibusdam reprehenderit non. Ad
              qui dolore ea ducimus!
            </p>
          </div>
          <div ref={element2Ref} className="overflow-hidden mt-10">
            <p className="w-[300px] text-[gray] mx-auto border border-solid border-[red] p-4 bg-[red] rounded-[8px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
              voluptatem nobis autem temporibus quibusdam reprehenderit non. Ad
              qui dolore ea ducimus!
            </p>
          </div>
          <div ref={element3Ref} className="overflow-hidden mt-10 mb-5">
            <p className="w-[300px] text-[gray] mx-auto border border-solid border-white p-4 bg-white rounded-[8px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
              voluptatem nobis autem temporibus quibusdam reprehenderit non. Ad
              qui dolore ea ducimus!
            </p>
          </div>
          <div className="w-[100px] h-[100px] bg-[yellow] boxeliminate overflow-hidden "></div>
        </div>
      </div>
    </>
  );
};

export default GsapPractice2;
