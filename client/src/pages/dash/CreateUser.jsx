import React, { useState } from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../components/skeleton/ScreenHeader";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import Spinner from "../../components/Spinner";

const CreateUser = () => {
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
        <Link
          to="/dashboard/user"
          className="btn-light inline-flex items-center"
        >
          <BsArrowLeft className="mr-2" />
          User List
        </Link>
      </ScreenHeader>
      <Toaster position="top-right" reverseOrder />
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createUser}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="name" className="input-label">
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="User Name..."
                onChange={handlePlace}
                value={state.name}
                required
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="category" className="input-label">
                Role
              </label>
              {!isFetching ? (
                data.roles.length > 0 && (
                  <select
                    name="role"
                    id="role"
                    className="form-control capitalize"
                    onChange={handlePlace}
                    value={state.role}
                  >
                    <option value="">Choose Role...</option>
                    {data?.roles?.map((role) => (
                      <option
                        value={role.name}
                        key={role.role_id}
                        className="capitalize"
                      >
                        {role.name}
                      </option>
                    ))}
                  </select>
                )
              ) : (
                <Spinner />
              )}
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email..."
                onChange={handlePlace}
                value={state.email}
                required
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label className="input-label" htmlFor="status">
                Choose Status
              </label>
              {data.status.length > 0 && (
                <div className="flex flex-wrap -mx-3 mt-2">
                  <div
                    onClick={() => chooseStatus("active")}
                    className={`form-status-div transition-colors ${
                      state.status === "active" ? "text-green-500" : ""
                    }`}
                  >
                    Active
                  </div>
                  <div
                    onClick={() => chooseStatus("passive")}
                    className={`form-status-div ${
                      state.status === "passive" ? "text-red-500" : ""
                    }`}
                  >
                    Passive
                  </div>
                </div>
              )}
            </div>
            <div className="w-full ml-3 p-3">
              <input
                type="submit"
                value={response.isLoading ? "Loading..." : "Create User"}
                disabled={response.isLoading}
                className="btn-light py-2 -ml-3 my-2"
              />
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default CreateUser;
