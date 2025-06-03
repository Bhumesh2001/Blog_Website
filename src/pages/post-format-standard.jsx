import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import story1 from "../assets/images/post-standard-1.jpg"
import story2 from "../assets/images/post-standard-2.jpg"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"

const PostFormatStandard = () => {
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
        <BreadCrumb title="Post Format Standard" titleType="Post" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-8">
            <div className="relative mb-8 md:mb-0">
              <div className="relative">
                <Link to="/single-post">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={story1}
                    alt="right"
                  />
                  <div className="block-hover"></div>
                </Link>
              </div>
              <div className="absolute w-full bottom-0 p-8">
                <div className="py-4">
                  <div className="bg-[#ff3750] text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                    neursto
                  </div>
                  <div className="font-bold text-xl mb-2 text-white capitalize">
                    vulputate Vivamus Tortor Enim, Semper Et Ornare Sed
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <Link to="/single-post">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={story2}
                    alt="right "
                  />
                  <div className="block-hover"></div>
                </Link>
              </div>
              <div className="absolute w-full bottom-0 p-8">
                <div className="py-4">
                  <div className="bg-[#ff3750] text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                    neurstos
                  </div>
                  <div className="font-bold text-xl mb-2 text-white capitalize">
                    vulputate Vivamus Tortor Enim, Semper Et Ornare Sed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                For those of us who want to say thank you to our moms, it’s not
                always easy to put those big feelings in words. Which is where
                Dribbble comes in.These eight shots crystallize the hard work
                moms put into keeping their kids alive, happy, and healthy. They
                might give you the inspiration you need for filling out that
                card—or stand alone for your mom’s interpretation.Moms are the
                ones who bandage our boo-boos when we’re little and continue to
                take care of us as we get older—often sacrificing their own
                needs so they can help with ours. Cruising on a bike to help
                heal our injuries is the most mom thing one can do.Moms are the
                ones who bandage our boo-boos when we’re little and continue to
                take care of us as we get older—often sacrificing their own
                needs so they can help with ours. Cruising on a bike to help
                heal our injuries is the most mom thing one can do.They’re the
                ones we rely on for playdates and emotional support, homework
                help and babysitting. Moms are the ultimate dependable support.
                Like, hopefully, the button on your jeans.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                Here come the moms in space
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Moms are like…buttons? Moms are like glue. Moms are like pizza
                crusts. Moms are the ones who make sure things happen—from birth
                to school lunch.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                They’re the ones we rely on for playdates and emotional support,
                homework help and babysitting. Moms are the ultimate dependable
                support. Like, hopefully, the button on your jeans.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                My hero when I was a kid was my mom. Same for everyone I knew.
                Moms are untouchable. They’re elegant, smart, beautiful,
                kind…everything we want to be. At 29 years old, my favorite
                compliment is being told that I look like my mom. Seeing myself
                in her image, like this daughter up top, makes me so proud of
                how far I’ve come, and so thankful for where I come from.
              </p>
            </div>

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

export const Head = () => <Seo title="Post Format Standard" />

export default PostFormatStandard
