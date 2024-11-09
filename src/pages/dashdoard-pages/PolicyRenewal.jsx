import React from "react";
import Inputbar from "../../components/dashboard/Inputbar";

export default function PolicyRenewal() {
  return (
    <>
      <h1 className="text-2xl font-bold">Policy Renewal Leads</h1>
      <div className="flex  justify-between flex-wrap  -mx-3 mt-[30px]">
        <div className="w-full lg:w-7/12 xl:w-6/12 px-3">
          <div className="px-4  pt-4 pb-9  shadow-lg rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Carrier</p>
            <form className="mt-5">
              <div className="flex  justify-between -mx-3">
                <div className="w-6/12 px-3">
                  <div>
                    <label className="text-sm font-semibold ff_poppins">
                      Docket # (MC)
                    </label>
                    <div className="border border-[#D3D3D3] px-[10px] py-[7px] rounded mt-[6px]">
                      <input
                        className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none "
                        type="text"
                        placeholder="type..."
                      />
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                      Docket # (MC)
                    </label>
                    <div className="border border-[#D3D3D3] px-[10px] py-[7px] rounded mt-[6px]">
                      <input
                        className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none "
                        type="text"
                        placeholder="type..."
                      />
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                      Operating Authority
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
                </div>
                <div className="w-6/12 px-3">
                  <div>
                    <label className="text-sm font-semibold ff_poppins">
                      Years in Business
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[120px] px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[120px]  rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                      Has email
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

                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                      Power units
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[120px] px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[120px]  rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                      Drivers
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-[120px] px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[120px]  rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins">
                      Classification
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
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-6/12 mt-5 lg:mt-0 lg:w-5/12 xl:w-3/12 px-3">
          <div className="px-4  pt-4 pb-9 shadow-lg rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Insurance</p>
            <div className="mt-5">
              <label className="text-sm font-semibold ff_poppins">
                Required BIPD
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Insurance TYPE
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
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Renewal Date
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Insurance Carrier Group
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
          </div>
        </div>
        <div className="w-6/12 mt-5 mx-auto lg:w-5/12 xl:w-3/12 xl:mt-0 px-3">
          <div className="px-4  pt-4 pb-9 shadow-lg rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Safety</p>
            <div className="mt-5">
              <label className="text-sm font-semibold ff_poppins">
                OOS violations
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Crashes
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Injuries
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Fatalities
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Towaway
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins">
                Inspections
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-[112px] px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-[112px]  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
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
        <Inputbar />
      </div>
    </>
  );
}
