import React, { useState, useEffect } from "react";
import Trinity_Logo_White from "../assets/logo/Trinity_Logo_White.png";

import { useLocation, useNavigate } from "react-router-dom";
import { FaWheelchair } from "react-icons/fa";


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      // Check if the current pathname includes the provided route
      // if (location.pathname.includes(route)) {
      return true;
    }
  }
  return (
    // bg-[#408bc0]
    <div className="">
      {/* min-h-[200vh] */}
      <header
        className={`fixed left-[0] right-[0] top-[0] [transition:all_.4s_ease-in-out] z-50
                ${scrolled &&
          "bg-[#408bc0] rounded-tl-[0] rounded-br-[35%] rounded-tr-[0] rounded-bl-[35%]"
          }`}
      >
        {/* bg-[#408bc0] rounded-tl-[0] rounded-br-[35%] rounded-tr-[0] rounded-bl-[35%] */}

        {/* <a className='absolute right-[0] top-[0] bg-[#2ecc71] text-[#FFF] text-[1.28rem] leading-[40px] text-center w-[40px] h-[40px] rounded-tl-[0] rounded-br-[0] rounded-tr-[0] rounded-bl-[50%]'>
    <FaWheelchair />
 </a> */}
        <a className="absolute right-[0] top-[0] bg-[#2ecc71] text-[#FFF] text-[1.28rem] w-[45px] h-[45px] rounded-tl-[0] rounded-br-[0] rounded-tr-[0] rounded-bl-[50%] flex items-center justify-center">
          <FaWheelchair />
        </a>
        <div
          className="flex items-center  p-[.5rem] max-w-[1140px]
          w-full pr-[15px] pl-[15px] mr-auto ml-auto"
        >
          <a className="pt-[.3125rem] pb-[.3125rem] mr-4">
            <img
              src={Trinity_Logo_White}
              className="h-[50px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </a>
          <div>
            <ul className="flex space-x-6 ">
              <li
                className={`cursor-pointer py-3 px-1 text-lg font-semibold text-white 
                    border-b-[3px] border-b-transparent ${pathMatchRoute("/solar") &&
                  "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/solar")}
              >
                Solar
              </li>
              <li
                className={`cursor-pointer py-3 px-1 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent ${pathMatchRoute("/roofing") &&
                  "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/roofing")}
              >
                Roofing
              </li>
              <li
                className={`cursor-pointer py-3 px-1 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent ${pathMatchRoute("/batteries") &&
                  "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/batteries")}
              >
                Batteries
              </li>
              <li
                className={`cursor-pointer py-3 px-1 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent ${pathMatchRoute("/why-trinity") &&
                  "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/why-trinity")}
              >
                Why Trinity
              </li>
              <li
                className={`cursor-pointer py-3 px-1 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent ${pathMatchRoute("/community-partners") &&
                  "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/community-partners")}
              >
                Community Partners
              </li>
              <li
                className={`cursor-pointer py-3 px-1 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent ${pathMatchRoute("/careers") &&
                  "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/careers")}
              >
                Careers
              </li>
              <li
                className={`cursor-pointer text-lg font-semibold border-b-[3px] border-b-transparent 
            ${pathMatchRoute("/contact-us")
                    ? "bg-[#2ecc71] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                    : "bg-[#ffffff] !text-[#000000] ml-[15px] rounded-2xl leading-[0.25] mx-0 my-[10px] px-[20px] py-[13px]"
                  }`}
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </header>
      


     

    </div>
  );
}
