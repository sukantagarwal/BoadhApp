import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { Table, TableHead, TableDetail } from '~/utils/styles'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const PoemsPage = () => (
  <>
    <SEO
      title="Boadh"
      keywords={[`hindi books`, `boadh`, `hindi books in chennai`]}
    />
    <StaticQuery
      query={graphql`
        query PoemsQuery {
          allPoemsJson {
            edges {
              node {
                Code
                ISBN
                Title
                Author
                Binding
                Price
              }
            }
          }
        }
      `}
      render={poems => (
        <div>
          <h1>Poems</h1>
          <Table>
            <tr>
              <TableHead>Code</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Binding</TableHead>
              <TableHead>Price</TableHead>
            </tr>
            {getBookTable(poems)}
          </Table>
        </div>
      )}
    />
  </>
)

function getBookTable(Poems) {
  const booksArray = []
  Poems.allPoemsJson.edges.forEach(item =>
    booksArray.push(
      <tr>
        <TableDetail key={item.node.Code}>{item.node.Code}</TableDetail>
        <TableDetail key={item.node.ISBN}>{item.node.ISBN}</TableDetail>
        <TableDetail key={item.node.Title}>{item.node.Title}</TableDetail>
        <TableDetail key={item.node.Author}>{item.node.Author}</TableDetail>
        <TableDetail key={item.node.Binding}>{item.node.Binding}</TableDetail>
        <TableDetail key={item.node.Price}>{item.node.Price}</TableDetail>
      </tr>
    )
  )
  return booksArray
}

export default PoemsPage
