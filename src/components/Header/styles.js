import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, Img } from '../../utils/styles'

export const Wrapper = styled.div`
  background: #ff6600;
  margin-bottom: 0rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem;
  margin: 0 auto;
  max-width: 960px;
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`

export const Text = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
`

export const BigText = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`

export const ThinText = styled.p`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-family: SimSuns;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`
