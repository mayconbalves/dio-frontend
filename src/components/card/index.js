import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Card = ({
  likeAction,
  id,
  like,
  dislikeAction,
  dislike,
  dispatch,
  user,
  message
}) => {

  const handleLike = (id) => {
    dispatch(likeAction(id))
  }

  const handleDislike = (id) => {
    dispatch(dislikeAction(id))
  }
  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.Author>Autor: {user}</S.Author>
        <S.Description>Mensagem: {message}</S.Description>
      </S.DescriptionContainer>
      <S.IconContainer>
        <S.Like onClick={() => handleLike(id)}/><S.Cont>{like}</S.Cont>
      </S.IconContainer>
      <S.IconContainer>
        <S.Dislike onClick={() => handleDislike(id)}/>
        <S.Cont>{dislike}</S.Cont>
      </S.IconContainer>
    </S.Container>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  likeAction: PropTypes.func.isRequired,
  dislikeAction: PropTypes.func.isRequired,
  dislike: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Card
