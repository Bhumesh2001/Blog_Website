import React from "react"
import Header5 from "../../components/headers/Header5"
import Footer5 from "../../components/footers/Footer5"

const Layout5 = ({ children }) => {
  return (
    <React.Fragment>
      <Header5 />
      {children}
      <Footer5 />
    </React.Fragment>
  )
}

export default Layout5
