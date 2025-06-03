import React from "react"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import Social2 from "../common/Social2"
import Seo from "../components/seo"
import img1 from "../assets/images/0012.jpg"
import img2 from "../assets/images/003.jpg"
import img3 from "../assets/images/005.jpg"
import img4 from "../assets/images/002.jpg"
import img5 from "../assets/images/004.jpg"
import img6 from "../assets/images/006.jpg"
import audioImg1 from "../assets/images/012.jpg"
import audioImg2 from "../assets/images/022.jpg"
import fashion from "../assets/images/032.jpg"
import Layout5 from "../common/layout/Layout5"

const PostFormatAudio = () => {
  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]
  return (
    <React.Fragment>
      <Layout5>
        {/* breadcrumb */}
        <BreadCrumb title="Post Format Audio" titleType="Post" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex mb-5">
              <Link to="/single-post">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={audioImg1}
                  alt="post"
                />
              </Link>
              <div className="flex flex-col ps-4 md:p-4 ">
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2 spt-3">
                  neursto
                </div>
                <h3 className="mb-2 text-md sm:text-xl">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Venenatis Sit Amet Malesuada Ut Malesuad
                  </Link>
                </h3>
                <div className="block md:flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    <i className="ri-user-fill"></i> Admin
                  </span>{" "}
                  <span>
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mb-5">
              <Link to="/single-post">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={audioImg2}
                  alt="post"
                />
              </Link>
              <div className="flex flex-col ps-4 md:p-4 ">
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2 spt-3">
                  neursto
                </div>
                <h3 className="mb-2 text-md sm:text-xl">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Venenatis Sit Amet Malesuada Ut Malesuad
                  </Link>
                </h3>
                <div className="block md:flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    <i className="ri-user-fill"></i> Admin
                  </span>{" "}
                  <span>
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl mb-4 dark:text-white">
                Proin eleifend ligula et metus malesuada
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                sit amet pellentesque orci gravida. Aliquam sed eros eget magna
                porttitor tincidunt. Donec sit amet scelerisque ex. Donec
                dignissim sagittis nunc, ac ornare sem aliquam eu. Quisque ac
                euismod mi. Proin ut metus ut neque malesuada finibus eget a
                dui. Aenean consectetur nunc at dolor suscipit ullamcorper id in
                lacus. Etiam dapibus finibus dolor eget interdum. Nam lacinia
                rutrum purus molestie faucibus. Fusce diam metus, auctor vitae
                vestibulum et, porttitor vitae felis. Praesent aliquam dolor
                nibh. Pellentesque et pellentesque lectus, id pretium lacus.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <Link to="#">
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src={fashion}
                      alt="post"
                    />
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                    Sed et aliquam est, sed blandit lectus. Nullam ligula ex,
                    tempor a lacus non, posuere condimentum elit. Fusce volutpat
                    turpis sed tellus congue, eget sagittis mauris elementum.
                    Curabitur sed tellus odio. Nulla vehicula erat imperdiet
                    lorem auctor, in porta nunc porttitor. Suspendisse eu sapien
                    sed erat consectetur tristique quis non dolor. Fusce sed
                    viverra quam, et efficitur purus. Vestibulum eu nunc in
                    dolor vulputate pulvinar id id nisi. Integer convallis
                    fermentum ligula sit amet ullamcorper. Nunc quis ante ut
                    lectus cursus vestibulum. Quisque efficitur, tellus sed
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-sm text-gray-400 mb-4 leading-6 dark:text-gray-300">
                  sit amet pellentesque orci gravida. Aliquam sed eros eget
                  magna porttitor tincidunt. Donec sit amet scelerisque ex.
                  Donec dignissim sagittis nunc, ac ornare sem aliquam eu.
                  Quisque ac euismod mi. Proin ut metus ut neque malesuada
                  finibus eget a dui. Aenean consectetur nunc at dolor suscipit
                  ullamcorper id in lacus. Etiam dapibus finibus dolor eget
                  interdum. Nam lacinia rutrum purus molestie faucibus. Fusce
                  diam metus, auctor vitae vestibulum et, porttitor vitae felis.
                  Praesent aliquam dolor nibh. Pellentesque et pellentesque
                  lectus, id pretium lacus.
                </p>
              </div>
            </div>

            {/* social */}
            <div className="col-span-1 overflow-hidden">
              <Social2 />

              <PostList />

              <div className="main-title relative">
                <h2 className="text-2xl font-semibold mt-6 mb-6 lg:ps-4 dark:text-white">
                  Most Popular
                </h2>
              </div>
              <MostPopular swiperData={swiperData} />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Post Format Audio" />

export default PostFormatAudio
