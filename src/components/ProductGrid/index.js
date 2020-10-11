// import React, { useContext } from 'react'
// import { useStaticQuery, graphql, Link } from 'gatsby'

// import StoreContext from '~/context/StoreContext'
// import {
//   Grid,
//   Product,
//   Title,
//   PriceTag,
//   ISBN
// } from './styles'
// // import { Img } from '~/utils/styles'

// const ProductGrid = () => {
//   const { store: {checkout} } = useContext(StoreContext)
//   const { allDictionariesJson } = useStaticQuery(
//     graphql`
//       query DictionariesQuery{
//         allDictionariesJson{
//             edges{
//               node{
//                 id
//                 name
//                 ISBN
//                 price
//               }
//             }
//         }
//     }`
//     //   query {
//     //     allShopifyProduct(
//     //       sort: {
//     //         fields: [createdAt]
//     //         order: DESC
//     //       }
//     //     ) {
//     //       edges {
//     //         node {
//     //           id
//     //           title
//     //           handle
//     //           createdAt
//     //           images {
//     //             id
//     //             originalSrc
//     //             localFile {
//     //               childImageSharp {
//     //                 fluid(maxWidth: 910) {
//     //                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//     //                 }
//     //               }
//     //             }
//     //           }
//     //           variants {
//     //             price
//     //           }
//     //         }
//     //       }
//     //     }
//     //   }
//     // `
//   )

//   const getPrice = price => Intl.NumberFormat(undefined, {
//     currency: checkout.currencyCode ? checkout.currencyCode : 'INR',
//     minimumFractionDigits: 2,
//     style: 'currency',
//   }).format(parseFloat(price ? price : 0))

//   return (
//     <Grid>
//       {allDictionariesJson.edges
//         // ? allDictionariesJson.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
//           ? allDictionariesJson.edges.map(({ node: { id, handle, title, isbn, variants: [firstVariant] } }) => (
//           <Product key={id} >
//             {/* <Link to={`/product/${handle}/`}>
//               {firstImage && firstImage.localFile &&
//                 (<Img
//                   fluid={firstImage.localFile.childImageSharp.fluid}
//                   alt={handle}
//                 />)}
//             </Link> */}
//             <Title>{title}</Title>
//             <ISBN>{isbn}</ISBN>
//             <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
//           </Product>
//         ))
//         : <p>No Products found!</p>}
//     </Grid>
//   )
// }

// export default ProductGrid
