
// import CommonBtn from "./common/CommonBtn";
// import { SliderArrowIcon } from "./common/Icon";
// import { useRef } from "react";
// import img1 from "../assets/images/png/homapage-img/hero-slider-img1.png";
// import bgGradientImg from "../assets/images/png/homapage-img/page-bg-gradient.png";
// import Slider from "react-slick";

// const Hero = () => {
//   const sliderArrow = useRef();
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           dots: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="relative overflow-hidden pb-6 md:pb-12">
//       <img className="absolute top-[60%] z-0 w-full" src={bgGradientImg} alt="gradient-img" />
//       <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
//         <h1 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#611D69] text-center">
//           Insight. <span className="text-[#00ADEF]">Leads.</span> Growth.
//         </h1>
//         <div className="flex justify-center mt-4 lg:mt-6 items-center gap-1.5 sm:gap-2.5 ">
//           <CommonBtn
//             path="/"
//             btnName="start now"
//             btnStyling="font-bold text-sm sm:text-[15px] text-white flex !py-3.5 sm:!px-10 gap-6 items-center bg-[#611D69] !uppercase"
//           />

//           <CommonBtn
//             path="/"
//             btnName="subscribe"
//             btnStyling="font-bold text-sm sm:text-[15px] text-[#611D69] !py-3.5 sm:!px-10 flex gap-6 items-center border border-[#611D69] !uppercase  hover:text-white hover:bg-[#611D69] duration-300"
//           />
//         </div>
//         <p className=" ff_salesforce_ragular font-normal text-base md:text-lg text-[#1D1D1D] mt-5 text-center max-w-[750px] mx-auto ">
//           Insight Carrier is your reliable partner for high-quality trucking
//           insurance leads and carrier safety reports, delivered daily.
//         </p>

//         <div className="w-full sm:w-8/12 mx-auto mt-6 lg:mt-20 relative">
//           <span
//             onClick={() => sliderArrow.current.slickPrev()}
//             className="absolute top-1/2 -translate-y-1/2 -left-10 hidden sm:block"
//           >
//             <SliderArrowIcon />
//           </span>
//           <span
//             onClick={() => sliderArrow.current.slickNext()}
//             className="absolute top-1/2 -translate-y-1/2 -right-10 hidden sm:block -scale-110"
//           >
//             <SliderArrowIcon />
//           </span>
//           <Slider ref={sliderArrow} {...settings}>
//             <div>
//               <img className="w-full px-2" src={img1} alt="slider-info" />
//             </div>
//             <div>
//               <img className="w-full px-2" src={img1} alt="slider-info" />
//             </div>
//           </Slider>
//         </div>
//         <p className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-[#1D1D1D] mt-10 lg:mt-[60px] text-center">By choosing Insight Carrier, you gain access to a robust, data-driven platform tailored to meet the demands of today’s trucking insurance market. Our daily updated leads and comprehensive safety reports give you the competitive edge needed to identify and connect with high-potential clients, streamline your underwriting process, and manage risk effectively. Whether you’re expanding your client base or optimizing your services, Insight Carrier equips you with the insights and tools to grow confidently in a rapidly evolving industry.</p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
