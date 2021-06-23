import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`

export const Form = styled.form`
  display: grid;
`

export const Title = styled.h1`
  color: #00ced1;
`

export const Redirect = styled(Link)`
  color: #fff;
  pointer-events: ${props => props.disabled ? 'none' : 'pointer' };;
  text-decoration: none;
`
