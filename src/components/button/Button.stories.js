import React from 'react'

import Button from './'

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/
}

export const ButtonData  = {
  children: 'default',
  disabled: false,
  type: 'button'
}

export const Default = () =>
  <Button
    disabled={ButtonData.disabled}
    type={ButtonData.type}
  >
    {ButtonData.children}
  </Button>
