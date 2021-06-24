import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Button = ({ backgroundColor, children, disabled, onClick, type }) => {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired
}

export default Button
