import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Input = ({ placeholder, name, value, onChange, onKeyDown }) => {
  return (
    <S.Input
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string
}
