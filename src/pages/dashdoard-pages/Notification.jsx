import React from 'react'
import { DropdownIcon } from '../../components/common/Icon'

export default function Notification() {
   
  return (
    <div>
       <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 mt-[30px]">
        <thead className="bg-[#00ADEF0F] border-b border-[#00ADEF]">
            <tr>
              <th className="px-[10px] py-[9px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                Notification
              </th>
              <th className="px-[10px] py-[9px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                Delivery
              </th>
              <th className="px-[106px] py-[9px] text-end text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                Filter
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#E9F0F2]">
          <tr>
              <td className="px-[10px] flex items-center gap-[10px] py-[9px]  whitespace-nowrap ">
              <input type="checkbox" className="w-[20px] h-[20px]" />
                <div>
                    <p className='text-base ff_salesforce_ragular text-[#1D1D1D]'>
                    Daily New Venture Leads
                    </p>
                </div>
              </td>
              <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
               
                <div className="border w-[200px]  border-[#D3D3D3] rounded py-[7px]  relative ">
                  <select className="outline-none  w-full px-[10px] text-[#1D1D1D] ff_salesforce_ragular appearance-none">
                    <option>Early delivery</option>
                    <option>Early delivery</option>
                    <option>Early delivery</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon/>
                  </div>
                </div>
              
                    <p className='text-sm ff_salesforce_ragular mt-1'>
                    <span className='text-base font-bold'>Standard Delivery -</span>
                    Leads with Company Representative information. Email sent at 1:15 PM EST.
                    </p>
                    <p className='text-sm ff_salesforce_ragular mt-1'>
                    <span className='text-base font-bold'>Early Delivery -</span>Leads without Company Representative information. Email sent at 6:00 AM EST.
                    </p>
               
              </td>
              <td className="px-[10px] flex justify-end me-5 text-end ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D] ">
              <div className="border  w-[110px] mb-[56px] border-[#D3D3D3] rounded py-[7px]  relative  ">
                  <select className="outline-none w-full px-[10px] text-[#1D1D1D] ff_salesforce_ragular appearance-none">
                    <option>None</option>
                    <option>None</option>
                    <option>None</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon/>
                  </div>
                </div>
              </td>
            </tr>
          <tr>
              <td className="px-[10px] flex items-center gap-[10px] py-[20px]  whitespace-nowrap ">
              <input type="checkbox" className="w-[20px] h-[20px]" />
                <div>
                    <p className='text-base ff_salesforce_ragular text-[#1D1D1D]'>
                    Daily New Venture Leads
                    </p>
                </div>
              </td>
              <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
               
              
              
                   
                    <p className='text-sm ff_salesforce_ragular mt-1'>
                    Email delivery at 7:00 AM EST.
                    </p>
               
              </td>
              <td className="px-[10px] flex justify-end me-5 text-end ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D] ">
              <div className="border w-[110px] border-[#D3D3D3] rounded py-[7px]  relative  ">
                  <select className="outline-none w-full px-[10px] text-[#1D1D1D] ff_salesforce_ragular appearance-none">
                    <option>None</option>
                    <option>None</option>
                    <option>None</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon/>
                  </div>
                </div>
              </td>
            </tr>
          <tr>
              <td className="px-[10px] flex items-center gap-[10px] py-[20px]  whitespace-nowrap ">
              <input type="checkbox" className="w-[20px] h-[20px]" />
                <div>
                    <p className='text-base ff_salesforce_ragular text-[#1D1D1D]'>
                    Daily New Venture Leads
                    </p>
                </div>
              </td>
              <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
               
              
              
                   
                    <p className='text-sm ff_salesforce_ragular mt-1'>
                    Email delivery at 7:00 AM EST.
                    </p>
               
              </td>
              <td className="px-[10px] flex justify-end me-5 text-end ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D] ">
              <div className="border w-[110px] border-[#D3D3D3] rounded py-[7px]  relative  ">
                  <select className="outline-none w-full px-[10px] text-[#1D1D1D] ff_salesforce_ragular appearance-none">
                    <option>None</option>
                    <option>None</option>
                    <option>None</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon/>
                  </div>
                </div>
              </td>
            </tr>
          <tr>
              <td className="px-[10px] flex items-center gap-[10px] py-[20px]  whitespace-nowrap ">
              <input type="checkbox" className="w-[20px] h-[20px]" />
                <div>
                    <p className='text-base ff_salesforce_ragular text-[#1D1D1D]'>
                    Daily New Venture Leads
                    </p>
                </div>
              </td>
              <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
               
              
              
                   
                    <p className='text-sm ff_salesforce_ragular mt-1'>
                    Email delivery at 7:00 AM EST.
                    </p>
               
              </td>
              <td className="px-[10px] flex justify-end me-5  text-end ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D] ">
              <div className="border w-[110px] border-[#D3D3D3] rounded py-[7px]  relative  ">
                  <select className="outline-none w-full px-[10px] text-[#1D1D1D] ff_salesforce_ragular appearance-none">
                    <option>None</option>
                    <option>None</option>
                    <option>None</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon/>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
        <button className='text-sm font-bold py-[13px] px-[33px] bg-[#611D69] rounded text-white mt-[30px]'>
        SAVE
        </button>
    </div>
  )
}
