import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Button = ({ children, disabled, type }) => {
  return (
    <S.Button disabled={disabled} type={type}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default Button
