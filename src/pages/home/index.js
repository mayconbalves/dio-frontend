import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from 'components/input'
import Container from 'components/container'
import Button from 'components/button'
import * as S from './styled'

const Home = () => {
  const [values, setValues] = useState({ username: '' })
  const history = useHistory()

  const inputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    localStorage.setItem('@DioEvent:username', values.username)
    history.push('/protest')
  }

  return (
    <Container>
      <S.Main>
        <S.Title>Digite seu nome</S.Title>
        <S.Form>
          <Input
            name="username"
            onChange={inputChange}
            onKeyDown={handleKeyDown}
            placeholder="Nome de usuário"
            value={values.username}
          />
          <Button
            backgroundColor="#00ced1"
            type="button"
            disabled={values.username.length < 1}
            onClick={handleSubmit}
          >
            Acesse o sistema
          </Button>
        </S.Form>
      </S.Main>
    </Container>
  )
}

export default Home
