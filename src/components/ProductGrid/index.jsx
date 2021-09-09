import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import StoreContext from '~/context/StoreContext'
import Carausels from '../carausels'
// import CurrencyConverter from 'react-currency-conv';
// import ExchangeRate from "react-currency-conversion";

const ProductGrid = (location) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                gatsbyImageData
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'IDR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))
  return (
    <div className="productGrid" >
      { location.location.path==="/shop/" ? 
        allShopifyProduct.edges ? (
          allShopifyProduct.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
                variants: [firstVariant],
              },
            }) => (
              <div key={id}>
                <Link to={`/product/${handle}/`}>
                  <GatsbyImage
                    image={firstImage.gatsbyImageData}
                    alt={handle}
                  />
                </Link>
                <h2>{title}</h2>
                <p>{getPrice(firstVariant.price)}</p>
                {/* <ExchangeRate from='IDR' to='USD' value={`${firstVariant.price}`}/> */}

              </div>
            )
          )
        ) : (
          <p>No Products found!</p>
        ):
        <Carausels className="carauselsProductGrid">
          {allShopifyProduct.edges ? (
            allShopifyProduct.edges.map(
              ({
                node: {
                  id,
                  handle,
                  title,
                  images: [firstImage],
                  variants: [firstVariant],
                },
              }) => (
                <div key={id}>
                  <Link to={`/product/${handle}/`}>
                    <GatsbyImage
                      image={firstImage.gatsbyImageData}
                      alt={handle}
                    />
                  </Link>
                  <h2>{title}</h2>
                  <p>{getPrice(firstVariant.price)}</p>
                  {/* <ExchangeRate from='IDR' to='USD' value={`${firstVariant.price}`}/> */}

                </div>
              )
            )
          ) : (
            <p>No Products found!</p>
          )}
        </Carausels>  
      
      }

    </div>
  )
}

export default ProductGrid
