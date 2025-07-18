import React from "react"
import Header from "../../components/headers/Header"
import Footer from "../../components/footers/Footer"
import Footer5 from "../../components/footers/Footer5"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
       <Footer5 />
    </React.Fragment>
  )
}

export default Layout
