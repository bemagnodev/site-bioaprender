import styled from 'styled-components';

export const Section = styled.section`
  background-color: #0d4f83;
  padding: 10px 80px 40px 80px;

  @media (max-width: 768px) {
    padding: 10px 40px 40px 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  margin-top: 100px;
  position: relative;

  .image-1 {
    margin-top: -60px;
  }

  .image-2 {
    margin-bottom: -40px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .image-1 {
      margin-top: -20px;
      margin-right: -20px;
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
  left: -80px;
  top: -90px;

  @media (max-width: 768px) {
    font-size: 26px;
    left: -40px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 10px;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 48%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 40%;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    width: 55%;
    margin: 60px 0;
  }
`;
