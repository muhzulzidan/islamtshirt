import React, { Component } from 'react'

import SEO from '~/components/seo'

import Layout from '../layouts'

const ShippingPolicy = (location) => {
    return (
        <Layout location={location}>
            <div className="about-page">
                <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <h1> Shipping Policy </h1>
                <div className="contentAbout"> 

                </div>
            </div>
        </Layout>
    )
}

export default ShippingPolicy
