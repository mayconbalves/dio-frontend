import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Input = ({ placeholder, name, value, onChange }) => {
  return (
    <S.Input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string
}
