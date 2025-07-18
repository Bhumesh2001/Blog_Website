import React from "react"
import insta1 from "../assets/images/layout-2/instagram/01.jpg"
import insta2 from "../assets/images/layout-2/instagram/02.jpg"
import insta3 from "../assets/images/layout-2/instagram/03.jpg"
import insta4 from "../assets/images/layout-2/instagram/04.jpg"
import insta5 from "../assets/images/layout-2/instagram/05.jpg"
import insta6 from "../assets/images/layout-2/instagram/06.jpg"

const Section9 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="zoom-in">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            <div className="col-span-4 sm:col-span-3 lg:col-span-2">
              <img
                src={insta1}
                alt="Instagram"
                className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
              />
            </div>
            <div className="col-span-4 sm:col-span-3 lg:col-span-2">
              <img
                src={insta2}
                alt="Instagram"
                className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
              />
            </div>
            <div className="col-span-4 sm:col-span-3 lg:col-span-2">
              <img
                src={insta3}
                alt="Instagram"
                className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
              />
            </div>
            <div className="col-span-4 sm:col-span-3 lg:col-span-2">
              <img
                src={insta4}
                alt="Instagram"
                className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
              />
            </div>
            <div className="col-span-4 sm:col-span-3 lg:col-span-2">
              <img
                src={insta5}
                alt="Instagram"
                className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
              />
            </div>
            <div className="col-span-4 sm:col-span-3 lg:col-span-2">
              <img
                src={insta6}
                alt="Instagram"
                className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section9
