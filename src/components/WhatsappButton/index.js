import React from 'react'
import { WhatsappContainer } from './style'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappButton = () => {
  const phoneNumber = '5585987685299'
  const message = 'Olá! Gostaria de mais informações.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <WhatsappContainer
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </WhatsappContainer>
  )
}

export default WhatsappButton
