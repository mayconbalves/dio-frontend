import React from 'react'
import Container from 'components/container'
import Input from 'components/input'
import Breadcrumb from 'components/breadcrumb'
import * as S from './styled'

const Protest = () => {
  return (
    <Container>
      <Breadcrumb />
      <S.Main>
        <S.Form>
          <S.Title>Eu Protesto</S.Title>
          <Input placeholder="Enviar protesto" />
          <S.Button type='button'>Enviar</S.Button>
        </S.Form>
      </S.Main>
    </Container>
  )
}

export default Protest
