import { Link } from "gatsby"
import React from "react"
import { fastfood } from "../../data"

const Section7 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Fast Foods
            </h5>
          </div>
          <div className="grid grid-cols-7 gap-8">
            <div
              className="col-span-7 md:col-span-4 lg:col-span-5"
              data-aos="fade-right"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {fastfood &&
                  fastfood.map(item => (
                    <figure className="relative cursor-pointer" key={item.id}>
                      <Link to="/single-post">
                        <img
                          className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                          src={item.pic}
                          alt="post"
                        />
                      </Link>
                      <figcaption className="absolute px-4 text-md bottom-6">
                        <div className="text-sm text-white">Food</div>
                        <div className="text-md leading-normal text-white capitalize max-w-sm font-medium hover:text-[#062db9] dark:hover:text-[#478cff]">
                          {" "}
                          <Link to="/single-post">
                            Spicy Crispy Our Restaurant Food Recipe Fast Food
                          </Link>
                        </div>
                        <div className="block gap-4 text-[11px] text-gray-200 uppercase">
                          <span className="me-2 lg:me-1"> John Doe</span>
                          <span>7 Months Ago</span>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
              </div>
            </div>
            <div
              className="col-span-7 md:col-span-3 lg:col-span-2"
              data-aos="fade-left"
            >
              <div className="p-5 bg-white dark:bg-gray-800/70 rounded-xl">
                <div className="mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Join With Us
                  </h5>
                </div>
                <ul>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#062DB9] hover:bg-[#052494] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="text-lg ri-facebook-circle-fill"></i>
                            <span className="">Facebook</span>
                          </div>
                          <div>42.2k</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#20A1EB] hover:bg-[#128cd3] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="ri-twitter-x-line"></i>
                            <span className="">Twitter</span>
                          </div>
                          <div>10.1m</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#830899] hover:bg-[#680679] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="ri-twitch-line"></i>
                            <span className="">Twitch</span>
                          </div>
                          <div>22.9k</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-gradient-to-r from-[#863FA6] from-10% via-[#E12C61] via-50% to-[#F46F46] to-90% hover:from-[#683181] hover:from-10% hover:via-[#c91d50] hover:via-50% hover:to-[#f25626] hover:to-90% text-white text-left rounded-full py-3.5 px-7 mb-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="ri-instagram-line"></i>
                            <span className="">Instagram</span>
                          </div>
                          <div>50.2k</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section7
