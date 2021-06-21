import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styled'

const Home = () => {
  return (
    <S.Container>
      <S.Title>Digite seu nome</S.Title>
      <S.Form>
        <S.Input />
        <Link to='/protest'>
          Acesse o sistema
        </Link>
      </S.Form>
    </S.Container>
  )
}

export default Home
