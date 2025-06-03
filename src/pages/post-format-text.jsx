import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"

const PostFormatText = () => {
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
        <BreadCrumb title="Post Format Text Only" titleType="Post" />

        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h3 className="text-xl font-medium dark:text-white dark:hover:text-[#ff3750]">
              Luctus Nec Ullamcorper Mattis Pulvinar Dapibus Leo
            </h3>
          </div>
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
              <h3 className="text-xl mb-4 dark:text-white">
                Unordered list style?
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                The refractor telescope uses a convex lens to focus the light on
                the eyepiece.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                The reflector telescope has a concave lens which means it bends
                in. It uses mirrors to focus the image that you eventually see.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Collimation is a term for how well tuned the telescope is to
                give you a good clear image of what you are looking at. You want
                your telescope to have good collimation so you are not getting a
                false image of the celestial body.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Aperture is a fancy word for how big the lens of your telescope
                is. But it’s an important word because the aperture of the lens
                is the key to how powerful your telescope is. Magnification has
                nothing to do with it, its all in the aperture.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Focuser is the housing that keeps the eyepiece of the telescope,
                or what you will look through, in place. The focuser has to be
                stable and in good repair for you to have an image you can rely
                on.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Mount and Wedge. Both of these terms refer to the tripod your
                telescope sits on. The mount is the actual tripod and the wedge
                is the device that lets you attach the telescope to the mount.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                Want to see more Dribbble shots?
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
              <h3 className="text-xl mb-4  dark:text-white">
                Want to see more Dribbble shots?
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                My hero when I was a kid was my mom. Same for everyone I knew.
                Moms are untouchable. They’re elegant, smart, beautiful,
                kind…everything we want to be. At 29 years old, my favorite
                compliment is being told that I look like my mom. Seeing myself
                in her image, like this daughter up top, makes me so proud of
                how far I’ve come, and so thankful for where I come from.
              </p>
            </div>

            {/*  */}

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

export const Head = () => <Seo title="Post Format Text" />

export default PostFormatText
