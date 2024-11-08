import React from "react";

function MainPage() {
  const data = [
    {
      userName: "Dianne Russell",
      itemSearched: "Insurance Carrier Group",
      date: "11/5/2024",
    },
    { userName: "Dianne Russell", itemSearched: "Renewal", date: "11/5/2024" },
    {
      userName: "Jane Cooper",
      itemSearched: "Operating Authority",
      date: "11/4/2024",
    },
    {
      userName: "Darlene Robertson",
      itemSearched: "Insurance",
      date: "11/3/2024",
    },
    {
      userName: "Jane Cooper",
      itemSearched: "New Venture Leads",
      date: "11/1/2024",
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        {/* Table Container */}
        <div className="border-top border-gray-300  overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  USER NAME
                </th>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  SEARCHED ITEM
                </th>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  DATE
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9F0F2]">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-[10px] py-[9px] text-base whitespace-nowrap  text-[#1D1D1D]">
                    {row.userName}
                  </td>
                  <td className="px-[10px] py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.itemSearched}
                  </td>
                  <td className="px-[10px] py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-[10px]">
            <button className="text-[#611D69] border border-[#611D69] px-4 py-[9px] rounded">
              Download
            </button>
            <p className="text-base text-[#1D1D1D]">records:</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="border border-[#D3D3D3] rounded px-4 py-[9px] h-[44px] w-[155px]"></div>
            <div className="border border-[#D3D3D3] rounded px-[10px] py-[9px] max-w-[155px] relative">
  <select
    id="records"
    className="outline-none w-full pr-8 font-normal text-[#1D1D1D] appearance-none"
  >
    <option>Save filter 1</option>
    <option>Save filter 2</option>
    <option>Save filter 3</option>
  </select>
  {/* Custom Arrow */}
  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
    <svg
      className="w-4 h-4 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>


            <button className="bg-[#611D69] text-white px-4 py-[9px] rounded">
              Search
            </button>
          </div>
        </div>
       <div className="mt-[50px]">
       <p className="text-2xl font-bold">Team</p>
       <div className="border border-gray-300 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  USER NAME
                </th>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  SEARCHED ITEM
                </th>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  DATE
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9F0F2]">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-[10px] py-[9px] text-base whitespace-nowrap  text-[#1D1D1D]">
                    {row.userName}
                  </td>
                  <td className="px-[10px] py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.itemSearched}
                  </td>
                  <td className="px-[10px] py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </div>
      
      </div>
    </>
  );
}

export default MainPage;
