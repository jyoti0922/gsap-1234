import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";

const GsapPractice1 = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".parafirst",
      {
        xPercent: -100,
        yPercent: -100,
        duration: 2,
        color: "red",
      },
      {
        xPercent: 0,
        yPercent: 0,
        duration: 2,
        color: "green",
      }
    );
  });
  useLayoutEffect(() => {
    gsap.fromTo(
      ".parasecond",
      {
        xPercent: 100,
        duration: 2,
      },
      {
        xPercent: 0,
        duration: 2,
      }
    );
  });
  useLayoutEffect(() => {
    gsap.from(".parathird", {
      xPercent: 100,
      yPercent: 100,
      duration: 2,
      color: "white",
    });
  });
  useLayoutEffect(() => {
    gsap.from(".parafour", {
      xPercent: -100,
      yPercent: -100,
      duration: 2,
      color: "white",
    });
  });
  useLayoutEffect(() => {
    gsap.to(".parafive", {
      xPercent: 105,
      yPercent: 50,
      duration: 2,
      color: "purple",
    });
  });
  useLayoutEffect(() => {
    gsap.to(".parasix", {
      xPercent: -115,
      duration: 2,
    });
  });
  return (
    <>
      <div className="bg-black py-10 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-3">
          <div className="flex justify-between gap-10">
            <p className="text-white parafirst overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              quisquam, laboriosam ad dolor similique temporibus quae. Ad
              dolorum ipsa magnam iure quod. Fugit, consequuntur facilis. Nemo
              minima sed repellendus ducimus.
            </p>
            <p className="text-white parasecond overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              quia totam ex enim esse nulla quod! Dicta, sed! Repudiandae
              impedit provident eius quae quibusdam distinctio, architecto sunt
              quam aliquam et!
            </p>
          </div>
          <div className="flex justify-between gap-10 mt-10">
            <p className="text-[yellow] parathird overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              quisquam, laboriosam ad dolor similique temporibus quae. Ad
              dolorum ipsa magnam iure quod. Fugit, consequuntur facilis. Nemo
              minima sed repellendus ducimus.
            </p>
            <p className="text-[red] parafour overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              quia totam ex enim esse nulla quod! Dicta, sed! Repudiandae
              impedit provident eius quae quibusdam distinctio, architecto sunt
              quam aliquam et!
            </p>
          </div>
          <div className="flex justify-between gap-10 mt-10">
            <p className="text-[purple] parafive overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              quisquam, laboriosam ad dolor similique temporibus quae. Ad
              dolorum ipsa magnam iure quod. Fugit, consequuntur facilis. Nemo
              minima sed repellendus ducimus.
            </p>
            <p className="text-white parasix overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              quia totam ex enim esse nulla quod! Dicta, sed! Repudiandae
              impedit provident eius quae quibusdam distinctio, architecto sunt
              quam aliquam et!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GsapPractice1;
