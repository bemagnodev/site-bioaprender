import styled from 'styled-components';

export const Section = styled.section`
  background-color: #ffffff;
  color: #6e9485;
  padding: 100px 80px 40px 80px;

  @media (max-width: 768px) {
    padding: 40px 20px 40px 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ReverseTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  text-align: end;

  @media (max-width: 1024px) {
    align-items: flex-start;
    text-align: start;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContainerReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #6e9485;
  font-size: 32px;
  font-family: 'Nunito', sans-serif;
  border-radius: 0px 10px 10px 0px;
  width: fit-content;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #6e9485;
  font-size: 22px;
  line-height: 28px;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 25%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 250px;
    margin: 40px 0;
  }

  @media (max-width: 1024px) {
    width: 280px;
    margin: 20px 0;
  }
`;
