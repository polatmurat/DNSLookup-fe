import React from "react";
import {
  BsCardList,
  BsBagCheck,
  BsPeople,
  BsXCircle,
  BsBarChart,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = ({ side, closeSidebar }) => {
  const navigate = useNavigate();
  return (
      <div
      className={`fixed border-r-2 z-10 top-0 ${side} bg-white/100 sm:left-0 w-64 h-screen transition-all ease-in-out duration-200`}
    >
      <div>
        <img src="/images/logo-light2.png" onClick={() => navigate('/dashboard')} className="cursor-pointer" alt="Logo" />
        {/* <h1 className=" p-7">Quality</h1> */}
      </div>
      <ul className="">
        <li className="px-4 py-3 transition-all flex items-center justify-center sm:hidden">
          <BsXCircle
            className="mr-2 text-3xl inline-block cursor-pointer text-dark1 "
            onClick={closeSidebar}
          />
        </li>
        <li className="px-4 py-5 cursor-pointer transition-all  flex items-center border-t-2 hover:bg-gray-200">
          <BsCardList className="mr-2 text-lg inline-block" />
          <Link to="/dashboard/overview" className="text-base capitalize">
            Control Panel
          </Link>
        </li>
        <li className="px-4 py-5 cursor-pointer transition-all  flex items-center border-t-2 hover:bg-gray-200">
          <BsBagCheck className="mr-2 text-lg inline-block" />
          <Link to="/dashboard/user" className="text-base capitalize">
            User Managemenet
          </Link>
        </li>
        <li className="px-4 py-5 cursor-pointer transition-all  flex items-center border-t-2 hover:bg-gray-200">
          <BsPeople className="mr-2 text-lg inline-block" />
          <Link to="/dashboard/dkg-management" className="text-base capitalize">
            DKG Admin
          </Link>
        </li>
        <li className="px-4 py-5 cursor-pointer transition-all  flex items-center border-y-2 hover:bg-gray-200">
          <BsBarChart className="mr-2 text-lg inline-block" />
          <Link to="/dashboard/dkg-control" className="text-base capitalize">
            DKG (Benim gruplarım)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
