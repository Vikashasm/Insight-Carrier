import React from 'react'

function MainPage() {
  return (
    <>
    <h1 className='text-2xl font-bold'>Dashboard</h1>
    <div className="p-4">
      {/* Table Container */}
      <div className=" overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#00ADEF0F]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                USER NAME
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                SEARCHED ITEM
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                DATE
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dianne Russell</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Insurance Carrier Group</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11/5/2024</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dianne Russell</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Renewal</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11/5/2024</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Cooper</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Operating Authority</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11/4/2024</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Darlene Robertson</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Insurance</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11/3/2024</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Cooper</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New Venture Leads</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11/1/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center justify-between mt-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Download</button>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <label htmlFor="records" className="mr-2 text-gray-600">Records:</label>
            <select
              id="records"
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>

          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-1"
            placeholder="Save filter"
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded">Search</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainPage
