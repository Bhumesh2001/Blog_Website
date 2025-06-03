import * as React from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import error from "../assets/images/404.jpg"
import BreadCrumb from "../common/BreadCrumb"

const NotFoundPage = () => (
  <Layout5>
    {/* Breadcrumb */}
    <BreadCrumb title="404 PAGE NOT FOUND" titleType="Pages" />

    <div className="container mx-auto mt-16">
      <div className="text-center">
        <div>
          <img
            src={error}
            alt="404"
            className="h-auto max-w-3xl rounded-lg my-0 mx-auto w-full"
          />
        </div>
        <h3 className="my-10 font-bold text-2xl mb-2 dark:text-white">
          Error 404 – Not Found{" "}
        </h3>
        <p className="dark:text-white">
          Sorry, but you are looking for something that isn’t here.
        </p>
      </div>
    </div>
  </Layout5>
)

export const Head = () => <Seo title="404 Page Not Found" />

export default NotFoundPage
