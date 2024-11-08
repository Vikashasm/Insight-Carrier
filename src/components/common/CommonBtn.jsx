/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const CommonBtn = ({ btnName, btnStyling,path }) => {
  return (
    <div>
      <Link href={`${path}`}
        className={` font-normal text-sm md:text-base capitalize flex justify-center items-center lg:text-lg rounded-[50px] py-[6px] sm:py-2 px-3 sm:px-4 duration-300  ${btnStyling}`}
      >
        {btnName}
      </Link>
    </div>
  );
};

export default CommonBtn;
