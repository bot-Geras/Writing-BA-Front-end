import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="md:hidden flex text-4xl text-white items-center cursor-pointer fixed right-12 top-2 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="md:hidden fixed  z-30 flex items-center cursor-pointer right-10 top-2"
          fill="#ffffff"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`md:hidden top-0 right-0 w-[250px] bg-[#545BE8]  p-10 pl-20 text-white fixed h-full z-40 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="flex flex-col items-start space-y-2 font-medium">
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-white hover:text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
