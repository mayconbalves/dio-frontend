import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Card = ({ like, dislike, user, message}) => {
  const [likes, setLike] = useState(like)
  const [dislikes, setDeslike] = useState(dislike)

  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.Author>Autor: {user}</S.Author>
        <S.Description>Mensagem: {message}</S.Description>
      </S.DescriptionContainer>
      <S.IconContainer>
        <S.Like onClick={() => setLike(likes + 1)}/><S.Cont>{like}</S.Cont>
      </S.IconContainer>
      <S.IconContainer>
        <S.Dislike onClick={() => setDeslike(dislikes + 1)}/>
        <S.Cont>{dislike}</S.Cont>
      </S.IconContainer>
    </S.Container>
  )
}

Card.propTypes = {
  like: PropTypes.number.isRequired,
  dislike: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Card
