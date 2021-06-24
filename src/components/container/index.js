import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/header'
import * as S from './styled'

const Container = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
