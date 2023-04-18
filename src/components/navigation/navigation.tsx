import React from "react";
import logo from "../../assets/images/wbaLogo-white.png";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#545BE8] p-2 flex  justify-between items-center">
        <div className="flex gap-20 items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <select className="px-1 py-1 rounded-full text-sm">
              <option selected>English BD</option>
            </select>
          </div>
          <Sidebar />
        </div>

        <div className="text-white flex items-center hidden md:block">
          <ul className="flex gap-4 items-center text-sm">
            <Link to="">
              <li>Course</li>
            </Link>
            <Link to="">
              <li>Be an instructor</li>
            </Link>
            <Link to="">
              <li>Community</li>
            </Link>
            <Link to="">
              <li>Why WritingBa?</li>
            </Link>
          </ul>
        </div>
        <div className="text-white flex gap-6 hidden md:block mr-8">
          <Link to="">
            <span className="mr-2 text-sm">Sign up</span>
          </Link>
          <Link to="">
            <span className="text-sm">Login</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
