import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
// import ProductGrid from '../components/ProductGrid'
import IslamArab from "../images/svg/islamarab.svg"
import IslamArabStroke from "../images/svg/islamArabStroke.svg"

// import Carausels from '../components/carausels'
import NewsLetter from '../components/newsletter';
import Layout from '../layouts'
const rustan =  "../images/rustan.jpg"

const IndexPage = ({ data }, location) => {
  return (

    <Layout location={location}>
      <div className="index-page">
        <SEO title="home" />
        <div className="hero" >
          <div className='content'>
            <h1 className="hidden" >ISLAMTSHIRT</h1>
            <h2>SPREAD DAKWAH WITH US</h2>
            <IslamArab /> 
            <Link to="/shop" >Shop Now</Link>
          </div>
          <StaticImage src={rustan} className="rustan"/>
        </div>
        <div className="creative" >
          <IslamArabStroke />
          <h2>GET CREATIVE IN YOUR DAKWAH.</h2>
          <IslamArabStroke />
        </div>
        <div className="product" >
          <h2>OUR TOP PICKS</h2>
          <h3>EXPLORE & SHOP</h3>
          {/* <ProductGrid location={location}/> */}
        </div>
        <div className="aboutUs">
          <GatsbyImage image={data.contentfulAsset.gatsbyImageData} alt="folded islam tshirt muslim series" />
          <div className="sometimesh2">
            <h2>SOMETIMES WE DON’T HAVE TO SAY ANYTHING</h2>
            <div className="child">
              <h3>MISSION</h3>
              <p>Our Mission Is To Spread Dakwah With A Fun Way Like Using Our Fashion To Spread The Word Of Allah</p>
              <Link to="/about" >Learn More</Link>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </Layout>
  )
}

export const query = graphql` 
  query HomePageQuery {
      file(name: {eq: "folded"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    contentfulAsset(title: {eq: "folded"}) {
      gatsbyImageData
    }
  }
`

export default IndexPage
