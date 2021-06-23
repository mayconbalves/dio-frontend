import React from 'react'

import Button from './'
import * as S from './styled'

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/
}

export const ButtonData  = {
  backgroundColor: '#00ced1',
  children: 'default',
  disabled: false,
  type: 'button'
}

export const Default = () =>
  <S.Button
    backgroundColor={ButtonData.backgroundColor}
    disabled={ButtonData.disabled}
    type={ButtonData.type}
  >
    {ButtonData.children}
  </S.Button>

export const Disabled = () =>
  <S.Button
    disabled={true}
    type={ButtonData.type}
  >
    {ButtonData.children}
  </S.Button>

export const BackgroundColor = () =>
  <S.Button
    disabled={ButtonData.disabled}
    type={ButtonData.type}
    backgroundColor="#000"
  >
    {ButtonData.children}
  </S.Button>
