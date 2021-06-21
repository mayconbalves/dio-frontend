import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const Form = styled.form`
  display: grid;
`

export const Title = styled.h1`
  color: #00ced1;
`

export const Input = styled.input`
  padding: 5px 10px;
  margin: 10px;

  &:focus {
    border-color: transparent;
    outline: 2px solid #00ced1;
  }
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
