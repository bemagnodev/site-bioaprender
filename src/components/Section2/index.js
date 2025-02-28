import React from 'react';
import {
  Section,
  Title,
  Text,
  Image,
  TextContainer,
  Container,
  ContainerReverse,
  ReverseTextContainer,
} from './style';
import missionImage from '../../assets/missao.png';
import visionImage from '../../assets/missao.png'; //TROCAR
import valueImage from '../../assets/missao.png'; //TROCAR

function Section2() {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Title>Missão</Title>
          <Text>
            Proporcionar um espaço onde o aprendizado e o desenvolvimento sejam
            nutridos em equilíbrio com o meio ambiente e as necessidades do
            mundo atual. Gerando uma educação transformadora, alinhada ás
            necessidades do mundo contemporaneo, promovendo o desenvolvimento
            integral, o pensamento critic e a capacidade de reflexão das
            crianças.
          </Text>
        </TextContainer>
        <Image src={missionImage} />
      </Container>

      <ContainerReverse>
        <ReverseTextContainer>
          <Title>Visão</Title>
          <Text>
            Ser referência em educação integral, formando exploradores curiosos
            e cidadãos conscientes, prontos para transformar o futuro com
            empatia e criatividade.
          </Text>
        </ReverseTextContainer>
        <Image src={visionImage} />
      </ContainerReverse>

      <Container>
        <TextContainer>
          <Title>Valores</Title>
          <Text>
            Promovemos a sustentabilidade, o respeito ao meio ambiente e a
            construção de uma comunidade vibrante de aprendizado coletivo.
          </Text>
        </TextContainer>
        <Image src={valueImage} />
      </Container>
    </Section>
  );
}

export default Section2;
