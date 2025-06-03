import React from "react"
import Seo from "../components/seo"
import BlogPosts from "../common/BlogPosts"
import Social from "../common/Social"
import PostList from "../common/PostList"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import postData from "../common/data/postData"

const RightSidebar = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Right Sidebar" titleType="blog" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <BlogPosts postData={postData} />
            </div>

            <div className="col-span-1 overflow-hidden">
              <form className="flex gap-1">
                <input
                  type="search"
                  className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="search..."
                />
                <button
                  className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  aria-label="Search"
                >
                  <i className="ri-search-line"></i>
                </button>
              </form>

              {/* social & newsletter */}
              <Social />

              {/* <!-- post list--> */}
              <PostList />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Right Sidebar" />

export default RightSidebar
