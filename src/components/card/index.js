import React, { useState } from 'react'
import * as S from './styled'

const Card = () => {
  const [like, setLike] = useState(0)
  const [deslike, setDeslike] = useState(0)
  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.Description>card</S.Description>
      </S.DescriptionContainer>
      <S.IconContainer>
        <S.Like onClick={() => setLike(like + 1)}/><S.Cont>{like}</S.Cont>
      </S.IconContainer>
      <S.IconContainer>
        <S.Dislike onClick={() => setDeslike(deslike + 1)}/>
        <S.Cont>{deslike}</S.Cont>
      </S.IconContainer>
    </S.Container>
  )
}

export default Card
