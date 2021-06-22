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

export const Button = styled(Link)`
  background-color: #00ced1;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  min-width: 100px;
  padding: 10px;
  text-decoration: none;
  width: 120px;
`
