import React, { useState } from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../components/skeleton/ScreenHeader";
import { Link } from "react-router-dom";
import { BsBox, BsSearch } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import { CgDetailsMore } from "react-icons/cg";

const UserManagement = () => {
  const isFetching = false;

  let page = 1;
  const [perPage, setPerPage] = useState(10); // Per page değerini state olarak tut

  const handlePerPageChange = (e) => {
    // Per page değerini güncelle
    setPerPage(parseInt(e.target.value, 10));
  };

  const data = {
    users: [
      { _id: 1, name: "John Doe", status: "active", role: "admin" },
      { _id: 2, name: "Jane Doe", status: "passive", role: "user" },
      { _id: 3, name: "Bob Smith", status: "active", role: "user" },
      // { _id: 4, name: "John Doe", status: "passive", role: "user" },
      // { _id: 5, name: "Jane Doe", status: "active", role: "admin" },
      // { _id: 6, name: "Bob Smith", status: "passive", role: "admin" },
      // { _id: 7, name: "John Doe", status: "active", role: "user" },
      // { _id: 8, name: "Jane Doe", status: "passive", role: "admin" },
      // { _id: 9, name: "Bob Smith", status: "active", role: "admin" },
      // { _id: 10, name: "John Doe", status: "active", role: "admin" },
      // { _id: 11, name: "Jane Doe", status: "active", role: "user" },
      // { _id: 12, name: "Bob Smith", status: "passive", role: "admin" },
      // { _id: 13, name: "John Doe", status: "active", role: "admin" },
      // { _id: 14, name: "Jane Doe", status: "active", role: "admin" },
      // { _id: 15, name: "Bob Smith", status: "passive", role: "user" },
      // { _id: 16, name: "John Doe", status: "active", role: "admin" },
      // { _id: 17, name: "Jane Doe", status: "active", role: "admin" },
      // { _id: 18, name: "Bob Smith", status: "passive", role: "admin" },
      // { _id: 19, name: "John Doe", status: "active", role: "user" },
      // { _id: 20, name: "Jane Doe", status: "active", role: "admin" },
      // { _id: 21, name: "Bob Smith", status: "active", role: "admin" },
      // { _id: 22, name: "John Doe", status: "active", role: "admin" },
      // { _id: 23, name: "Jane Doe", status: "active", role: "admin" },
      // { _id: 24, name: "Bob Smith", status: "active", role: "admin" },
      // { _id: 25, name: "John Doe", status: "active", role: "admin" },
      // { _id: 26, name: "Jane Doe", status: "active", role: "admin" },
      // { _id: 27, name: "Last User", status: "active", role: "admin" },
    ],
    // perPage, // Sayfa başına görüntülenecek kullanıcı sayısı
    // count: 3
  };

  const delUser = (userId) => {
    // Kullanıcı silme işlemi burada gerçekleştirilebilir
    console.log("Delete user with ID:", userId);
  };

  const visibleUsers = data.users.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <h1 className="text-4xl screen-header-text">User Management</h1>
        </ScreenHeader>
        <Link
          to="/dashboard/create-user"
          className="btn-light inline-flex items-center mr-4"
        >
          <BsBox className="mr-2" />
          Create User
        </Link>
        <div className="p-14">
          <div className="mb-4 flex justify-between">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="searchInput"
                className="form-input block w-full py-2 pl-10 pr-3 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="border-b-2 py-2 px-3 rounded-lg">
              <label className="mr-2">PerPage:</label>
              <select value={perPage} onChange={handlePerPageChange}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="ml-2">Entries</span>
            </div>
          </div>
          {!isFetching ? (
            visibleUsers?.length > 0 ? (
              <>
                <div>
                  <table className="w-full bg-tablecolor rounded-md">
                    <thead>
                      <tr className="border-b border-gray-800 text-left">
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Name
                        </th>
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Status
                        </th>
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Role
                        </th>
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Process
                        </th>
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Edit
                        </th>
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleUsers?.map((user) => (
                        <tr key={user._id}>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            {user.name}
                          </td>
                          <td
                            className={`p-4 capitalize text-sm font-normal ${
                              user.status === "active"
                                ? "text-green-700 font-semibold"
                                : "text-gray-800"
                            }`}
                          >
                            {user.status}
                          </td>
                          <td
                            className={`p-4 capitalize text-sm font-normal text-black ${
                              user.role === "admin"
                                ? "text-rose-500 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {user.role}
                          </td>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            <Link
                              to={`/dashboard/user/details/${user._id}`}
                              className="w-1/4 px-5 py-2 cursor-pointer text-indigo-900 font-semibold rounded-md flex justify-center items-center"
                            >
                              Details
                              <span className="ml-1">
                                <CgDetailsMore size={22} />
                              </span>
                            </Link>
                          </td>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            <Link
                              to={`/dashboard/update-category/${user._id}`}
                              className="bg-palette4 w-1/4 px-5 py-2 cursor-pointer text-white rounded-md"
                            >
                              Edit
                            </Link>
                          </td>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            <a
                              className="bg-red-500 w-1/4 px-4 py-2 cursor-pointer text-white rounded-md"
                              onClick={() => delUser(user._id)}
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <Pagination
                  page={parseInt(page)}
                  perPage={data.perPage}
                  count={data.count}
                  path="dashboard/user"
                /> */}
              </>
            ) : (
              "There is no users, have been added yet."
            )
          ) : (
            <Spinner />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default UserManagement;
