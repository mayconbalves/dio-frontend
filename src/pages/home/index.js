import React from 'react'
import * as S from './styled'

const Home = () => {
  return (
    <S.Container>
      <S.Title>Digite seu nome</S.Title>
      <S.Form>
        <S.Input placeholder="Nome de usuário"/>
        <S.Button to='/protest'>
          Acesse o sistema
        </S.Button>
      </S.Form>
    </S.Container>
  )
}

export default Home
