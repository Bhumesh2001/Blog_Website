import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import gallery1 from "../assets/images/13.jpg"
import gallery2 from "../assets/images/26.jpg"
import gallery3 from "../assets/images/113.jpg"
import gallery4 from "../assets/images/115.jpg"
import gallery5 from "../assets/images/311.jpg"
import gallery6 from "../assets/images/118.jpg"
import gallery7 from "../assets/images/120.jpg"
import gallery8 from "../assets/images/315.jpg"
import gallery9 from "../assets/images/411.jpg"
import gallery10 from "../assets/images/222.jpg"
import Seo from "../components/seo"

const MasonryGallery = () => {
  return (
    <Layout5>
      {/* Breadcrumb */}
      <BreadCrumb title="Masonry Gallery" titleType="Pages" />

      <div className="container mx-auto px-4">
        <div className="grid">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery1}
                    alt="masonry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery2}
                    alt="gallry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery3}
                    alt="gallry "
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery4}
                    alt="gallry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery5}
                    alt="masonry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery6}
                    alt="gallry "
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery7}
                    alt="gallry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery8}
                    alt="gallry "
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery5}
                    alt="masonry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery9}
                    alt="gallry "
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery10}
                    alt="gallry "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Masonry Gallery" />

export default MasonryGallery
