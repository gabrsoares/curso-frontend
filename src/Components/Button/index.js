import React from 'react'
import {ButtonContainer} from './styles.js'

const Button = ({title}) => {
  return (
    <ButtonContainer>
       {title}
    </ButtonContainer>
  )
}

export { Button }