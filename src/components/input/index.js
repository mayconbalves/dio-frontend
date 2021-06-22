import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Input = ({ placeholder }) => {
  return (
    <S.Input placeholder={placeholder} />
  )
}

export default Input

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}
