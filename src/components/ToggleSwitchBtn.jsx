import { useState } from 'react';

function ToggleSwitchBtn() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <div className="flex bg-gray-200 rounded-full">
        <button
          onClick={() => setIsMonthly(true)}
          className={`${
            isMonthly ? 'bg-[#611D69] text-white' : 'text-[#611D69]'
          } px-10 py-4 rounded-full font-bold text-xl lg:text-2xl outline-none duration-300`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`${
            !isMonthly ? 'bg-[#611D69] text-white' : 'text-[#611D69]'
          } px-10 py-4 rounded-full font-bold text-xl lg:text-2xl outline-none duration-300`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}

export default ToggleSwitchBtn;
