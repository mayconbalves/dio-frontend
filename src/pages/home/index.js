import React from 'react'
import Input from 'components/input'
import Container from 'components/container'
import * as S from './styled'

const Home = () => {
  return (
    <Container>
      <S.Main>
        <S.Title>Digite seu nome</S.Title>
        <S.Form>
          <Input placeholder="Nome de usuário"/>
          <S.Button to='/protest'>
            Acesse o sistema
          </S.Button>
        </S.Form>
      </S.Main>
    </Container>
  )
}

export default Home
