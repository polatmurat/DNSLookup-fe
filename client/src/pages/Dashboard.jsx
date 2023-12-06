import React from 'react'
import Wrapper from './Wrapper'
import ScreenHeader from '../components/skeleton/ScreenHeader'
import { Link } from 'react-router-dom'
import { BsBox } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";


const Dashboard = () => {
  return (
    <>
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/create-dkg"
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
      </ScreenHeader>
      </Wrapper>
      </>
    )
}

export default Dashboard