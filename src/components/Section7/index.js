import React from 'react';
import {
  Section,
  Title,
  Subtitle,
  Text,
  Image,
  TextContainer,
  Container,
  ImageContainer,
  SideImage,
  Box,
  BoxText,
  BoxTitle,
  BoxImageContainer,
  BigImage,
  BigImageFirst,
  SmallImage,
} from './style';
import pais1 from '../../assets/projescoladepais1.png';
import pais2 from '../../assets/projescoladepais2.png';
import cozinha from '../../assets/projcriancacozinha.png';

import adaptacao1 from '../../assets/adaptação1.png';
import adaptacao2 from '../../assets/adaptação2.png';
import adaptacao3 from '../../assets/adaptação3.png';

function Section7() {
  return (
    <Section>
      <Title>Projetos</Title>
      <Container>
        <TextContainer>
          <Subtitle>Escola de pais</Subtitle>
          <Text>
            Acreditamos que a educação vai além da sala de aula – ela acontece
            em casa, nas pequenas interações diárias, nas escolhas que fazemos
            para nossos filhos. Por isso, criamos a Escola de Pais Bioaprender,
            um espaço de troca, aprendizado e construção coletiva.
          </Text>
          <Text>
            Os encontros acontecem mensalmente e nosso compromisso é trazer
            especialistas de diferentes áreas relacionadas à educação e ao
            desenvolvimento infantil, ajudando as famílias a se sentirem mais
            seguras e preparadas para essa linda missão de educar.
          </Text>
          <Text>
            Participe dessa jornada conosco! Afinal, quando escola e família
            caminham juntas, quem ganha são as crianças.
          </Text>
          <Subtitle>Infantil 4 e 5</Subtitle>
          <Text>
            Desenvolvimento da identidade e estímulo à curiosidade, expressão e
            percepção do mundo.
          </Text>
        </TextContainer>
        <ImageContainer>
          <SideImage src={pais2} />
          <Image src={pais1} />
        </ImageContainer>
      </Container>

      <Container>
        <TextContainer>
          <Subtitle>Crianças na cozinha </Subtitle>
          <Text>
            Sob orientação da especialista Kika Hissa, da empresa Fora da
            Caixinha, nossas crianças exploram semanalmente o mundo da
            culinária. Ao preparar receitas variadas, elas desenvolvem o gosto
            por sabores, aromas e texturas, promovendo uma relação saudável e
            criativa com a alimentação desde cedo.
          </Text>
        </TextContainer>
        <Image src={cozinha} />
      </Container>

      <Box>
        <BoxTitle>Adaptação</BoxTitle>
        <BigImageFirst src={adaptacao1} />

        <BoxText>
          Na Bioaprender, acreditamos que acolher é ensinar. Nossa abordagem
          pedagógica valoriza a participação ativa da família, especialmente nos
          momentos de adaptação.
        </BoxText>
        <BoxText>
          Sabemos que o primeiro contato com a escola pode despertar ansiedade e
          expectativas, tanto nas crianças quanto nos pais. Por isso, criamos um
          ambiente de segurança, onde a transição acontece no tempo de cada um,
          sempre com afeto e respeito.
        </BoxText>
        <BoxText>
          Aqui, a adaptação não é uma despedida, mas o início de uma linda
          jornada de descobertas.
        </BoxText>
        <BoxImageContainer>
          <SmallImage src={adaptacao2} />
          <BigImage src={adaptacao1} />
          <SmallImage src={adaptacao3} />
        </BoxImageContainer>
      </Box>
    </Section>
  );
}

export default Section7;
