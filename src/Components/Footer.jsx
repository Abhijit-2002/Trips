import React from "react";

function Footer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal-400 to-yellow-200 w-full py-8 ">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <img className="w-20 h-16" src="/logo.svg" alt="" />
                <span className="ml-4 text-lg font-bold">TripStar</span>
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/create-trip"
                >
                  Plan a Trip
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="https://github.com/Abhijit-2002">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.18-.01-.78-.01-1.42-2.22.48-2.69-1.07-2.69-1.07-.36-.91-.87-1.15-.87-1.15-.71-.49.05-.48.05-.48.78.05 1.24.8 1.24.8.69 1.18 1.81.84 2.25.64.07-.5.27-.84.49-1.03-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.84.64-.18 1.34-.27 2.03-.27.69 0 1.39.09 2.03.27 1.53-1.06 2.2-.84 2.2-.84.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.14 0 3.07-1.86 3.75-3.63 3.95.27.23.51.67.51 1.36 0 .98-.01 1.77-.01 2.01 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"
                        fill="#27272A"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="https://www.linkedin.com/in/abhijit02">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.88 0H1.12C.5 0 0 .5 0 1.12v13.76C0 15.5.5 16 1.12 16h13.76C15.5 16 16 15.5 16 14.88V1.12C16 .5 15.5 0 14.88 0zM5.9 13.5H3.5V6.5h2.4v7zm-1.2-8.5C4.23 5 3.5 4.27 3.5 3.5S4.23 2 5 2s1.5.73 1.5 1.5S5.77 5 5 5zm10 8.5h-2.4v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.3v4H8.5V6.5h2.3v1.1c1.1-2 3.7-1.9 3.7 1.1v4.8z"
                        fill="#000" // Black color
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">Made with ❤️ by Abhijit Chakraborty</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
