import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  MenuLink,
  Wrapper,
  Text,
  BigText,
  ThinText,
  Image,
} from './styles'

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Container>
        <MenuLink to="/">
          <BigText>Boadh Web Store</BigText>
        </MenuLink>
        <Text>+91 9381021015</Text>
        <Text>boadhpublication@gmail.com</Text>
      </Container>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
