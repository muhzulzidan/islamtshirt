import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../../layouts'

const ProductPage = ({ data }) => {
  const product = data.product
  return (
    <Layout>
      <SEO title={product.title} description={product.description} />
      <div className="productPage" >
        <div className="productPageImage" >
            {product.images.map(image => (
              <GatsbyImage
                image={image.gatsbyImageData}
                key={image.id}
                alt={product.title}
              />
            ))}
          </div>
        <div className="productPageDesc" >
            <h2>{product.title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    product : shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        gatsbyImageData
      }
    }
  }
`

export default ProductPage
