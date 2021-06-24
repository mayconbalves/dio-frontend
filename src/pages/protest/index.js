import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'components/container'
import Input from 'components/input'
import Breadcrumb from 'components/breadcrumb'
import Card from 'components/card'
import Button from 'components/button'
import * as S from './styled'

import { postProtest, fetchProtest } from './actions'

const Protest = () => {
  const [values, setValues] = useState({ message: '' })
  const dispatch = useDispatch()
  const protests = useSelector(
    (state) => state.protestsReducers.result
  )

  useEffect(() => {
    dispatch(fetchProtest())
  }, [dispatch])

  const inputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleKeyDown = (e) => {
    const { name, value } = e.target
    const user = localStorage.getItem('@DioEvent:username')

    if (e.key === 'Enter') {
      e.preventDefault()
      setValues({ ...values, [name]: value })
      dispatch(postProtest(user, values.message))
      setValues({ message: '' })
    }
  }

  const submitForm = () => {
    const user = localStorage.getItem('@DioEvent:username')
    dispatch(postProtest(user, values.message))
    setValues({ message: '' })
  }

  const allProtests = protests || []
  return (
    <Container>
      <Breadcrumb />
      <S.Main>
        <S.Form>
          <S.Title>Eu Protesto</S.Title>
          <Input
            name="message"
            onChange={inputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enviar protesto"
            value={values.message}
          />
          <Button
            backgroundColor="#00ced1"
            onClick={submitForm}
            type="button"
          >
            Enviar
          </Button>
        </S.Form>
        {
          allProtests.map(protest => (
            <Card
              like={protest.like}
              dislike={protest.dislike}
              user={protest.user}
              key={protest.id}
              message={protest.message}
            />
          ))
        }
      </S.Main>
    </Container>
  )
}

export default Protest
