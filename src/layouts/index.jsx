// import React, { useEffect, Suspense } from 'react'
// // import PropTypes from 'prop-types'
// // import { StaticQuery, graphql } from 'gatsby'
// // import loadable from '@loadable/component'
// // import styled from '@emotion/styled'
// // import ContextProvider from '~/provider/ContextProvider'
// import Navigation from '../components/Navigation'
// import Footer from '../components/footer'

// import FloatingWhatsApp from 'react-floating-whatsapp'

// import 'react-floating-whatsapp/dist/index.css'
// import me from "../images/me.png"
// import "../style/wa/index.css"

// // const FloatingWhatsApp = loadable(() => import("react-floating-whatsapp"));
// // const OtherComponent = loadable(() => import('./OtherComponent'))

// const Layout = ({ children }) => {

//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     if (window.fbq != null) {
//   //       window.fbq('track', 'Lead', { currency: "USD", value: 9.99 });
//   //     }
//   //   }
//   // }, [])

  
//   return (
//     // <ContextProvider>
//     // <StaticQuery
//     //   query={graphql`
//     //       query SiteTitleQuery {
//     //         site {
//     //           siteMetadata {
//     //             title
//     //           }
//     //         }
//     //         me : file(name: {eq: "me"}) {
//     //           childImageSharp {
//     //             gatsbyImageData
//     //           }
//     //         }
//     //       }
//     //     `}
//     //   render={data => (
//         <div className="layout">
//           <Navigation />
//           <div>
//             {children}
//           </div>
//           <Footer />
//           <FloatingWhatsApp phoneNumber="+6281354789375" accountName="muhzulzidan" avatar={me} />
//           {/* <Suspense fallback={<div>Loading</div>}> */}
//           {/* </Suspense> */}
//         </div>
//       // )}
//     // />
//     // </ContextProvider>
//   )
// }

// // Layout.propTypes = {
// //   children: PropTypes.node.isRequired,
// // }

// export default Layout


import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/footer'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

import me from "../images/me.png"
// import "react-floating-whatsapp"
// import "../style/wa/index.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <div>
        {children}
      </div>
      <Footer />
      <FloatingWhatsApp phoneNumber="+6281354789375" accountName="muhzulzidan" avatar={me} darkMode="true" />
    </div>
  )
}

export default Layout
