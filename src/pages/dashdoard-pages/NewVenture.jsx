import React from 'react'
import Inputbar from '../../components/dashboard/Inputbar'

export default function NewVenture() {
  return (
    <>
    <h1 className="text-2xl font-bold">New Venture Leads</h1>
      <div className="flex  justify-between flex-wrap -mx-3 mt-[30px] ">
        <div className="w-full sm:w-10/12 mt-5 mx-auto 2xl:mt-0 lg:w-6/12 xl:w-4/12 px-3 ">
          <div className="px-4  pt-4 pb-11  shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Carrier</p>
            <form className="mt-5">
                <div className="w-12/12 ">
                  <div>
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Years in Business
                    </label>
                    <div className="flex items-center gap-2 2xl:justify-between">
                      <div className="border border-[#D3D3D3] w-full  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Operating authority

                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Carrier operation
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>

                  
                </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-10/12 mt-5 2xl:mt-0 mx-auto lg:w-6/12 xl:w-4/12 px-3">
          <div className="px-4  pt-4 pb-11  shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Insurance</p>
            <form className="mt-5">
                <div className="w-12/12 ">
                  <div>
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Required BIPD
                    </label>
                    <div className="flex items-center gap-2 2xl:justify-between">
                      <div className="border border-[#D3D3D3] w-full  px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                      <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Has BIPD Insurance

                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Has Cargo Insurance
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Has Bond Insurance
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>

                  
                </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-10/12 mt-5 2xl:mt-0 lg:w-6/12 xl:w-4/12 px-3 mx-auto">
          <div className="px-4  pt-4 pb-11 shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Authority</p>
            <div className="mt-5">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Broker Authority Status

                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>Any</option>
                        <option>Any</option>
                        <option>Any</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    Common Authority Status
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>Any</option>
                        <option>Any</option>
                        <option>Any</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                    New DOTs Only
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon/>
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
