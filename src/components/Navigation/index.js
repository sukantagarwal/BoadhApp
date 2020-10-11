import React from 'react'
import PropTypes from 'prop-types'

import {
	Container,
	MenuLink,
	Wrapper
} from './styles'

// const Navigation = ({ siteTitle }) => {
const Navigation = () => {
	return(
		<Wrapper>
			<Container>
				<MenuLink to='/categories'>
					All Categories
				</MenuLink>
				<MenuLink to='/howtoorder'>
					How to Order
				</MenuLink>
				<MenuLink to='/support'>
					Help and Support
				</MenuLink>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
