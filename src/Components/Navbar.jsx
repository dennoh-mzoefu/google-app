import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Logo from "./Logo.jsx";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/" className="flex">
          {/* <p className="bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/75 text-2xl font-bold text-white py-1 px-2 rounded dark:bg-gradient-to-r dark:from-white dark:to-slate-500/50 dark:text-gray-900"> */}
          <div className="text-2xl font-bold mt-2 flex">
            <span className="text-blue-500">W</span>
            <span className="text-red-500">e</span>
            <span className="text-amber-500">b</span>
            <span>
              <Logo darkTheme={darkTheme} className="max-h-2.5" />
            </span>

            <span className="text-blue-500">C</span>
            <span className="text-green-500">r</span>
            <span className="text-purple-500">a</span>
            <span className="text-blue-500">w</span>
            <span className="text-rose-500">l</span>
            <span className="text-red-500">e</span>
            <span className="text-cyan-500">r</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "💡" : "🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
