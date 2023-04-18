import React from "react";
import logo from "../../assets/images/wbaLogo-white.png";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
const Navbar = () => {
  const menuItems = [
    {
      label: "Course",
      path: "",
    },
    {
      label: "Be an instructor",
      path: "",
    },
    {
      label: "Community",
      path: "",
    },
    {
      label: "Why WritingBa?",
      path: "",
    },
  ];
  return (
    <>
      <div className="bg-[#545BE8] p-2 flex  justify-between items-center">
        <div className="flex gap-20 items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <select className="px-1 py-1 rounded-full text-sm">
              <option selected>English BD</option>
            </select>
            <Sidebar />
          </div>
        </div>

        <div className="text-white flex items-center ">
          <div className="hidden md:block">
            <ul className="flex gap-4 items-center text-sm">
              {menuItems.map((navItems, index) => (
                <li key={index}>
                  <Link
                    to={navItems.path}
                    className="p-2 text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    {navItems.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-white flex gap-6  mr-8">
          <div className="hidden md:block">
            <Link to="">
              <span className="mr-2 text-sm">Sign up</span>
            </Link>
            <Link to="">
              <span className="text-sm">Login</span>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
