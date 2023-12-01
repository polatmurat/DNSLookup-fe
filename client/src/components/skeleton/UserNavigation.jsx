import { useDispatch } from "react-redux";
// import { logout } from "../../app/reducers/authReducer";
import { BsFilterLeft } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import React from "react";

const UserNavigation = ({ openSidebar }) => {
//   const dispatch = useDispatch();
  const userLogout = () => {
    // dispatch(logout('user-token'));
  };
  return (
    <nav className="fixed left-0 sm:left-64 top-4 right-0">
      <div className=" w-full flex items-center p-4">
        <BsFilterLeft
          className="text-dark1 text-3xl cursor-pointer sm:hidden block"
          onClick={openSidebar}
        />
        <button
          className="border-gray-400 border-2 text-dark1 rounded-md px-4 py-2 capitalize font-medium cursor-pointer ml-auto flex justify-center items-center"
          onClick={userLogout}
        >
          <SlLogout className="mr-2" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default UserNavigation;
