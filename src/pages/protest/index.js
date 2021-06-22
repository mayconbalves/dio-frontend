import React from 'react'
import Container from 'components/container'
import Input from 'components/input'
import * as S from './styled'

const Protest = () => {
  return (
    <Container>
      <S.Main>
        <S.Form>
          <h1>Eu Protesto</h1>
          <Input placeholder="Enviar protesto" />
          <S.Button type='button'>Enviar</S.Button>
        </S.Form>
      </S.Main>
    </Container>
  )
}

export default Protest
