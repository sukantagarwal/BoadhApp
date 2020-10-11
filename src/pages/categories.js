import React from 'react'
import SEO from '~/components/seo'
import { Container, Table, TableDetail } from '../utils/styles'

const CategoriesPage = () => (
  <>
    <SEO
      title="Boadh"
      keywords={[`hindi books`, `boadh`, `hindi books in chennai`]}
    />
    <Container>
      <br></br>
      <br></br>
      <Table>
        <tr>
          <a href="/story">Stories</a>
        </tr>
        <tr>
          <a href="/management">Management</a>
        </tr>
        <tr>
          <a href="/prashnotri">Prashnotri</a>
        </tr>
        <tr>
          <a href="/poems">Kavitha and Shayari</a>
        </tr>
        <tr>
          <a href="/patrakarita">Patrakaarita</a>
        </tr>
        <tr>
          <a href="/sansmaran">Sansmaran</a>
        </tr>
        <tr>
          <a href="/personality">Personality Development</a>
        </tr>
        <tr>
          <a href="/novel">Novels</a>
        </tr>
        <tr>
          <a href="/natak">Dramas and One Act Plays</a>
        </tr>
        <tr>
          <a href="/nibandh">Nibhandh</a>
        </tr>
        <tr>
          <a href="/hindirajbhasha">Raj Bhasha Hindi</a>
        </tr>
        <tr>
          <a href="/dictionary">Dictionaries</a>
        </tr>
        <tr>
          <a href="/aalochana">Aalochana</a>
        </tr>
        <tr>
          <a href="/general">General</a>
        </tr>
        <tr>
          <a href="/health">Health</a>
        </tr>
        <tr>
          <a href="/childrenbooks">Children's Books</a>
        </tr>
        <tr>
          <a href="/biography">Biography</a>
        </tr>
        <tr>
          <a href="/boadhprakashan">Books by Boadh Prakashan</a>
        </tr>
      </Table>
    </Container>
  </>
)

export default CategoriesPage
