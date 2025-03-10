import React from 'react';
import {
  Section,
  Title,
  Subtitle,
  Text,
  TextContainer,
  Container,
  InfantilImage,
  FundamentalImage,
} from './style';
import infantil1a5 from '../../assets/infantil1a5.png';
import fundamental from '../../assets/fundamental.png';

function Section4() {
  return (
    <Section>
      <Container>
        <Title>Educação Infantil</Title>
        <TextContainer>
          <Subtitle>Infantil 1</Subtitle>
          <Text>
            Exploração sensorial e desenvolvimento dos primeiros vínculos
            sociais, com ênfase na comunicação não verbal, no movimento e na
            construção da autonomia inicial.
          </Text>

          <Subtitle>Infantil 2</Subtitle>
          <Text>
            Ampliação da linguagem oral e da interação com o meio, favorecendo a
            curiosidade, o brincar simbólico e a construção das primeiras noções
            de identidade e coletividade.
          </Text>

          <Subtitle>Infantil 3</Subtitle>
          <Text>
            Desenvolvimento da autonomia e do pensamento crítico emergente por
            meio da experimentação, do jogo simbólico e das interações em grupo,
            estimulando a comunicação e a resolução de problemas.
          </Text>

          <Subtitle>Infantil 4</Subtitle>
          <Text>
            Aprofundamento da identidade e das relações sociais, com incentivo à
            curiosidade investigativa, à expressão criativa e ao contato com
            diferentes formas de linguagem e representação.
          </Text>

          <Subtitle>Infantil 5</Subtitle>
          <Text>
            Preparação para novas formas de pensamento lógico e simbólico,
            promovendo a construção do conhecimento por meio da experimentação,
            do questionamento e da elaboração de hipóteses, sempre respeitando o
            ritmo e os interesses da criança.
          </Text>
        </TextContainer>
        <InfantilImage src={infantil1a5} />
      </Container>

      <Container>
        <Title>Ensino Fundamental</Title>
        <TextContainer>
          <Subtitle>Fundamental 1 – Do 1º ao 5º ano</Subtitle>

          <Text>
            Valorizamos a pesquisa, a experimentação e a construção ativa do
            conhecimento. Através de projetos interdisciplinares conectados ao
            cotidiano, estimulamos a <strong>curiosidade investigativa</strong>,
            a alfabetização crítica e o desenvolvimento do pensamento reflexivo.
          </Text>
          <Text>
            As crianças são incentivadas a formular hipóteses, testar ideias e
            buscar soluções, tornando-se protagonistas do próprio aprendizado.
          </Text>
          <Text>
            Nossa abordagem,
            <strong> alinhada aos parâmetros curriculares atuais</strong>
            garante uma base sólida para que os alunos ingressem no
            <strong> Fundamental 2</strong> com autonomia, pensamento crítico e
            habilidades essenciais para enfrentar novos desafios acadêmicos e
            sociais.
          </Text>
        </TextContainer>
        <FundamentalImage src={fundamental} />
      </Container>
    </Section>
  );
}

export default Section4;
