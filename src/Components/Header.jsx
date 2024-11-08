import React from "react";
// import { Button } from "./components/ui/button.jsx";
// import { Button } from "./ui/button.jsx";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Create trip",
    href: "/create-trip",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-400 to-yellow-200">
        <div className="p-2 shadow-sm flex justify-between items-center px-5 ">
          <div className="inline-flex items-center space-x-2">
            <p className="text-lg font-bold">TripStar</p>
            <img className="w-16 h-12" src="/logo.svg" alt="TripStar Logo" />
          </div>
          <div className="hidden md:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-lg font-semibold text-gray-800 hover:text-blue-900 hover:font-bold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
           <button className=" px-4 py-2 text-white bg-teal-600 hover:bg-blue-400 rounded-md transition duration-300">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
