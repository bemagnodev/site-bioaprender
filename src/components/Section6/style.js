import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fffdf0;
  padding: 50px 80px 100px 80px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 10px 40px 40px 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  margin-top: 50px;

  .image-1 {
    margin-top: -90px;
  }

  .image-2 {
    margin-bottom: -90px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .image-1 {
      margin-top: -20px;
    }

    .image-2 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  background-color: #e49066;
  color: #ffffff;
  font-size: 32px;
  font-family: 'Nunito', sans-serif;
  border-radius: 0px 10px 10px 0px;
  width: fit-content;
  padding: 8px 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0px;
  top: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
    left: 0px;
  }
`;

export const Text = styled.p`
  color: #6e9485;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 10px;
  width: 80%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 45%;
  height: auto;

  @media (max-width: 1024px) {
    width: 30%;
    margin: 60px 0;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin: 40px 0;
  }
`;
