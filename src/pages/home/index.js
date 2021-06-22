import React from 'react'
import Input from 'components/input'
import * as S from './styled'

const Home = () => {
  return (
    <S.Container>
      <S.Title>Digite seu nome</S.Title>
      <S.Form>
        <Input placeholder="Nome de usuário"/>
        <S.Button to='/protest'>
          Acesse o sistema
        </S.Button>
      </S.Form>
    </S.Container>
  )
}

export default Home
