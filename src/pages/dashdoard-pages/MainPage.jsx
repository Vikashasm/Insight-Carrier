import { data } from "../../components/common/Helper";
import { InputEmailIcon } from "../../components/common/Icon";
import Inputbar from "../../components/dashboard/Inputbar";

function MainPage() {
 
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

      {/* Horizontal scroll enabled, but table remains full width */}
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200 mt-[30px]">
            <thead className="bg-[#00ADEF0F] border-b border-[#00ADEF]">
              <tr>
                <th className="px-[10px] py-[9px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  USER NAME
                </th>
                <th className="px-[10px] py-[9px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  SEARCHED ITEM
                </th>
                <th className="px-[10px] py-[9px] text-end text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
                  DATE
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9F0F2]">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.userName}
                  </td>
                  <td className="px-[10px] ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.itemSearched}
                  </td>
                  <td className="px-[10px] text-end ff_salesforce_ragular py-[9px] text-base whitespace-nowrap text-[#1D1D1D]">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      <div className="mt-[14px] overflow-x-hidden">
        <Inputbar />
      </div>

      <div className="mt-[50px]">
        <p className="text-2xl font-bold">Team</p>
        <div className="flex items-center justify-between  flex-wrap">
          <div className="flex items-center gap-5 lg:mb-0">
            <div className="border border-[rgb(211,211,211)] mt-4 rounded flex items-center py-[9px] px-[14px] gap-[10px]">
              <button>
               <InputEmailIcon/>
              </button>

              <input
                className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none"
                type="email"
                placeholder="Enter Team member email"
              />
            </div>
            <button className="text-sm  font-bold uppercase text-white mt-4 bg-[#611D69] px-4 py-3 rounded">
              Add
            </button>
          </div>
          <button className="text-[#611D69] uppercase font-bold mt-4 border border-[#611D69] px-4 py-[9px] rounded hover:bg-[#611D69] hover:text-white duration-300">
            Link for my account
          </button>
        </div>

        <div className="overflow-x-auto w-full mt-10">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-[#00ADEF0F] border-b border-[#00ADEF]">
      <tr>
        <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
          EMAIL
        </th>
        <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
          NAME
        </th>
        <th className="px-[10px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider">
          STATUS
        </th>
        <th className="ps-[50px] py-[12px] text-left text-sm font-semibold text-[#1D1D1D] uppercase tracking-wider w-full">
          MANAGE SEARCH FILTERS
        </th>
        
      </tr>
    </thead>
    <tbody className="divide-y  space-y-4">
      {emaildata.map((row, index) => (
        <tr key={index} className="bg-white rounded-lg">
          <td className="px-[10px] py-[10px] text-base whitespace-nowrap text-[#1D1D1D]">
            {row.email}
          </td>
          <td className="px-[10px] py-[10px] text-base whitespace-nowrap text-[#1D1D1D]">
            {row.name}
          </td>
          <td className="px-[10px] py-[10px] text-base whitespace-nowrap text-[#1D1D1D]">
            {row.status}
          </td>
          <td className="ps-[50px] py-1">
            <div className="flex items-center justify-between gap-[150px] xl:gap-0">
            <input type="checkbox" className="w-[20px] h-[20px]" />
            <td className="px-[9px] py-[10px] flex items-center justify-end gap-[10px]">
            <button className="text-[#611D69] border border-[#611D69] px-4 py-[9px] rounded hover:bg-[#611D69] hover:text-white duration-300 uppercase">
              Remove
            </button>
            <button className="border uppercase border-[#611D69] px-4 py-[9px] rounded bg-[#611D69] text-white duration-300">
              Resend
            </button>
          </td>
            </div>
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </>
  );
}

export default MainPage;
