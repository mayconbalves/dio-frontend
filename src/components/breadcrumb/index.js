import React from 'react'
import * as S from './styled'

const Breadcrumb = () => {
  return (
    <S.Container>
      <ul>
        <S.List>
          <S.LinkStyled to='/'><S.Span>Home</S.Span></S.LinkStyled>
        </S.List>
      </ul>
    </S.Container>
  )
}

export default Breadcrumb
