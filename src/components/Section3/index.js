import React from 'react';
import { Section, Title, Text, Container } from './style';

function Section3() {
  return (
    <Section id="proposta-pedagogica">
      <Title>Proposta Pedagógica</Title>
      <Container>
        <Text>
          Nossa proposta pedagógica é baseada no <strong>construtivismo</strong>
          , estimulando a autonomia, o pensamento crítico e a aprendizagem
          ativa. Utilizamos <strong>dinâmicas de grupo</strong> para promover a
          cooperação e a troca de conhecimentos. Nosso currículo,{' '}
          <strong>alinhado à BNCC</strong>, integra brincadeiras, projetos e
          explorações que conectam teoria e prática, respeitando os interesses
          das crianças. Na Bioaprender, o aprendizado acontece de forma criativa
          e significativa, com educadores capacitados e um ambiente que inspira
          descobertas.
        </Text>
      </Container>
    </Section>
  );
}

export default Section3;
