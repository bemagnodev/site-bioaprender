import styled from 'styled-components'

export const WhatsappContainer = styled.a`
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: #25d366;
  color: white;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; // Garante que o botão fique sobre os outros elementos
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 40px;
    height: 40px;
  }
`
