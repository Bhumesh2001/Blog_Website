import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import gallery1 from "../assets/images/15.jpg"
import gallery2 from "../assets/images/25.jpg"
import gallery3 from "../assets/images/33.jpg"
import gallery4 from "../assets/images/44.jpg"
import gallery5 from "../assets/images/54.jpg"
import gallery6 from "../assets/images/63.jpg"
import gallery7 from "../assets/images/72.jpg"
import gallery8 from "../assets/images/8.jpg"
import gallery9 from "../assets/images/9.jpg"
import gallery10 from "../assets/images/102.jpg"
import gallery11 from "../assets/images/1110.jpg"
import gallery12 from "../assets/images/129.jpg"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Gallery" titleType="Pages" />

        <div className="container mx-auto mt-16 px-4">
          <div className="grid">
            <div>
              <div className="">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery1}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery2}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery3}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery4}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery5}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery6}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery7}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery8}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery9}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery10}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery11}
                      alt="grid "
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery12}
                      alt="grid "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Gallery" />

export default GalleryPage
