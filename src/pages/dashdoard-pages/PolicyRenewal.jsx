import Inputbar from "../../components/dashboard/Inputbar";
import { DropdownIcon } from "../../components/common/Icon";
import { useState } from "react";

export default function PolicyRenewal() {
  const [formData, setFormData] = useState({
    state: "",
    docket: "",
    docketMC: "",
    operatingAuthority: "All",
    carrierOperation: "All",
    hazmatFlag: "Any",
    yearsInBusiness: { min: "", max: "" },
    hasEmail: "Any",
    powerUnits: { min: "", max: "" },
    drivers: { min: "", max: "" },
    requiredbipd: { min: "", max: "" },
    classification: "All",
    insuranceBIPD: { min: "", max: "" },
    insuranceType: "Any",
    insuranceCarrier: "Any",
    renewalDate: { min: "", max: "" },
    oosViolation: { min: "", max: "" },
    creahes: { min: "", max: "" },
    injuries: { min: "", max: "" },
    fatality: { min: "", max: "" },
    towawaye: { min: "", max: "" },
    inspection: { min: "", max: "" },
  });

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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle nested object changes (min/max inputs)
  const handleNestedChange = (e, key, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Submitted: ", formData);
  };
  return (
    <>
      <h1 className="text-2xl font-bold">Policy Renewal Leads</h1>
      <div className="flex  justify-between flex-wrap  -mx-3 mt-[30px]">
        <div className="w-full lg:w-7/12 xl:w-6/12 px-3">
          <div className="px-4  pt-4 pb-9  shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Carrier</p>
            <form onSubmit={handleSubmit} className="mt-5">
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
                    value={formData.state}
                    onChange={handleChange}
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
              <div className="flex  justify-between -mx-3">
                <div className="w-6/12 px-3">
                  <div>
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Docket #
                    </label>
                    <div className="border border-[#D3D3D3] px-[10px] py-[7px] rounded mt-[6px]">
                      <input
                        className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none "
                        type="text"
                        placeholder="type..."
                        name="docket"
                        value={formData.docket}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Docket # (MC)
                    </label>
                    <div className="border border-[#D3D3D3] px-[10px] py-[7px] rounded mt-[6px]">
                      <input
                        className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none "
                        type="text"
                        placeholder="type..."
                        name="docketMC"
                        value={formData.docketMC}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Operating Authority
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select
                        name="operatingAuthority"
                        value={formData.operatingAuthority}
                        onChange={handleChange}
                        className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none"
                      >
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
                      <select
                        name="carrierOperation"
                        value={formData.carrierOperation}
                        onChange={handleChange}
                        className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none"
                      >
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
                      <select
                        name="hazmatFlag"
                        value={formData.hazmatFlag}
                        onChange={handleChange}
                        className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none"
                      >
                        <option>Any</option>
                        <option>Any</option>
                        <option>Any</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <DropdownIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 px-3">
                  <div>
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Years in Business
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          name="yearsInBusiness"
                          value={formData.yearsInBusiness.min}
                          onChange={handleChange}
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                          type="number"
                          placeholder="Max"
                          name="yearsInBusiness"
                          value={formData.yearsInBusiness.max}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Has email
                    </label>
                    <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                      <select
                        name="hasEmail"
                        value={formData.hasEmail}
                        onChange={handleChange}
                        className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none"
                      >
                        <option>Any</option>
                        <option>Any</option>
                        <option>Any</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <DropdownIcon />
                      </div>
                    </div>
                  </div>

                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Power units
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                          name="powerUnits"
                          value={formData.yearsInBusiness.min}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                          type="number"
                          placeholder="Max"
                          name="powerUnits"
                          value={formData.yearsInBusiness.max}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Drivers
                    </label>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                          type="number"
                          placeholder="Min"
                          name="drivers"
                          value={formData.drivers.min}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                        <input
                          className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                          type="number"
                          placeholder="Max"
                          name="drivers"
                          value={formData.drivers.max}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <label className="text-sm font-semibold ff_poppins uppercase">
                      Classification
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
              </div>
            </form>
          </div>
        </div>
        <div className="w-6/12 mt-5 lg:mt-0 lg:w-5/12 xl:w-3/12 px-3">
          <div className="px-4  pt-4 pb-9 shadow-card_shadow rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Insurance</p>
            <div className="mt-5">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Required BIPD
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="requiredbipd"
                    value={formData.requiredbipd.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="requiredbipd"
                    value={formData.requiredbipd.max}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Insurance TYPE
              </label>
              <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none"
                >
                  <option>Any</option>
                  <option>Any</option>
                  <option>Any</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Renewal Date
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="renewalDate"
                    value={formData.renewalDate.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="renewalDate"
                    value={formData.renewalDate.max}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Insurance Carrier Group
              </label>
              <div className="border border-[#D3D3D3] rounded  py-[7px] w-full relative mt-[6px]">
                <select
                  name="insuranceCarrier"
                  value={formData.insuranceCarrier}
                  onChange={handleChange}
                  className="outline-none w-full px-[10px] text-[#1D1D1D]  ff_salesforce_ragular appearance-none"
                >
                  <option>Any</option>
                  <option>Any</option>
                  <option>Any</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <DropdownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 mt-5 mx-auto lg:w-6/12 xl:w-3/12 xl:mt-0 px-3">
          <div className="px-4  pt-4 pb-9 shadow-card_shadow  rounded h-full">
            <p className="text-lg font-semibold text-[#611D69]">Safety</p>
            <div className="mt-5">
              <label className="text-sm font-semibold ff_poppins uppercase">
                OOS violations
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="oosViolation"
                    value={formData.oosViolation.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="oosViolation"
                    value={formData.oosViolation.max}
                    onChange={handleChange}
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
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="creahes"
                    value={formData.creahes.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="creahes"
                    value={formData.creahes.max}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Injuries
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="injuries"
                    value={formData.injuries.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="injuries"
                    value={formData.injuries.max}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Fatalities
              </label>
              <div className="flex items-center gap-2 justify-between ">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="fatality"
                    value={formData.fatality.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="fatality"
                    value={formData.fatality.max}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Towaway
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="towawaye"
                    value={formData.towawaye.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="towawaye"
                    value={formData.towawaye.max}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[18px]">
              <label className="text-sm font-semibold ff_poppins uppercase">
                Inspections
              </label>
              <div className="flex items-center gap-2 justify-between">
                <div className="border border-[#D3D3D3] w-full px-[10px]  py-[7px] rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full "
                    type="number"
                    placeholder="Min"
                    name="inspection"
                    value={formData.inspection.min}
                    onChange={handleChange}
                  />
                </div>
                <div className="border border-[#D3D3D3] px-[10px] py-[7px] w-full  rounded mt-[6px]">
                  <input
                    className="placeholder:text-[#1D1D1D] placeholder:opacity-[60%] ff_salesforce_ragular font-normal outline-none w-full"
                    type="number"
                    placeholder="Max"
                    name="inspection"
                    value={formData.inspection.max}
                    onChange={handleChange}
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
