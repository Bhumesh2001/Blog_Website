import { Link } from "gatsby"
import React from "react"

const Announcement = () => {
  return (
    <React.Fragment>
      <div className="bg-[#062DB9] text-white py-2">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between">
            <div>
              <ul className="flex items-center">
                <li className="px-4 py-1 text-xs">
                  <i className="ri-cloud-line"></i> 9.4 Los Angeles | Wednesday,
                  March 20, 2024
                </li>
                <li className="text-xs border-r rtl:border-l rtl:border-r-0 px-4 md:px-2 lg:px-4 hidden md:block">
                  {" "}
                  <Link to="/login" className="hover:text-slate-300">
                    Sign in / Join
                  </Link>{" "}
                </li>
                <li className="text-xs border-r rtl:border-l rtl:border-r-0 px-4 md:px-2 lg:px-4 hidden md:block">
                  {" "}
                  <Link to="/about" className="hover:text-slate-300">
                    About Us
                  </Link>{" "}
                </li>
                <li className="hidden px-4 text-xs md:block md:px-2 lg:px-4">
                  {" "}
                  <Link to="/contact" className="hover:text-slate-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-2 md:space-x-8 rtl:md:space-x-reverse">
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-twitter-x-fill"></i>
                  </Link>{" "}
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-rss-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-youtube-fill"></i>
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Announcement
