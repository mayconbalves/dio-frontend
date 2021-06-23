import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Button = ({ backgroundColor, children, disabled, type }) => {
  console.log(backgroundColor)
  return (
    <S.Button backgroundColor={backgroundColor} disabled={disabled} type={type}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default Button
