import React, { Component } from 'react'

import SEO from '~/components/seo'

import Layout from '../layouts'

const Blogs = (location) => {
    return (
        <Layout location={location}>
            <div className="about-page">
                <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <h1>Coming Soon</h1>
                <div className="contentAbout">
                    Nothing Yet
                </div>
            </div>
        </Layout>
    )
}

export default Blogs
