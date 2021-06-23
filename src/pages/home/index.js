import React, { useState } from 'react'
import Input from 'components/input'
import Container from 'components/container'
import Button from 'components/button'
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
          <Button
            backgroundColor="#00ced1"
            type="button"
            disabled={values.username.length < 1}
          >
            <S.Redirect to='/protest' disabled={values.username.length < 1}>
              Acesse o sistema
            </S.Redirect>
          </Button>
        </S.Form>
      </S.Main>
    </Container>
  )
}

export default Home
