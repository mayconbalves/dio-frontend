import React from 'react'
import { action } from '@storybook/addon-actions'

import Input from './'

export default {
  component: Input,
  title: 'Input',
  excludeStories: /.*Data$/
}

export const inputData  = {
  name: 'default',
  onChange: () => {},
  placeholder: 'Seu placeholder',
  value: ''
}

export const actionsData = {
  onChange: action('onChange')
}

export const Default = () =>
  <Input
    name={inputData.name}
    placeholder={inputData.placeholder}
    value={inputData.value}
    {...actionsData}
  />

export const WithoutPlaceholder = () =>
  <Input
    name={inputData.name}
    value={inputData.value}
    {...actionsData}
  />
