import { Link } from "gatsby"
import React from "react"
import layout25 from "../../../assets/images/layout-2/25.jpg"
import { latestpost, listdata } from "../../data"

const Section8 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-2" data-aos="fade-up">
              <div className="p-5 bg-white rounded-lg dark:bg-gray-800/70">
                <div className="mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Latest Post
                  </h5>
                </div>

                {latestpost &&
                  latestpost.map(item => (
                    <div
                      className="flex flex-col mb-5 lg:flex-row sm:mb-3 md:mb-6"
                      key={item.id}
                    >
                      <Link to="/single-post">
                        <img
                          className="h-auto sm:max-w-xs lg:w-64 rounded-2xl"
                          src={item.pic}
                          alt="post "
                        />
                      </Link>
                      <div className="pt-2 lg:ms-4">
                        <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                          {item.category}
                        </div>
                        <Link to="/single-post">
                          <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                            {item.desc}
                          </h5>
                        </Link>
                        <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                          Venus has a runaway greenhouse effect. I kind of want
                          to know The what happened there because Technology And
                          Runway.
                        </p>
                        <div className="block gap-4 text-[12px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2 lg:me-1"> John Doe</span>
                          <span>7 Months Ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className="col-span-3 sm:col-span-2 md:col-span-1"
              data-aos="fade-left"
            >
              <figure className="relative cursor-pointer">
                <Link to="/single-post">
                  <img
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                    src={layout25}
                    alt="blog"
                  />
                </Link>
                <figcaption className="absolute px-4 text-center text-md bottom-6">
                  <div className="max-w-sm text-lg font-medium leading-normal text-white capitalize">
                    National Geographic Reveals ‘Best Of The World 2022’ Travel
                    List{" "}
                  </div>
                  <div className="block gap-4 text-[14px] text-gray-200 uppercase">
                    <span className="me-2 lg:me-1"> John Doe</span>
                    <span>7 Months Ago</span>
                  </div>
                </figcaption>
              </figure>
              <ul className="mt-8 md:mt-8">
                {listdata &&
                  listdata.map(item => (
                    <li
                      className={
                        item.top === true
                          ? "py-1 sm:pb-2 sm:pt-0"
                          : "py-1 sm:py-2"
                      }
                      key={item.id}
                    >
                      <div className="flex items-center md:block lg:flex">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-2xl"
                            src={item.pic}
                            alt="Neil"
                          />
                        </div>
                        <div className="flex-1 min-w-0 mt-2 ms-4 md:ms-0 lg:ms-4 lg:mt-0">
                          <Link
                            to="/single-post"
                            className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]"
                          >
                            {item.desc}
                          </Link>
                          <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                            <span className="me-2 lg:me-1"> John Doe</span>
                            <span>7 Months Ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section8
