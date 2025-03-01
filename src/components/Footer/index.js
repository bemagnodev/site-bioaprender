import React from "react";
import { Section1, Section2, Title, Text, WhatsAppButton } from "./style";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Section1>
        <Title>Agende uma Visita</Title>
        <WhatsAppButton href="https://w.app/bioaprender" target="_blank">
          <FaWhatsapp size={58} />
        </WhatsAppButton>
      </Section1>
      <Section2>
        <Title>LOGO</Title>
        <Text>
          <strong>Endereço:</strong> Rua Judith Martins da Silva, 58 -
          Tamandatuba - Eusébio - CE <br />
          <strong>Telefone Fixo:</strong> (85) 2010-1001 <br />
          <strong>WhatsApp:</strong> (85) 98768-5299 <br />
          <strong>Email:</strong> bioaprender@outlook.com <br />
          <strong>Instagram:</strong> @bio_aprender <br />
          <span style={{ fontSize: "10px", marginTop: "20px" }}>
            © 2025 Bioaprender. Todos os direitos reservados.
          </span>
        </Text>
      </Section2>
    </>
  );
}

export default Footer;
