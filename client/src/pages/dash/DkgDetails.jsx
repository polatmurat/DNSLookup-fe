import React from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../components/skeleton/ScreenHeader";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

const DkgDetails = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <ScreenHeader>
        <h1 className="text-4xl screen-header-text">
          Domain Control Group Details
        </h1>

        <Link
          to="/dashboard/user"
          className="btn-light inline-flex items-center"
        >
          <BsArrowLeft className="mr-2" />
          Domain List
        </Link>
      </ScreenHeader>
      <Toaster position="top-right" reverseOrder />

        <div>

        </div>

    </Wrapper>
  );
};

export default DkgDetails;
