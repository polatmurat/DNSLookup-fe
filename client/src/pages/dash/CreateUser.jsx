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
      status: statusObject.name,
    });

    // Diğer işlemler devam edebilir
    const filtered = data.status.filter(
      (status) => status.name !== statusObject.name
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
              <div className="w-full p-3">
                <label className="input-label" htmlFor="status">
                  Choose Status
                </label>
                {data.status.length > 0 && (
                  <div className="flex flex-wrap -mx-3">
                    {data.status.map((status) => (
                      <div
                        key={status.name}
                        onClick={() => chooseStatus(status)}
                        className="form-status-div"
                      >
                        {status.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full p-3">
                <input
                  type="submit"
                  value={response.isLoading ? "Loading..." : "Save Place"}
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
