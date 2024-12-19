import React from "react";
import { IoMail, IoSettingsOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md border-b">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <input
          type="search"
          placeholder="Search"
          className="p-2 border rounded-md focus:outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 text-gray-600">
        <IoMail className="text-2xl cursor-pointer" />
        <CiBellOn className="text-2xl cursor-pointer" />
        <IoSettingsOutline className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default DashboardHeader;



