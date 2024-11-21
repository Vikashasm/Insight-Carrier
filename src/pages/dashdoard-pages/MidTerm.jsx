import Inputbar from "../../components/dashboard/Inputbar";
import { DropdownIcon } from "../../components/common/Icon";

export default function MidTerm() {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">Mid-Term Cancellations</h1>
      <div className="flex  justify-between flex-wrap -mx-3 mt-[30px]">
        <div className="w-full sm:w-10/12 mt-5 mx-auto 2xl:mt-0 lg:w-6/12 xl:w-4/12 px-3">
          <div className="px-4  pt-4 pb-7  shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Carrier</p>
            <form className="mt-5">
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="text-sm font-semibold ff_poppins uppercase"
                >
                  State #
                </label>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] rounded mt-[6px]">
                  <select
                    name="state"
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full bg-white"
                  >
                    <option value="" disabled>
                      Select a country...
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-12/12 ">
                <div>
                  <label className="text-sm font-semibold ff_poppins uppercase">
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
                <div  className="mt-[18px]">
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    email 
                  </label>
                  <div className="border w-full border-[#D3D3D3]  px-[10px]  py-[7px] rounded mt-[6px]">
                    <input
                      className="placeholder:text-[#1D1D1D] opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                      type="email"
                      placeholder="type..."
                    />
                  </div>
                </div>

                <div className="mt-[18px]">
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    Docket #
                  </label>
                  <div className="flex items-center gap-2 xl:justify-between">
                    <div className="border border-[#D3D3D3] rounded w-full  py-[7px] relative mt-[6px]">
                      <select className="outline-none     px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                        <option>MC</option>
                        <option>MC</option>
                        <option>MC</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <DropdownIcon />
                      </div>
                    </div>
                    <div className="border border-[#D3D3D3] w-full  px-[10px]  py-[7px] rounded mt-[6px]">
                      <input
                        className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                        type="number"
                        placeholder="Type..."
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[18px]">
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    Operating Authority
                  </label>
                  <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                    <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon />
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
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
                <div className="mt-[18px]">
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    Hazmat flag
                  </label>
                  <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                    <select className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
                <div className="mt-[18px]">
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    Years in Business
                  </label>
                  <div className="flex items-center gap-2 xl:justify-between">
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
              </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-10/12 mt-5 2xl:mt-0 mx-auto lg:w-6/12 xl:w-4/12 px-3">
          <div className="px-4  pt-4 pb-7  shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Insurance</p>
            <form className="mt-5">
              <div className="w-12/12 ">
                <div>
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    Required BIPD
                  </label>
                  <div className="flex items-center gap-2 justify-between">
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
                <div  className="mt-[18px]">
                  <label className="text-sm font-semibold ff_poppins uppercase">
                    email 
                  </label>
                  <div className="border w-full border-[#D3D3D3]  px-[10px]  py-[7px] rounded mt-[6px]">
                    <input
                      className="placeholder:text-[#1D1D1D] opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                      type="email"
                      placeholder="type..."
                    />
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
                      <DropdownIcon />
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
                      <DropdownIcon />
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
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-10/12 mt-5 2xl:mt-0 lg:w-6/12 xl:w-4/12 px-3 mx-auto">
          <div className="px-4  pt-4 pb-7 shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Safety</p>
            <div className="mt-5">
              <label className="text-sm font-semibold ff_poppins uppercase">
                OOS violations
              </label>
              <div className="flex items-center gap-2 xl:justify-between">
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
            <div className="mt-5">
              <label className="text-sm font-semibold ff_poppins uppercase">
                OOS total
              </label>
              <div className="flex items-center gap-2 xl:justify-between">
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
                Crashes
              </label>
              <div className="flex items-center gap-2 xl:justify-between">
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
                Injuries
              </label>
              <div className="flex items-center gap-2 xl:justify-between">
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
                Fatalities
              </label>
              <div className="flex items-center gap-2 xl:justify-between">
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
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <Inputbar />
      </div>
    </>
  );
}
