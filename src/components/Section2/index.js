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
import visionImage from '../../assets/visao.png';
import valueImage from '../../assets/valores.png';

function Section2() {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Title>Missão</Title>
          <Text>
            Proporcionar um espaço onde a aprendizagem e o desenvolvimento sejam
            cultivados em equilíbrio com o meio ambiente e as necessidades do
            mundo atual. Gerando uma educação transformadora, alinhada com as
            exigências do mundo contemporâneo, estimulando o desenvolvimento
            integral, o pensamento crítico e a capacidade de reflexão das
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
            Estamos criando raízes em um estilo de vida sustentável, no qual,
            todos os dias, aprendemos e redescobrimos maneiras de melhorar nossa
            vida cotidiana, sempre com respeito ao meio ambiente e com o
            compromisso de construir um aprendizado coletivo. Acreditamos que
            educar hoje vai além do conhecimento acadêmico; escolher a
            Bioaprender como escola é adotar um estilo de vida que valoriza a
            curiosidade, a conexão com a natureza e a pesquisa ativa.
            Priorizamos a simplicidade, a cultura de respeito coletivo, a
            cooperação e a transformação, promovendo a harmonia entre o ser
            humano e o mundo ao seu redor.
          </Text>
        </TextContainer>
        <Image src={valueImage} />
      </Container>
    </Section>
  );
}

export default Section2;
