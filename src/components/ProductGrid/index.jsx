// import React, { useContext } from 'react'
// import { useStaticQuery, graphql, Link } from 'gatsby'
// import { GatsbyImage } from "gatsby-plugin-image"

// import StoreContext from '~/context/StoreContext'
// import Carausels from '../carausels'
// // import CurrencyConverter from 'react-currency-conv';
// // import ExchangeRate from "react-currency-conversion";
// // import media queries
// import { useMediaQuery } from 'react-responsive'

// const ProductGrid = (location) => {

//   const {
//     store: { checkout },
//   } = useContext(StoreContext)
//   const { allShopifyProduct } = useStaticQuery(
//     graphql`
//       query {
//         allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
//           edges {
//             node {
//               id
//               title
//               handle
//               createdAt
//               images {
//                 id
//                 originalSrc
//                 gatsbyImageData
//               }
//               variants {
//                 price
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   const getPrice = price =>
//     Intl.NumberFormat(undefined, {
//       currency: checkout.currencyCode ? checkout.currencyCode : 'USD',
//       minimumFractionDigits: 2,
//       style: 'currency',
//     }).format(parseFloat(price ? price : 0))

//   const isMobile = useMediaQuery({ maxWidth: 767 })



//   return (
//     <div className={`productGrid ${location.location.path === "/shop/" ? "productGridShop" : null}`} >

//       {isMobile ? console.log("hey") : console.log("nah")}

//       { location.location.path==="/shop/" ?
//         allShopifyProduct.edges ? (
//           allShopifyProduct.edges.map(
//             ({
//               node: {
//                 id,
//                 handle,
//                 title,
//                 images: [firstImage],
//                 variants: [firstVariant],
//               },
//             }) => (
//               <div key={id}>
//                 <Link to={`/product/${handle}/`}>
//                   <GatsbyImage
//                     image={firstImage.gatsbyImageData}
//                     alt={handle}
//                     className="productImage"
//                   />
//                 </Link>
//                 <h2>{title}</h2>
//                 <p>{getPrice(firstVariant.price)}</p>
//                 {/* <ExchangeRate from='IDR' to='USD' value={`${firstVariant.price}`}/> */}

//               </div>
//             )
//           )
//         ) : ( <p>No Products found!</p> ) 
//         :
//         isMobile ? ( 
//           <Carausels className="carauselsProductGrid" >
//           {allShopifyProduct.edges ? (
//             allShopifyProduct.edges.map(
//               ({
//                 node: {
//                   id,
//                   handle,
//                   title,
//                   images: [firstImage],
//                   variants: [firstVariant],
//                 },
//               }) => (
//                 <div key={id}>
//                   <Link to={`/product/${handle}/`}>
//                     <GatsbyImage
//                       image={firstImage.gatsbyImageData}
//                       alt={handle}
//                     />
//                   </Link>
//                   <h2>{title}</h2>
//                   <p>{getPrice(firstVariant.price)}</p>
//                   {/* <ExchangeRate from='IDR' to='USD' value={`${firstVariant.price}`}/> */}

//                 </div>
//               )
//             )
//           ) : (
//             <p>No Products found!</p>
//           )}
//         </Carausels> ) : ( 
//             <Carausels className="carauselsProductGrid carauselsProductGrid_mobile"  >
//               {allShopifyProduct.edges ? (
//                 allShopifyProduct.edges.map(
//                   ({
//                     node: {
//                       id,
//                       handle,
//                       title,
//                       images: [firstImage],
//                       variants: [firstVariant],
//                     },
//                   }) => (
//                     <div key={id}>
//                       <Link to={`/product/${handle}/`}>
//                         <GatsbyImage
//                           image={firstImage.gatsbyImageData}
//                           alt={handle}
//                         />
//                       </Link>
//                       <h2>{title}</h2>
//                       <p>{getPrice(firstVariant.price)}</p>
//                       {/* <ExchangeRate from='IDR' to='USD' value={`${firstVariant.price}`}/> */}

//                     </div>
//                   )
//                 )
//               ) : (
//                 <p>No Products found!</p>
//               )}
//             </Carausels>
//             )

//       }

//     </div>
//   )
// }

// export default ProductGrid


import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import StoreContext from '~/context/StoreContext'
import Carausels from '../carausels'
// import CurrencyConverter from 'react-currency-conv';
// import ExchangeRate from "react-currency-conversion";
// import media queries
import { useMediaQuery } from 'react-responsive'
import { node } from 'prop-types'

const ProductGrid = (location) => {
    function currencyFormat(num) {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    
    const { allContentfulIslamTshirt } = useStaticQuery(
        graphql`
      query {
        allContentfulIslamTshirt {
            edges {
                node {
                    title
                    slug
                    harga
                    products {
                        gatsbyImageData
                    }
                }
            }
        }
      }
    `
    )

    // const isMobile = useMediaQuery({ maxWidth: 767 })



    return (
        <div className={`productGrid ${location.location.path === "/shop/" ? "productGridShop" : null}`} >

            {/* {isMobile ? console.log("hey") : console.log("nah")} */}
            {/* {location.location.path ? console.log(allContentfulIslamTshirt ) : console.log("nah")} */}

            {location.location.path === "/shop/" ?

                allContentfulIslamTshirt.edges.map((node) => (

                    <div key={node.node.slug}>
                        {console.log(node.node.products[0])}
                        {/* <Link to={`/product/${node.node.slug}/`}> */}
                        <a  href='https://api.whatsapp.com/send?phone=+6281354789375&text=halo,%20saya%20mau%20pesan%20kaos%20islami'>
                            <GatsbyImage
                                image={getImage(node.node.products[0])}
                                alt={node.node.title}
                                className="productImage"
                            />
                        </a>
                        
                        <h2 style={{ marginTop: ".5rem" }}>{node.node.title}</h2>
                        <p>{currencyFormat(node.node.harga)}</p>
                        {/* <p>{getPrice(firstVariant.price)}</p> */}

                        {/* <ExchangeRate from='IDR' to='USD' value={`${firstVariant.price}`}/> */}

                    </div>
                )) : (null)}

        </div>
    )
}

export default ProductGrid




