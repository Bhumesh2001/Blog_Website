import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import banner from "../assets/images/video-top-banner.jpg"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"

const PostFormatVideo = () => {
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
        <BreadCrumb title="Post Format Video" titleType="Post" />

        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <Link to="/single-post" target="_blank">
              <img
                className="w-full h-auto max-w-full mt-8 rounded-lg"
                src={banner}
                alt="post banner"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <iframe
                src="https://www.youtube.com/embed/CLkxRnRQtDE"
                title="video"
                frameBorder="0"
                allowFullScreen
                width="1280"
                height="400"
                className="mb-8"
              ></iframe>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                Sed turpis ante, vehicula eget viverra eget, consectetur quis
                felis. Curabitur convallis, magna id lacinia fringilla, neque
                nunc tincidunt massa, eu accumsan massa mi id nulla. Nullam
                posuere elit eu orci euismod fermentum. Vivamus tempor sem ut
                congue ullamcorper. Nam fringilla dui ac ante consectetur, vel
                tristique tortor lacinia. Aliquam erat volutpat. Aliquam
                finibus, neque ut pellentesque sollicitudin, enim sem sodales
                ipsum, vehicula laoreet quam tortor non mauris. Maecenas eget
                est turpis. Integer orci elit, placerat non sem ac, ullamcorper
                scelerisque libero. Nunc nisl sapien, suscipit nec varius eu,
                porttitor sit amet libero. Ut congue metus ut sapien feugiat,
                eget lacinia arcu rhoncus.
              </p>
              <h3 className="mb-4 text-xl dark:text-white">
                <Link to="#">Nullam commodo arcu magna facilisis</Link>
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                Suspendisse ultrices nisl in libero ultrices, id iaculis arcu
                mollis. Aliquam eleifend egestas lacus in suscipit. Quisque nec
                est aliquet sapien dictum consequat non ac tellus. Donec
                condimentum mauris sed justo porttitor, ac hendrerit dui ornare.
                Curabitur sed ex at metus rhoncus hendrerit. Maecenas consequat
                finibus dolor id gravida.
              </p>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla lacinia scelerisque risus
                in molestie. Donec ut diam a dolor rutrum lobortis a eget odio.
                Aliquam eleifend varius laoreet. Praesent tempor lacus nec augue
                sagittis, eget ornare eros viverra. Etiam id tincidunt nisi.
              </p>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                Nunc blandit lacus turpis, et vulputate massa viverra a. Fusce
                hendrerit felis quis velit pretium vulputate. Morbi non eros at
                felis eleifend euismod id at velit. Integer placerat urna
                blandit volutpat pretium. Quisque imperdiet nibh sed dui
                accumsan, ut fringilla eros rutrum. Morbi mauris augue, ornare
                non neque ut, pharetra tincidunt sem. Vestibulum aliquet ligula
                elit, ut molestie augue fermentum eu. Vivamus vel tristique
                orci, sit amet maximus risus. Nam porta lorem a varius rutrum.
              </p>
            </div>

            <div className="col-span-1 overflow-hidden">
              <Social2 />

              <PostList />

              <div className="relative main-title">
                <h2 className="mt-6 mb-6 text-2xl font-semibold lg:ps-4 dark:text-white">
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

export const Head = () => <Seo title="Post Format Video" />

export default PostFormatVideo
