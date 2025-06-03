import React from "react"
import imageNine7 from "../../assets/images/layout-10/9/7.png"
import imageNine1 from "../../assets/images/layout-10/9/1.jpg"
import imageNine2 from "../../assets/images/layout-10/9/2.jpg"
import imageNine3 from "../../assets/images/layout-10/9/3.jpg"
import imageNine4 from "../../assets/images/layout-10/9/4.jpg"
import imageNine5 from "../../assets/images/layout-10/9/5.jpg"
import imageNine6 from "../../assets/images/layout-10/9/6.jpg"
import { Link } from "gatsby"

const Footer4 = () => {
  return (
    <React.Fragment>
      <footer className="mt-8 bg-black" data-aos="fade-up">
        <div className="container px-4 mx-auto custom-container">
          <div className="pt-8">
            <div className="grid grid-cols-12 gap-8">
              {/* About Us */}
              <div className="col-span-10 xl:col-span-3 sm:col-span-6 md:col-span-12">
                <div className="mb-4">
                  <h5 className="text-lg font-bold leading-none text-white capitalize xl:text-2xl md:text-xl">
                    About Us
                  </h5>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <div>
                  <img className="mt-5" src={imageNine7} alt="7" />
                </div>
              </div>

              {/* Latest Choice */}
              <div className="col-span-9 xl:col-span-3 md:col-span-4">
                <div className="mb-4">
                  <span className="block mb-1 text-white text-md">
                    Tops Picks
                  </span>
                  <h5 className="text-lg font-bold leading-none text-white xl:text-2xl md:text-xl">
                    Latest Choice
                  </h5>
                </div>
                <ul>
                  {[1, 2, 3].map(item => (
                    <li className="py-1 sm:py-2" key={item}>
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-lg"
                            src={
                              item === 1
                                ? imageNine1
                                : item === 2
                                  ? imageNine2
                                  : imageNine3
                            }
                            alt={item}
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <Link
                            to="/single-post"
                            className="text-sm font-medium text-white hover:text-[#f7573d] dark:hover:text-[#f7573d]"
                          >
                            Spicy Crispy Our Restaurant Food Recipe Fast Food
                          </Link>
                          <div className="block gap-4 text-[11px] text-white uppercase">
                            <span className="me-2 lg:me-1">John Doe</span>
                            <span>7 Months Ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Choice */}
              <div className="col-span-9 xl:col-span-3 md:col-span-4">
                <div className="mb-4">
                  <span className="block mb-1 text-white text-md">
                    Tops Picks
                  </span>
                  <h5 className="text-lg font-bold leading-none text-white xl:text-2xl md:text-xl">
                    Popular Choice
                  </h5>
                </div>
                <ul>
                  {[4, 5, 6].map(item => (
                    <li className="py-1 sm:py-2" key={item}>
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-lg"
                            src={
                              item === 4
                                ? imageNine4
                                : item === 5
                                  ? imageNine5
                                  : imageNine6
                            }
                            alt={item}
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <Link
                            to="/single-post"
                            className="text-sm font-medium text-white hover:text-[#f7573d] dark:hover:text-[#f7573d]"
                          >
                            Spicy Crispy Our Restaurant Food Recipe Fast Food
                          </Link>
                          <div className="block gap-4 text-[11px] text-white uppercase">
                            <span className="me-2 lg:me-1">John Doe</span>
                            <span>7 Months Ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Browse */}
              <div className="col-span-9 xl:col-span-3 md:col-span-4 lg:col-span-3">
                <div className="mb-4">
                  <span className="block mb-1 text-white text-md">
                    Helps & Info
                  </span>
                  <h5 className="text-lg font-bold leading-none text-white xl:text-2xl md:text-xl">
                    Browse
                  </h5>
                </div>
                <div className="flex justify-between">
                  {Array(2)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx}>
                        <h2 className="mb-2 text-lg font-semibold text-white">
                          Categories:
                        </h2>
                        <ul className="max-w-md space-y-1 text-white list-none list-inside">
                          {["Sports", "Technology", "Travels"].map(category => (
                            <li key={category}>
                              <Link
                                to="#"
                                className="hover:text-[#f7573d] text-base dark:hover:text-[#f7573d]"
                              >
                                {category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <h2 className="mt-6 mb-2 text-lg font-semibold text-white">
                          Services:
                        </h2>
                        <ul className="max-w-md space-y-1 text-white list-none list-inside">
                          {["Delivery", "Supports", "Discounts"].map(
                            service => (
                              <li key={service}>
                                <Link
                                  to="#"
                                  className="hover:text-[#f7573d] text-base dark:hover:text-[#f7573d]"
                                >
                                  {service}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-4 mx-auto text-xs text-center text-white custom-container">
          <p>Copyright &copy; 2024 Blogs News. All Rights Reserved</p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer4
