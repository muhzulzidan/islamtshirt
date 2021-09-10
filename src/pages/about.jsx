import React, { Component } from 'react'

import SEO from '~/components/seo'

import Layout from '../layouts'

const AboutPage = (location) => {
    return (
        <Layout location={location}>
            <div className="about-page">
                <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <h1>About Us</h1>
                <div className="contentAbout">
                    <p>islamtshirt is a community that strive to spread Dakwah with a creative Way, using fashion to spread The Word Of Allah is one of the way, we choose T shirt, because it is the simple forms of fashion that almost everyone can wear.</p>
                    <br />
                    <p>this movement is new, but we are here to stay.</p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage
