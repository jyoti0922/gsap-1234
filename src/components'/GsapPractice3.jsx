import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
const GsapPractice3 = () => {
  const box1 = useRef();
  const box2 = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".orange", {
      scrollTrigger: {
        trigger: ".orange",
        toggleActions: "restart pause reverse pause ",
        start: "top top",
        end: "+=100px",
        pin: true,
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".purple", {
      scrollTrigger: {
        trigger: ".purple",
        toggleActions: "restart pause reverse pause ",
        start: "top top",
        end: "+=400px",
        pin: true,
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".green", {
      scrollTrigger: {
        trigger: ".green",
        toggleActions: "restart pause reverse pause ",
        start: "top top",
        end: "+=400px",
        pin: true,
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".blue", {
      scrollTrigger: {
        trigger: ".blue",
        toggleActions: "restart pause reverse pause ",
        start: "top top",
        end: "+=400px",
        pin: true,
        scrub: true,
        markers: false,
      },
    });
    gsap.from(box1.current, {
      x: -300,
      opacity: 0,
      duration: 2,
      overflow: "hidden",
      scrollTrigger: {
        trigger: box1.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });
    gsap.from(box2.current, {
      x: 300,
      opacity: 0,
      duration: 2,
      overflow: "hidden",
      scrollTrigger: {
        trigger: box2.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });
  });
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[1240px] mx-auto px-3">
          <div className="w-full orange h-[400px] bg-[#be9446] flex justify-between px-10 items-center">
            <div ref={box1} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
                voluptatem nobis autem temporibus quibusdam reprehenderit non.
                Ad qui dolore ea ducimus!
              </p>
            </div>
            <div ref={box2} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Hiii everyone my name is jyoti from hisar haryana. currently i
                am work from radial code company and simultaneously my study in
                MCA from GJU Science and Technology university .
              </p>
            </div>
          </div>
          <div className="w-full purple h-[400px] bg-[purple] flex justify-between px-10 items-center">
            <div ref={box1} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
                voluptatem nobis autem temporibus quibusdam reprehenderit non.
                Ad qui dolore ea ducimus!
              </p>
            </div>
            <div ref={box2} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Hiii everyone my name is jyoti from hisar haryana Hic, placeat
                ex dignissimos voluptatem nobis autem temporibus quibusdam
                reprehenderit non. Ad qui dolore ea ducimus!
              </p>
            </div>
          </div>
          <div className="w-full green h-[400px] bg-[green] flex justify-between px-10 items-center">
            <div ref={box1} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
                voluptatem nobis autem temporibus quibusdam reprehenderit non.
                Ad qui dolore ea ducimus!
              </p>
            </div>
            <div ref={box2} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Hiii everyone my name is jyoti from hisar haryana Hic, placeat
                ex dignissimos voluptatem nobis autem temporibus quibusdam
                reprehenderit non. Ad qui dolore ea ducimus!
              </p>
            </div>
          </div>
          <div className="w-full blue h-[400px] bg-[blue] flex justify-between px-10 items-center">
            <div ref={box1} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
                voluptatem nobis autem temporibus quibusdam reprehenderit non.
                Ad qui dolore ea ducimus!
              </p>
            </div>
            <div ref={box2} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Hiii everyone my name is jyoti from hisar haryana Hic, placeat
                ex dignissimos voluptatem nobis autem temporibus quibusdam
                reprehenderit non. Ad qui dolore ea ducimus!
              </p>
            </div>
          </div>
          <div className="w-full red h-[400px] bg-[red] flex justify-between px-10 items-center">
            <div ref={box1} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                nemo! Ea enim recusandae delectus! Hic, placeat ex dignissimos
                voluptatem nobis autem temporibus quibusdam reprehenderit non.
                Ad qui dolore ea ducimus!
              </p>
            </div>
            <div ref={box2} className="overflow-hidden">
              <p className=" text-[white] max-w-[500px] overflow-hidden">
                Hiii everyone my name is jyoti from hisar haryana Hic, placeat
                ex dignissimos voluptatem nobis autem temporibus quibusdam
                reprehenderit non. Ad qui dolore ea ducimus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GsapPractice3;
