import React from "react";
import { Section, Title, Text, Image, Container } from "./style";
import entranceImage from "../../assets/ambiente.png";

function Section1() {
  return (
    <Section id="quem-somos">
      <Title>Quem somos</Title>
      <Container>
        <Text>
          Na Bioaprender, cuidamos e educamos com alegria e compromisso.
          Valorizamos o potencial único de cada aluno em um ambiente que combina
          o contato com a natureza e a poesia da infância. Nossa abordagem
          construtivista, inspirada na pedagogia da escuta, promove o
          aprendizado significativo e respeitoso, sempre conectado à
          sustentabilidade e ao meio ambiente.
        </Text>
        <Image src={entranceImage} alt="entrada" />
      </Container>
    </Section>
  );
}

export default Section1;
