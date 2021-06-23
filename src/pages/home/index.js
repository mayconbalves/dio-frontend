import React, { useState } from 'react'
import Input from 'components/input'
import Container from 'components/container'
import * as S from './styled'

const Home = () => {
  const [values, setValues] = useState({ username: '' })

  const inputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }
  return (
    <Container>
      <S.Main>
        <S.Title>Digite seu nome</S.Title>
        <S.Form>
          <Input
            name="username"
            onChange={inputChange}
            placeholder="Nome de usuário"
            value={values.username}
          />
          <S.Button type="button" disabled={values.username.length < 1}>
            <S.Redirect to='/protest' disabled={values.username.length < 1}>
              Acesse o sistema
            </S.Redirect>
          </S.Button>
        </S.Form>
      </S.Main>
    </Container>
  )
}

export default Home
