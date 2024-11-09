import React from 'react'
import Inputbar from '../../components/dashboard/Inputbar'

export default function CompanySafety() {
  return (
    <>
       <h1 className="text-2xl font-bold">Company Safety Profile</h1>
      <div className="flex  justify-between flex-wrap -mx-3 mt-[30px]">
        <div className="w-full sm:w-8/12 mt-5 mx-auto 2xl:mt-0 lg:w-6/12 xl:w-4/12 px-3">
          <div className="px-4  pt-4 pb-9  shadow-lg rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Carrier</p>
            <form className="mt-5">
                <div className="w-12/12 ">
                  <div>
                    <label className="text-sm font-semibold ff_poppins">
                    DOT #
                    </label>
                      <div className="border w-full border-[#D3D3D3]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="text"
                          placeholder="type..."
                        />
                      </div>
                  </div>
                
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                    Carrier operation
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-[#1D1D1D]"
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
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                    Hazmat flag
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-[#1D1D1D]"
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
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Years in Business
                    </label>
                    <div className="flex items-center justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>

                  
                </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-8/12 mt-5 2xl:mt-0 mx-auto lg:w-6/12 xl:w-4/12 px-3">
          <div className="px-4  pt-4 pb-11  shadow-lg rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Safety</p>
            <form className="mt-5">
                <div className="w-12/12 ">
                  <div>
                    <label className="text-sm font-semibold ff_poppins">
                    OOS violations
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Crashes
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Injuries
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Fatalities

                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                 

                  
                </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-8/12 mt-5 2xl:mt-0 lg:w-5/12 xl:w-4/12 px-3 mx-auto">
          <div className="px-4  pt-4 pb-9 shadow-lg rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Safety</p>
            <div className="mt-5">
                    <label className="text-sm font-semibold ff_poppins">
                    Exceeds Threshold
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>Any</option>
                        <option>Any</option>
                        <option>Any</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-[#1D1D1D]"
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
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Unsafe Driving

                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Crash Indicator

                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    HOS

                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Vehicle Maintenance

                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Substances/Alcohol

                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    HazMat Compliance
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-[18px]'>
                    <label className="text-sm font-semibold ff_poppins">
                    Driver Fitness
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[159px]  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[159px]  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
          
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <Inputbar/>

      </div>
    </>
  )
}
