import { useEffect, useState } from "react";
import CommonBtn from "../common/CommonBtn";

const AreYouReady = () => {
  const [animateSpanFirst, setAnimateSpanFirst] = useState("");
  const [animateSpanSecond, setAnimateSpanSecond] = useState("");
  const [animateSpanThird, setAnimateSpanThird] = useState("");

  const spanText1 = "to sell more trucking insurance policies?";
  const spanText2 =
    " to advance your business leveraging superior carrier safety data? ";
  const spanText3 = "to elevate client satisfaction?";

  useEffect(() => {
    let isMounted = true;

    const animateTexts = () => {
      let spanIndex1 = 0;
      let spanIndex2 = 0;
      let spanIndex3 = 0;

      let currentSpanText1 = "";
      let currentSpanText2 = "";
      let currentSpanText3 = "";

      // Animate the first span text
      const span1Interval = setInterval(() => {
        if (spanIndex1 < spanText1.length) {
          currentSpanText1 += spanText1[spanIndex1];
          setAnimateSpanFirst(currentSpanText1); // Update the first span text
          spanIndex1++;
        } else {
          clearInterval(span1Interval); // Stop after the first span finishes

          // Animate the second span text
          const span2Interval = setInterval(() => {
            if (spanIndex2 < spanText2.length) {
              currentSpanText2 += spanText2[spanIndex2];
              setAnimateSpanSecond(currentSpanText2); // Update the second span text
              spanIndex2++;
            } else {
              clearInterval(span2Interval); // Stop after the second span finishes

              // Animate the third span text
              const span3Interval = setInterval(() => {
                if (spanIndex3 < spanText3.length) {
                  currentSpanText3 += spanText3[spanIndex3];
                  setAnimateSpanThird(currentSpanText3); // Update the third span text
                  spanIndex3++;
                } else {
                  clearInterval(span3Interval); // Stop after the third span finishes

                  // Reset and restart the animation
                  setTimeout(() => {
                    if (isMounted) {
                      setAnimateSpanFirst("");
                      setAnimateSpanSecond("");
                      setAnimateSpanThird("");
                      animateTexts(); // Restart the animation after delay
                    }
                  }, 1000); // Delay before restarting
                }
              }, 100); // Speed of third span animation
            }
          }, 100); // Speed of second span animation
        }
      }, 100); // Speed of first span animation
    };

    animateTexts();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <section className="my-6 md:my-12 py-12 sm:py-14 lg:py-20 bg-[#611D69]">
      <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
        <h2 className="font-semibold ff_poppins text-2xl md:text-3xl lg:text-4xl text-white text-center">
          Are you ready
          
        </h2>
        <p className="font-semibold ff_poppins text-2xl md:text-3xl lg:text-4xl text-white text-center"><span className="block pt-3">{animateSpanFirst}</span>
          <span className="block pt-3">{animateSpanSecond}</span>
          <span className="block pt-3">{animateSpanThird}</span></p>
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
