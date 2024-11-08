
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
  const emaildata = [
    {
      email: "danghoang87hl@gmail.com",
      name: "Dianne Russell",
      status: "Invitation sent",
    },
    {
      email: "igerrin@gmail.com",
      name: "Jacob Jones",
      status: "Invitation sent",
    },
    {
      email: "tranthuy.nute@gmail.com",
      name: "Jane Cooper",
      status: "Accepted",
    },
    {
      email: "trungkienspktnd@gamail.com",
      name: "Darlene Robertson",
      status: "Accepted",
    },
   
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        {/* Table Container */}
        <div className="border-top border-gray-300  overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 mt-[30px]">
            <thead className="bg-[#00ADEF0F] border-b border-[#00ADEF]">
              <tr>
                <th className="px-[10px] py-[9px] text-left text-sm20 font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  USER NAME
                </th>
                <th className="px-[10px] py-[9px] text-left text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  SEARCHED ITEM
                </th>
                <th className="ps-[10px]  pe-[73px] py-[9px] text-end text-sm  font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  DATE
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9F0F2] ]">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap  text-[#1D1D1D]">
                    {row.userName}
                  </td>
                  <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.itemSearched}
                  </td>
                  <td className="ps-[10px]  pe-[27px] text-end ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-[30px]">
          <div className="flex items-center gap-[10px]">
            <button className="text-[#611D69] border border-[#611D69] hover:bg-[#611D69] hover:text-white duration-300 px-4 py-[9px] rounded">
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
        <div className="mt-[50px]">
          <p className="text-2xl font-bold">Team</p>
          <div className="flex items-center  justify-between mt-4">
            <div className="flex items-center gap-5 ">
              <div className="border border-[rgb(211,211,211)] rounded  flex items-center py-[9px] px-[14px] gap-[10px]">
                <button>
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00784 0.5C0.897255 0.5 0 1.39375 0 2.5V3.3125L9.73177 10.4938C9.81961 10.5563 9.92628 10.5938 10.0392 10.5938C10.1522 10.5938 10.2588 10.5563 10.3467 10.4938L20.0784 3.3125V2.5C20.0784 1.39375 19.1812 0.5 18.0706 0.5H2.00784ZM20.0784 5.8L11.5451 12.1C11.1122 12.4188 10.5851 12.5938 10.0392 12.5938C9.49333 12.5938 8.97255 12.4188 8.53333 12.1L0 5.8V14.5C0 15.6062 0.897255 16.5 2.00784 16.5H18.0706C19.1812 16.5 20.0784 15.6062 20.0784 14.5V5.8Z"
                      fill="#611D69"
                    />
                  </svg>
                </button>

                <input
                  className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none "
                  type="email"
                  placeholder="Team member email"
                />
              </div>
              <button className="text-sm font-bold text-white bg-[#611D69] px-4 py-3 rounded">
                Add
              </button>
            </div>
            <button className="text-[#611D69] border border-[#611D69] px-4 py-[9px] rounded hover:bg-[#611D69] hover:text-white duration-300">
            Link for my account
            </button>
          </div>
          <div className="border-bottom border-gray-300  overflow-hidden mt-[40px] ">
          <table className="min-w-full divide-y space-y-3 divide-gray-200 w-full">
  <thead className="bg-[#00ADEF0F] border-b border-[#00ADEF]">
    <tr>
      <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
        EMAIL
      </th>
      <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
      name
      </th>
      <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
      status
      </th>
      <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
      Manage search filters 
      </th>
      <th></th>
    </tr>
  </thead>

  <tbody className="divide-y divide-[#E9F0F2] space-y-4">
    {emaildata.map((row, index) => (
      <tr key={index} className="bg-white shadow-lg rounded-lg">
        <td className="px-[10px] ff_salesforce_regular py-[10px] ff_salesforce_ragular text-base whitespace-nowrap text-[#1D1D1D]">
          {row.email}
        </td>
        <td className="px-[10px] ff_salesforce_regular py-[10px] ff_salesforce_ragular text-base whitespace-nowrap text-[#1D1D1D]">
          {row.name}
        </td>
        <td className="px-[10px] ff_salesforce_regular py-[10px] ff_salesforce_ragular text-base whitespace-nowrap text-[#1D1D1D]">
          {row.status}
        </td>
        <td className="px-[9px] py-1 ">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] checked:border checked:rounded outline-none checked:border-[#D3D3D3]"
          />
        </td>
        <td className="px-[9px] py-[10px] flex items-center justify-end gap-[10px]">
          <button className="text-[#611D69] border border-[#611D69] px-4 py-[9px] rounded hover:bg-[#611D69] hover:text-white duration-300">
            Remove
          </button>
          <button className="border border-[#611D69] px-4 py-[9px] rounded bg-[#611D69] text-white duration-300">
            Resend
          </button>
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
