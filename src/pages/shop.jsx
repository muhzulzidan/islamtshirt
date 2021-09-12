import React from 'react'
// import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '../components/ProductGrid'
import IslamArab from "../images/svg/islamarab.svg"

import Layout from '../layouts'

const ShopPage = (location) => (
    <Layout location={location}>
        <div className="shop-page">
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div className="hero" >
                <h1 className="hidden" >Shop</h1>
                <h2>Shop</h2>
                <IslamArab />
            </div>
            <div className="creative" >
                Search
                Filter
                Sort
            </div>
            <div className="product" >
                <ProductGrid location={location}/>
            </div>
        </div>
    </Layout>
)

export default ShopPage
