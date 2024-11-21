import { useEffect, useState } from "react";
import CommonBtn from "../common/CommonBtn";

const AreYouReady = () => {
  const [animatedTextReady, setAnimatedTextReady] = useState("");
  const [animatedSpanText, setAnimatedSpanText] = useState("");

  const readyText = "re you ready";
  const spanText = "to sell more trucking insurance policies?";

  
  useEffect(() => {
    let isMounted = true; 
    const animateTexts = () => {
      let readyIndex = 0;
      let spanIndex = 0;
      let currentReadyText = "";
      let currentSpanText = "";

      // Animate "Are you ready"
      const readyInterval = setInterval(() => {
        if (readyIndex < readyText.length) {
          currentReadyText += readyText[readyIndex];
          if (isMounted) setAnimatedTextReady(currentReadyText);
          readyIndex++;
        } else {
          clearInterval(readyInterval);

          // Animate span text after "Are you ready"
          const spanInterval = setInterval(() => {
            if (spanIndex < spanText.length) {
              currentSpanText += spanText[spanIndex];
              if (isMounted) setAnimatedSpanText(currentSpanText);
              spanIndex++;
            } else {
              clearInterval(spanInterval);

              // Reset and repeat animation
              setTimeout(() => {
                if (isMounted) {
                  setAnimatedTextReady("");
                  setAnimatedSpanText("");
                  animateTexts(); // Restart animation
                }
              }, 1000); // Delay before restarting
            }
          }, 100); // Adjust delay for span text animation
        }
      }, 100); // Adjust delay for "Are you ready" animation
    };

    animateTexts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="my-6 md:my-12 py-12 sm:py-14 lg:py-20 bg-[#611D69]">
      <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
        <h2 className="font-semibold ff_poppins text-2xl md:text-3xl lg:text-4xl text-white h-[108px] min-[510px]:h-[84px] text-center">A{animatedTextReady}
        <span className="block pt-3">{animatedSpanText}</span></h2>
       <div className="flex mt-6 lg:mt-12 items-center justify-center gap-1.5 sm:gap-2.5 ">
          <CommonBtn
            path="/"
            btnName="Subscribe now "
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
