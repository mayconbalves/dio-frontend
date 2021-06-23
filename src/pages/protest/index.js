import React, { useState } from 'react'
import Container from 'components/container'
import Input from 'components/input'
import Breadcrumb from 'components/breadcrumb'
import Card from 'components/card'
import Button from 'components/button'
import * as S from './styled'

const Protest = () => {
  const [values, setValues] = useState({ protest: '' })

  const inputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const submitForm = () => {
    console.log(values)
  }
  return (
    <Container>
      <Breadcrumb />
      <S.Main>
        <S.Form>
          <S.Title>Eu Protesto</S.Title>
          <Input
            name="protest"
            onChange={inputChange}
            placeholder="Enviar protesto"
            value={values.protest}
          />
          <Button
            backgroundColor="#00ced1"
            onClick={submitForm}
            type="button"
          >
            Enviar
          </Button>
        </S.Form>
        <Card />
      </S.Main>
    </Container>
  )
}

export default Protest
