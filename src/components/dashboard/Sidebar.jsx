import { Link } from "react-router-dom";
import {
  Cancellations,
  CompanySafety,
  Dashboard,
  NewVenture,
  Notifications,
  PolicyRenewal,
} from "../common/Icon";

export default function Sidebar({ setOpen }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <nav className="flex-col gap-[40px]">
        <div 
          onClick={() => setOpen(false)}>
        <Link
          to="/dashboard"
          className="flex items-center gap-[6px] text-white text-[15px] font-bold"
        >
          <Dashboard />
          Dashboard
        </Link>

        </div>
        <ul className="flex flex-col gap-4 mt-12">
          <li className="text-sm font-semibold ff_poppins text-white mb-3">
            Leads
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              
              to="/dashboard/PolicyRenewal"
              className="ff_salesforce_ragular flex items-center gap-[6px] text-white text-xs lg:text-[15px] font-normal"
            >
              <PolicyRenewal />
              Policy Renewal Leads
            </Link>
          </li>
          <li  onClick={() => setOpen(false)}>
            <Link
             
              to="/dashboard/NewVenture"
              className="flex items-center ff_salesforce_ragular gap-[6px] text-white text-xs lg:text-[15px] font-normal"
            >
              <NewVenture />
              New Venture Leads
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to="/dashboard/MidTerm"
              className="flex items-center ff_salesforce_ragular gap-[6px] text-white text-xs lg:text-[15px] font-normal"
            >
              <Cancellations />
              Mid-Term Cancellations
            </Link>
          </li>
        </ul>
        <div className="flex flex-col mt-10 lg:mt-15 xl:mt-20">
          <p className="text-[13px] lg:text-sm font-semibold ff_poppins text-white">
            Compliance and Safety
          </p>
          <div  onClick={() => setOpen(false)}>
          <Link
            onClick={() => setOpen(false)}
            to="/dashboard/CompanySafety"
            className="flex ff_salesforce_ragular items-center mt-5 gap-[6px] text-white text-[13px] lg:text-[15px] font-normal"
          >
            <CompanySafety />
            Company Safety Profile
          </Link>

          </div>
        </div>
      </nav>
      <div className="flex flex-col mt-7 gap-5">
        <p className="text-sm font-semibold ff_poppins text-white">Settings</p>
        <div  onClick={() => setOpen(false)}>
        <Link
          onClick={() => setOpen(false)}
          to="/dashboard/Notification"
          className="flex items-center gap-[6px] text-white text-xs ff_salesforce_ragular lg:text-[15px] font-normal"
        >
          <Notifications />
          Notifications
        </Link>

        </div>
      </div>
    </div>
  );
}
