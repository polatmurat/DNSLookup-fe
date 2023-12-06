import React, { useState } from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../components/skeleton/ScreenHeader";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import UserDetail from "./UserDetail";

const DkgDetails = () => {
  const { id } = useParams();

  //   author user ID check from the params id
  const author = {id: 1, name: 'John'};

  const [value, setValue] = useState("");

  const [statusList, setStatusList] = useState([]);

  const isFetching = false;

  const data = {
    roles: [
      { name: "admin", role_id: "0" },
      { name: "user", role_id: "1" },
    ],
    status: [
      { name: "active", status_id: 1 },
      { name: "passive", status_id: 0 },
    ],
  };

  const response = { isLoading: false };

  const [state, setState] = useState({
    name: "",
    role: "",
    status: "",
    email: "",
    telegramID: "",
  });

  const handlePlace = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();

    // createNewUser(formData);
  };
  const chooseStatus = (statusObject) => {
    setState({
      ...state,
      status: statusObject,
    });

    const filtered = data.status.filter(
      (status) => status.name !== statusObject
    );
    setStatusList([...filtered, statusObject]);
  };

  console.log(state);

  return (
    <Wrapper>
      <ScreenHeader>
        <h1 className="text-4xl screen-header-text">
          Domain Control Group Details
        </h1>
      </ScreenHeader>

      <Link to="/dashboard/dkg-management" className="btn-light inline-flex items-center">
        <BsArrowLeft className="mr-2" />
        Domain List
      </Link>
      <Toaster position="top-right" reverseOrder />
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createUser}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="name" className="input-label">
                Group Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Group Name..."
                onChange={handlePlace}
                value={state.name}
                required
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label className="input-label" htmlFor="status">
                Group Status
              </label>
              {data.status.length > 0 && (
                <div className="flex flex-wrap -mx-3 mt-2">
                  <div
                    onClick={() => chooseStatus("active")}
                    className={`form-status-div transition-colors ${
                      state.status === "active"
                        ? "text-green-500 font-bold"
                        : ""
                    }`}
                  >
                    Active
                  </div>
                  <div
                    onClick={() => chooseStatus("passive")}
                    className={`form-status-div ${
                      state.status === "passive" ? "text-red-500 font-bold" : ""
                    }`}
                  >
                    Passive
                  </div>
                  <div
                    onClick={() => chooseStatus("removed")}
                    className={`form-status-div transition-colors ${
                      state.status === "removed"
                        ? "text-red-900 line-through font-semibold"
                        : ""
                    }`}
                  >
                    Removed
                  </div>
                </div>
              )}
            </div>
            <div className="w-full p-3">
              <label htmlFor="telegramID" className="input-label">
                Telegram Chat ID
              </label>
              <input
                type="text"
                name="telegramID"
                id="telegramID"
                className="form-control"
                placeholder="Chat ID..."
                onChange={handlePlace}
                value={state.telegramID}
                required
              />
            </div>
            <div className="w-full p-3">
              <label htmlFor="message" className="input-label">
                DKG Domain Group
              </label>
              <textarea
                id="message"
                rows="4"
                className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Domain List.."
              ></textarea>
            </div>
            <div className="w-full p-3">
              <label htmlFor="notes" className="input-label">
                DKG Notes
              </label>
              <textarea
                id="notes"
                rows="4"
                className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Group Notes.."
              ></textarea>
            </div>

            <div className="w-full ml-3 p-3">
              <input
                type="submit"
                value={response.isLoading ? "Loading..." : "Update DKG"}
                disabled={response.isLoading}
                className="btn-light py-2 -ml-3 my-2"
              />
            </div>
          </div>
        </form>
        <div className="w-full xl:w-4/12 p-3">
          <div className="flex flex-wrap">
            <h1 className="text-gray-700 font-extralight mb-3">
              * Grup statüsü {"Pasif"} olarak işaretlenmiş gruplar kontrol dışı
              bırakılır.{" "}
            </h1>
            <h1 className="text-gray-700 font-extralight">
              * Grup statüsü {"Removed"} olarak işaretlenmiş gruplar sistemden
              silinir.{" "}
            </h1>
          </div>
          <div className="flex flex-wrap mt-5">
            <h1 className="right-heading mr-5">
              Author : <Link className="text-indigo-600 font-semibold" to={`/user/detail/${author.id}`}>{author.name}</Link>
            </h1>
          </div>
          <div className="flex flex-wrap mt-5">
            <h1 className="right-heading mr-5">
              Updated At :{" "}
              <span className="text-gray-500">{new Date().toDateString()}</span>
            </h1>
            <h1 className="right-heading mr-5">
              Created At :{" "}
              <span className="text-gray-500">{new Date().toDateString()}</span>
            </h1>
          </div>
          <div className="flex flex-wrap mt-5">
            <h1 className="right-heading mr-5 font-semibold">Control Log : </h1>
            <textarea
              id="notes"
              rows="4"
              className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Log bilgileri burada yer alacak..."
              disabled
            ></textarea>{" "}
          </div>
          <div className="flex flex-wrap mt-5">
            <h1 className="right-heading mr-5 font-semibold">
              Telegram Log :{" "}
            </h1>
            <textarea
              id="notes"
              rows="4"
              className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Log bilgileri burada yer alacak..."
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DkgDetails;
