import React from 'react';
import { Section1, Section2, Title, Text, WhatsAppButton, Logo } from './style';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/biobranco.png';

function Footer() {
  return (
    <>
      <Section1>
        <Title>Agende uma Visita</Title>
        <WhatsAppButton href="https://wa.me/5585987685299" target="_blank">
          <FaWhatsapp size={58} />
        </WhatsAppButton>
      </Section1>
      <Section2>
        <Logo src={logo} />
        <Text>
          <strong>Endereço:</strong> Rua Judith Martins da Silva, 58 -
          Tamandatuba - Eusébio - CE <br />
          <strong>Telefone Fixo:</strong> (85) 2010-1001 <br />
          <strong>WhatsApp:</strong> (85) 98768-5299 <br />
          <strong>Email:</strong> bioaprender@outlook.com <br />
          <strong>Instagram:</strong>{' '}
          <a
            href="https://www.instagram.com/bio_aprender"
            target="_blank"
            style={{ color: '#ffffff' }}
          >
            @bio_aprender
          </a>{' '}
          <br />
          <span
            style={{ fontSize: '13px', marginTop: '40px', fontWeight: 'bold' }}
          >
            © 2025 Bioaprender. Todos os direitos reservados.
          </span>
        </Text>
      </Section2>
    </>
  );
}

export default Footer;
