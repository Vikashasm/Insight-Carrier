

import { useEffect, useState } from "react";
import CommonBtn from "../common/CommonBtn";

const AreYouReady = () => {
  const [animatedText, setAnimatedText] = useState("");
  const texts = [
    "to sell more trucking insurance policies?",
    "to advance your business leveraging superior carrier safety data?",
    "to elevate client satisfaction?",
  ]; 

  useEffect(() => {
    let isMounted = true; 
    let currentIndex = 0; 

    const animateText = () => {
      let charIndex = 0; 
      let currentText = "";

      const interval = setInterval(() => {
        if (charIndex < texts[currentIndex].length) {
          currentText += texts[currentIndex][charIndex]; 
          setAnimatedText(currentText); 
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (isMounted) {
              currentIndex = (currentIndex + 1) % texts.length;
              animateText();
            }
          }, 1000); 
        }
      }, 100); 
    };

    animateText(); 

    return () => {
      isMounted = false; 
    };
  }, []);

  return (
    <section className="my-6 md:my-12 py-12 sm:py-14 lg:py-20 bg-[#611D69]">
      <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
        <h2 className="font-semibold ff_poppins text-2xl md:text-3xl lg:text-4xl text-white text-center">
          Are you ready
          <span className="block pt-3">{animatedText}</span>
        </h2>
        <div className="flex mt-6 lg:mt-12 items-center justify-center gap-1.5 sm:gap-2.5">
          <CommonBtn
            path="/"
            btnName="Subscribe now"
            btnStyling="font-bold text-sm sm:text-[15px] text-[#611D69] flex !py-3.5 sm:!px-10 gap-6 items-center bg-[#fff] !uppercase"
          />
          <CommonBtn
            path="/"
            btnName="learn more"
            btnStyling="font-bold text-sm sm:text-[15px] text-[#fff] !py-3.5 sm:!px-10 flex gap-6 items-center border border-[#fff] !uppercase  hover:text-[#611D69] hover:bg-white duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AreYouReady;
