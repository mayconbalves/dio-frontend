import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/header'
import Footer from 'components/footer'
import * as S from './styled'

const Container = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
