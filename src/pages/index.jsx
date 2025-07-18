import React, { useEffect } from "react"
import Aos from "aos"
import Seo from "../components/seo"
// import Section1 from "../common/view/index/Section1"
import Section2 from "../common/view/index/Section2"
import Section3 from "../common/view/index/Section3"
import Section4 from "../common/view/index/Section4"
import Section5 from "../common/view/index/Section5"
import Section6 from "../common/view/index/Section6"
import Section7 from "../common/view/index/Section7"
import Section8 from "../common/view/index/Section8"
import Section10 from "../common/view/index/Section10"
import Layout from "../common/layout/Layout"

const Index = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", offset: 100, once: false })

    // refresh aos on scroll
    const handleScroll = () => {
      Aos.refresh()
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <React.Fragment>
      <Layout>
        {/* <Section1 /> */}
        <Section2 />
        <Section3 />
        <Section6 />
        <Section10 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Section8 />
      </Layout>
    </React.Fragment>
  )
};

export const Head = () => <Seo title="Index" />

export default Index
