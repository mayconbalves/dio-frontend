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

export const Button = styled.button`
  background-color: ${props => props.disabled ? 'gray' : '#00ced1' };
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  min-width: 100px;
  padding: 10px;
  border: none;
`

export const Redirect = styled(Link)`
  color: #fff;
  pointer-events: ${props => props.disabled ? 'none' : 'pointer' };;
  text-decoration: none;
`
