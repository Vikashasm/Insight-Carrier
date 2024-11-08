/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const CommonBtn = ({ btnName, btnStyling,path }) => {
  return (
    <div>
      <Link to={`${path}`}
        className={` font-bold capitalize flex justify-center items-center rounded py-[6px] sm:py-3 px-3 lg:px-4 duration-300  ${btnStyling}`}
      >
        {btnName}
      </Link>
    </div>
  );
};

export default CommonBtn;
