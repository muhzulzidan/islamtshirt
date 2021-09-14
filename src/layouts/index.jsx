import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'
import Navigation from '~/components/Navigation'
import Footer from '../components/footer'

import FloatingWhatsApp from 'react-floating-whatsapp'
// import 'react-floating-whatsapp/dist/index.css'
import me from "../images/me.png"
import "../style/wa/index.css"

const Layout = ({ children }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq('track', 'Lead', { currency: "USD", value: 9.99 });
      }
    }
  }, [])

  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
            me : file(name: {eq: "me"}) {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        `}
        render={data => (
          <div className="layout">
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <div>
              {children}
            </div>
            <Footer />
            <FloatingWhatsApp phoneNumber="+6281354789375" accountName="muhzulzidan" avatar={me} />
          </div>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
