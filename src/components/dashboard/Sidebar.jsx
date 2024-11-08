
import {
  Cancellations,
  CompanySafety,
  Dashboard,
  NewVenture,
  Notifications,
  PolicyRenewal,
} from "../common/Icon";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
    
   
        <div className="flex flex-col h-full justify-between">
          <nav className="flex-col gap-[40px] ">
            <Link  className="flex items-center gap-[6px] text-white text-[15px] font-bold">
              <Dashboard />
              Dashboard
            </Link>

            <ul className="flex flex-col gap-4 mt-12 ">
              <li className="text-sm font-semibold ff_poppins text-white mb-3">
                Leads
              </li>

              <li >
                <Link className="ff_salesforce_ragular flex items-center gap-[6px] text-white text-[15px] font-normal">
                  <PolicyRenewal />
                  Policy Renewal Leads
                </Link>
              </li>
              <li>
                <Link className="flex items-center ff_salesforce_ragular gap-[6px] text-white text-[15px] font-normal">
                  <NewVenture />
                  New Venture Leads
                </Link>
              </li>
              <li>
                <Link className="flex items-center ff_salesforce_ragular gap-[6px] text-white text-[15px] font-normal">
                  <Cancellations />
                  Mid-Term Cancellations
                </Link>
              </li>
            </ul>
            <div className="flex flex-col mt-20">
              <p className="text-sm font-semibold ff_poppins text-white">
                Compliance and Safety
              </p>
              <Link className="flex ff_salesforce_ragular items-center mt-5 gap-[6px] text-white text-[15px] font-normal">
                <CompanySafety />
                Company Safety Profile
              </Link>
            </div>
          </nav>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold ff_poppins text-white">
              Settings
              </p>
              <Link className="flex items-center gap-[6px] text-white text-[15px] font-normal">
                <Notifications />
                Notifications
              </Link>
            </div>

        </div>
      </>
  );
}
