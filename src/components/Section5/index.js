import React from "react";
import {
  Section,
  Title,
  Text,
  ImageContainer,
  Image,
  TextContainer,
  Container,
} from "./style";
import bale from "../../assets/extra-balé.png";
import capoeira from "../../assets/extra-capoeira.png";

function Section5() {
  return (
    <Section>
      <Container>
        <Title>Atividades Extras</Title>
        <TextContainer>
          <Text>
            - Capoeira: Promovendo desenvolvimento físico e expressão cultural.
          </Text>
          <Text>
            - Ritmos e Balé: Cultivando habilidades motoras e sensibilidade
            estética.
          </Text>
          <Text>
            - Ateliê de Artes: Exploração criativa com materiais variados.
          </Text>
          <Text>
            - Aulas de Inglês: Estímulo à linguagem de forma lúdica e
            interativa.
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

export default Section5;
