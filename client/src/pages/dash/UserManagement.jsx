import React, { useState } from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../components/skeleton/ScreenHeader";
import { Link } from "react-router-dom";
import { BsBox, BsSearch } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";

const UserManagement = () => {
  const isFetching = false;


  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <h1 className="text-4xl screen-header-text">User Management</h1>
        </ScreenHeader>
        <Link
          to="/dashboard/create-category"
          className="btn-light inline-flex items-center mr-4"
        >
          <BsBox className="mr-2" />
          Create User
        </Link>
        <div className="p-14">
          {!isFetching ? (
            data?.users?.length > 0 ? (
              <>
                <div>
                  <table className="w-full bg-tablecolor rounded-md">
                    <thead>
                      <tr className="border-b border-gray-800 text-left">
                        <th className="p-3 uppercase text-base font-sm text-gray-800">
                          Name
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
                      {data?.users?.map((category) => (
                        <tr key={category._id}>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            {category.name}
                          </td>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            <Link
                              to={`/dashboard/update-category/${category._id}`}
                              className="bg-palette4 w-1/4 px-5 py-2 cursor-pointer text-white rounded-md"
                            >
                              Edit
                            </Link>
                          </td>
                          <td className="p-4 capitalize text-sm font-normal text-black">
                            <a
                              className="bg-red-500 w-1/4 px-4 py-2 cursor-pointer text-white rounded-md"
                              onClick={() => delCategory(category._id)}
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  page={parseInt(page)}
                  perPage={data.perPage}
                  count={data.count}
                  path="dashboard/user"
                />
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
