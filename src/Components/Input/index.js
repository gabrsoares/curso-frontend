import React from 'react'
import {InputContainer, InputBox, Title} from './styles'
import { Button } from '../Button'
const Input = () => {
  return (
    <InputContainer>
    <Title>
        Testando Input
    </Title>
    <InputBox placeholder='Email'/>
    <InputBox placeholder='Senha' type='password'/>
    <Button title='Enviar' />
    </InputContainer>
  )
}

export { Input }
