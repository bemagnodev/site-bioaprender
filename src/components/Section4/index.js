import React from "react";
import {
  Section,
  Title,
  Subtitle,
  Text,
  Image,
  TextContainer,
  Container,
} from "./style";
import infantil1a5 from "../../assets/infantil1a5.png";
import fundamental from "../../assets/fundamental.png";

function Section4() {
  return (
    <Section>
      <Container>
        <Title>Educação Infantil</Title>
        <TextContainer>
          <Subtitle>Infantil 1, 2 e 3</Subtitle>
          <Text>
            Enriquecimento da linguagem, socialização e fortalecimento de
            vínculos afetivos.
          </Text>
          <Subtitle>Infantil 4 e 5</Subtitle>
          <Text>
            Desenvolvimento da identidade e estímulo à curiosidade, expressão e
            percepção do mundo.
          </Text>
        </TextContainer>
        <Image src={infantil1a5} />
      </Container>

      <Container>
        <Title>Ensino Fundamental</Title>
        <TextContainer>
          <Text>
            Enfatizamos a leitura, a alfabetização crítica e o uso de projetos
            interdisciplinares conectados ao cotidiano. Essa abordagem visa
            formar pensadores críticos, preparados para atuar em uma sociedade
            diversa.
          </Text>
        </TextContainer>
        <Image src={fundamental} />
      </Container>
    </Section>
  );
}

export default Section4;
