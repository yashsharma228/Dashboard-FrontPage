import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdPermContactCalendar } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuTicketSlash } from "react-icons/lu";
import { FaTree } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-50 h-screen p-4 border-r">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Catalog</h1>

      {/* Navigation */}
      <div className="space-y-6">
        {/* Home Section */}
        <div>
          <h2 className="text-md font-semibold mb-3">HOME</h2>
          <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
            <CiShoppingCart className="text-xl text-blue-600" />
            <Link to="/ecommerce" className="text-sm">eCommerce</Link>
          </div>
        </div>

        {/* App Section */}
        <div>
          <h2 className="text-md font-semibold mb-3">APP</h2>
          <div className="space-y-2">
            {[
              { Icon: MdPermContactCalendar, name: "Contacts", path: "/contacts" },
              { Icon: RiChatSmile2Line, name: "Chats", path: "/chats" },
              { Icon: SlCalender, name: "Calendar", path: "/calendar" },
              { Icon: MdOutlineMailOutline, name: "Email", path: "/email" },
              { Icon: LuTicketSlash, name: "Tickets", path: "/tickets" },
            ].map(({ Icon, name, path }) => (
              <div
                key={name}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
              >
                <Icon className="text-xl text-blue-600" />
                <Link to={path} className="text-sm">{name}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Page Section */}
        <div>
          <h2 className="text-md font-semibold mb-3">PAGE</h2>
          <div className="space-y-2">
            {[
              { Icon: FaTree, name: "Tree View", path: "/tree-view" },
              { Icon: IoIosPricetag, name: "Pricing", path: "/pricing" },
            ].map(({ Icon, name, path }) => (
              <div
                key={name}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
              >
                <Icon className="text-xl text-blue-600" />
                <Link to={path} className="text-sm">{name}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Section */}
        <div>
          <h2 className="text-md font-semibold mb-1">Jane Cooper</h2>
          <p className="text-xs text-gray-600 mb-3">Admin</p>
          <div className="space-y-2">
            {[
              { Icon: IoSettingsOutline, name: "Settings", path: "/settings" },
              { Icon: IoIosLogOut, name: "Logout", path: "/logout" },
            ].map(({ Icon, name, path }) => (
              <div
                key={name}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
              >
                <Icon className="text-xl text-blue-600" />
                <Link to={path} className="text-sm">{name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
