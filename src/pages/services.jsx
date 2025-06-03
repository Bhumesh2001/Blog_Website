import React from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"
import service from "../assets/images/service.jpg"
import service1 from "../assets/images/14.jpg"
import service2 from "../assets/images/24.jpg"
import service3 from "../assets/images/36.jpg"
import service4 from "../assets/images/46.jpg"
import service5 from "../assets/images/56.jpg"

const Service = () => {
  return (
    <Layout5>
      {/* Breadcrumb */}
      <BreadCrumb title="Services" titleType="Pages" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-6 mb-8 lg:mb-28 mt-8 items-center">
          <div className="">
            <img
              className="h-auto max-w-full rounded-lg w-full"
              src={service1}
              alt="blog post"
            />
          </div>
          <div className="">
            <img
              className="h-auto max-w-full rounded-lg w-full"
              src={service2}
              alt="blog post"
            />
          </div>
          <div className="">
            <h3 className="text-xl sm:text-2xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
              <Link to="#">
                Many variations of passages of Lorem Ipsum available
              </Link>
            </h3>
            <p className="text-gray-400 leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-6 mb-8 lg:mb-28 mt-8">
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-2 md:mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Store Customization
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Passage of Lorem Ipsum, you need to be amet embarrassing.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Web Design & Development
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Passage of Lorem Ipsum, you need to be amet embarrassing.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              {" "}
              theme support
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Passage of Lorem Ipsum, you need to be amet embarrassing.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Powerful Solutions
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Passage of Lorem Ipsum, you need to be amet embarrassing.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Branding And Social Marketing
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Passage of Lorem Ipsum, you need to be amet embarrassing.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              {" "}
              Mobile App Development
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Passage of Lorem Ipsum, you need to be amet embarrassing.
            </p>
          </div>
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg w-full"
            src={service}
            alt="blog post"
          />
        </div>
        <div className="text-center mx-auto my-14 w-full max-w-3xl">
          <h3 className="text-xl md:text-2xl font-medium dark:text-white">
            Aenean sodales pulvinar sem, sit amet vehicula sapien commodo eget.
            Curabitur facilisis dui velit, ac porttitor justo sollicitudin nec.
            Suspendisse pretium posuere diam sed laoreet.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:gap-0 gap-6 mt-8">
          <div>
            <div className="">
              <Link to="#">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={service3}
                  alt=""
                />
              </Link>
              <div className="py-3">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis ligula eu lectus vulputate porttitor sed feugiat
                  nunc. Mauris ac consectetur ante, dapibus gravida tellus.
                  Nullam aliquet eleifend dapibus.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <Link to="#">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={service4}
                  alt=""
                />
              </Link>
              <div className="py-3">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis ligula eu lectus vulputate porttitor sed feugiat
                  nunc. Mauris ac consectetur ante, dapibus gravida tellus.
                  Nullam aliquet eleifend dapibus.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <Link to="#">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={service5}
                  alt=""
                />
              </Link>
              <div className="py-3">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis ligula eu lectus vulputate porttitor sed feugiat
                  nunc. Mauris ac consectetur ante, dapibus gravida tellus.
                  Nullam aliquet eleifend dapibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Services" />

export default Service
