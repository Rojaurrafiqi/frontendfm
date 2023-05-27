import React, { useState } from "react";
import filemedisLogo from "../../images/logo-filemedis.png";
import minimize from "../../images/minimize.png";
import maximize from "../../images/maximize.png";

const Header = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    const element = document.documentElement;
    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };
  return (
    <div>
      <nav class="bg-white  border-b-2 ">
        <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-14">
            {/* <!-- kiri --> */}
            <div class="flex-shrink-0 ml-0">
              <img src={filemedisLogo} width="150px" alt="Logo" />
            </div>

            {/* <!-- Navigation links --> */}
            <div class="hidden md:block">
              <ul class="flex space-x-4">
                <li>
                  {isFullscreen ? (
                    <img
                      src={minimize}
                      className="cursor-pointer"
                      onClick={handleFullscreen}
                      width="30px"
                    />
                  ) : (
                    <img
                      className="cursor-pointer"
                      src={maximize}
                      onClick={handleFullscreen}
                      width="22px"
                    />
                  )}
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-emerald">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-emerald">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-emerald">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button">
                <svg
                  class="w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg
                  class="w-6 h-6 text-white"
                  x-show="showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
        <div class="hidden mobile-menu">
          <ul class="px-2 pt-2 pb-3 space-y-1">
            <li>
              <a
                href="#"
                class="block text-white font-semibold hover:bg-gray-700 py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block text-white font-semibold hover:bg-gray-700 py-2"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block text-white font-semibold hover:bg-gray-700 py-2"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block text-white font-semibold hover:bg-gray-700 py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
