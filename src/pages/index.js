import React from 'react'
import { Link } from 'gatsby'
import SEO from '~/components/seo'
import { CenteredText } from '../utils/styles'

const IndexPage = () => (
  <>
    <SEO title="Boadh" keywords={[`hindi books`, `boadh`, `hindi books in chennai`]} />
    <CenteredText>
        <h1>Welcome to Boadh on-line</h1>
        <h1><i>विभिन्न विषयों पर प्रतिष्ठित प्रकाशकों की उतकृष्ट पुस्तकों का भण्डार - "बोध"</i></h1>
    </CenteredText>
  </>
)

export default IndexPage
