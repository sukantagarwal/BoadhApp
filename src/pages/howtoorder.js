import React from 'react'
import SEO from '~/components/seo'
import { Container } from '../utils/styles'

const CategoriesPage = () => (
    <>
        <SEO title="Boadh" keywords={[`hindi books`, `boadh`, `hindi books in chennai`]} />
        <Container>
        <h1>How to order:-</h1>
        <ol>
            <li>Please select the books from our collection and note the code or name and author</li>
            <li>Email this list to boadhpublication@gmail.com or WhatsApp on 9381021015</li>
            <li>We will reach out to you within 24 hours to process the order further</li>
        </ol>
        <p>Please feel free to contact us by email boadhpublication@gmail.com or phone/WhatsApp +91 9381021015 if you have any queries or to place the order</p>
        </Container>
                
    </>    
);

export default CategoriesPage
