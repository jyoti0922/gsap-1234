import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import image from "../assets/images/png/gsap.png";

const GsapPractice = () => {
  useLayoutEffect(() => {
    gsap.from(".first_para", {
      xPercent: -100,
      duration: 1,
      color: "red",
    });
    gsap.from(".sub_para", {
      xPercent: -300,
      duration: 2,
      color: "red",
    });
    gsap.from(".sub_para2", {
      xPercent: -600,
      duration: 3,
    });
    gsap.from(".btn_animation", {
      opacity: 0,
      duration: 4,
      yPercent: -800,
    });
    gsap.from(".image", {
      yPercent: -150,
      duration: 2,
      color: "green",
    });
  });
  return (
    <>
      <div className="bg-[black] py-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-3">
          <div className="flex items-center gap-10">
            <div className="w-1/2">
              <div className="">
                <h2 className="text-white text-2xl ff_poppins font-extrabold first_para">
                  what are cheerfriends ?
                </h2>
                <p className="text-white text-sm ff_poppins font-normal mt-3 sub_para">
                  CheerFriends is a collection of 9,000 unique digitally
                  mastered NFT's stunting and tumbling on the Ethereum
                  Blockchain as ERC-721.
                </p>
                <p className="text-white text-sm ff_poppins font-normal mt-3 sub_para2">
                  CheerFriends is a collection of 9,000 unique digitally
                  mastered NFT's stunting and tumbling on the Ethereum
                  Blockchain as ERC-721.
                </p>
                <button className="bg-[yellow] text-white text-sm ff_poppins font-extrabold px-3 py-1 rounded-[5px] mt-5 btn_animation">
                  Get Start
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="image">
                <img
                  className="max-w-[400px] h-[300px]  w-full"
                  src={image}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GsapPractice;
