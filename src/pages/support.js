import React from 'react'
import SEO from '~/components/seo'
import { Container } from '../utils/styles'

const CategoriesPage = () => (
    <>
        <SEO title="Boadh" keywords={[`hindi books`, `boadh`, `hindi books in chennai`]} />
        <Container>
        <p>For any queries, suggestions and concerns please reach out to us on:</p>
        <ol>
            <li>Phone: +91 9381021015</li>
            <li>WhatsApp: +91 9381021015 / +91 9591437973</li>
            <li>Email: boadhpublication@gmail.com</li>
        </ol>
        </Container>
                
    </>    
);

export default CategoriesPage
