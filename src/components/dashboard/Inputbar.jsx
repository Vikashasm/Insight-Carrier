import React from 'react'

export default function Inputbar() {
  return (
    <>
        <div className="flex items-center justify-between flex-wrap ">
        <div className="flex items-center gap-[10px] mt-4">
          <button className="text-[#611D69] border border-[#611D69] hover:bg-[#611D69] hover:text-white duration-300 px-4 py-[9px] rounded">
            Download
          </button>
          <p className="text-base text-[#1D1D1D]">records:</p>
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <div className="border border-[#D3D3D3] rounded px-4 py-[9px] h-[44px] w-[155px]"></div>
          <div className="border border-[#D3D3D3] rounded px-[10px] py-[9px] w-[155px] relative">
            <select
              id="records"
              className="outline-none w-full pr-8 font-normal text-[#1D1D1D] appearance-none"
            >
              <option>Save filter 1</option>
              <option>Save filter 2</option>
              <option>Save filter 3</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <button className="bg-[#611D69] text-white px-4 py-[9px] rounded">
            Search
          </button>
        </div>
      </div>
    </>
  )
}
