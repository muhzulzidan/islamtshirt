import React, { Component } from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import IslamArab from "../images/svg/islamarab.svg"
import IslamArabStroke from "../images/svg/islamArabStroke.svg"

import Carausels from '../components/carausels'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Layout from '../layouts'

const AboutPage = (location) => {
    return (
        <Layout location={location}>
            <div className="about-page">
                <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <h1>About</h1>
            </div>
        </Layout>
    )
}

export default AboutPage
