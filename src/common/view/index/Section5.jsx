import { Link } from "gatsby"
import React from "react"
import avatar from "../../../assets/images/avatar.png"
import { leadingdata } from "../../data"

const Section5 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {leadingdata &&
              leadingdata.map(item => (
                <div className="col-span-4 sm:col-span-2" key={item.id}>
                  <div className="text-center">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full rounded-2xl"
                        src={item.pic}
                        alt="post"
                      />
                    </Link>
                    <div className="pt-2">
                      <Link to="/single-post">
                        <h5 className="my-2  text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                          Top view of knife and cutting board with vegetables on
                          gray table Food composition of raw vegetables,
                          chopping
                        </h5>
                      </Link>
                      <p className="mb-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Curabitur tempus urna at turpis
                        condimentum lobortis.
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm dark:text-gray-400">
                        <img
                          src={avatar}
                          alt="avtar"
                          className="rounded-full max-w-10"
                        />
                        <span> Armin vans</span>
                        <span> August 7, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section5
