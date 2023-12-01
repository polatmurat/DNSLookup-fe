import React, { useState } from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../components/skeleton/ScreenHeader";
import { Link } from "react-router-dom";
import { BsBox, BsSearch } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

const ControlPanel = () => {

    const [listData, setListData] = useState({
        "version": "2.0.0",
        "endpoit": "check-domains",
        "taskUrl": "https://panel.jetdomain.org/domain/check-domains",
        "telegram": {
            "url": "https://panel.jetdomain.org/telegram/index",
            "admins": "6858650153",
            "token": "_TOKEN"
        }
    });

  return (
    <>
      <Wrapper>
        <ScreenHeader>
          {/* <div className="flex items-center">
            <h1 className="mr-4 font-semibold text-lg">Control Panel</h1>
            <Link
              to="/dashboard/create-category"
              className="btn-light inline-flex items-center mr-4"
            >
              <BsBox className="mr-2" />
              Add Domains
            </Link>
            <Link
              to="/dashboard/create-category"
              className="btn-light inline-flex items-center"
            >
              <BsSearch className="mr-2" />
              Search Domain
            </Link>
            <Toaster position="top-right" />
          </div> */}
          <h1 className="text-4xl screen-header-text">Control Panel</h1>
        </ScreenHeader>

        <div className="p-14">
          <h1 className="text-xl border-b border-bg-800 pb-5 mb-5">System Details</h1>
          <ul className="control-panel__list">
            <li>Version : {listData.version}</li>
            <li>Task Endpoit : {listData.endpoit}</li>
            <li>Task Endpoit : {listData.endpoit}</li>
            <li>Task URL : <a href={`${listData.taskUrl}`}>{listData.taskUrl}</a></li>
            <li>Telegram URL : <a href={`${listData.telegram.url}`}>{listData.telegram.url}</a></li>
            <li>Telegram Admin(s) : {listData.telegram.admins}</li>
            <li>Telegram Token : <abbr title={`${listData.telegram.token}`} className="cursor-not-allowed">Come Here</abbr></li>

          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default ControlPanel;
