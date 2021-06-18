import styled from 'styled-components'

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
    outline: #00ced1;
  }
`

export const Button = styled.button`
  background-color: #ececec;
  color: #fff;
  min-width: 100px;
  width: 120px;
`
