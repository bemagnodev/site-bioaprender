import React from 'react';
import {
  Section,
  Title,
  Text,
  ImageContainer,
  Image,
  TextContainer,
  Container,
} from './style';
import bale from '../../assets/ambiente3.png';
import capoeira from '../../assets/ambiente2.png';

function Section6() {
  return (
    <Section>
      <Title>Ambientes</Title>
      <Container>
        <TextContainer>
          <Text>
            Nossos espaços são planejados para estimular a criatividade e o
            aprendizado. Desde ateliês de arte até áreas verdes ao ar livre,
            oferecemos um ambiente acolhedor e inspirador para o desenvolvimento
            integral.
          </Text>
        </TextContainer>
        <ImageContainer>
          <Image src={capoeira} className="image-1" />
          <Image src={bale} className="image-2" />
        </ImageContainer>
      </Container>
    </Section>
  );
}

export default Section6;
