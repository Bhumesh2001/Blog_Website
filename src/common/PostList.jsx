import React from "react"
import { Link } from "gatsby"

import bg1 from "../assets/images/post-bg/bg-1.png"
import bg2 from "../assets/images/post-bg/bg-2.png"
import bg3 from "../assets/images/post-bg/bg-3.png"
import bg4 from "../assets/images/post-bg/bg-4.png"
import bg5 from "../assets/images/post-bg/bg-5.png"
import bg6 from "../assets/images/post-bg/bg-6.png"

const PostList = () => {
  return (
    <React.Fragment>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <Link
          to="/left-sidebar"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Fashion</span>
          <span>(20)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <Link
          to="/right-sidebar"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Food</span>
          <span>(5)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg6})` }}
      >
        <Link
          to="/post-format-text"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Latest</span>
          <span>(8)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <Link
          to="/post-format-audio"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Popular</span>
          <span>(4)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <Link
          to="/post-format-gallery"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Spote</span>
          <span>(9)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        <Link
          to="/left-sidebar"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Spote</span>
          <span>(11)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <Link
          to="/post-format-standard"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Top Story</span> <span>(7)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <Link
          to="/right-sidebar"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Travel</span>
          <span>(10)</span>
        </Link>
      </div>
      <div
        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#ff3750] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#ff3750] dark:hover:text-white"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <Link
          to="post-format-video"
          className="flex justify-between font-semibold text-gray-100 hover:text-[#ff3750]"
        >
          <span>Video</span>
          <span>(15)</span>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default PostList
