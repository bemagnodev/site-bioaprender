import styled from "styled-components";

export const Section = styled.section`
  background-color: #fffdf0;
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
  margin-top: 30px;

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
      margin-top: 0;
    }

    .image-2 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  background-color: #e49066;
  color: #ffffff;
  font-size: 32px;
  font-family: "Nunito", sans-serif;
  border-radius: 0px 10px 10px 0px;
  width: fit-content;
  padding: 8px 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  position: absolute;
  left: -80px;
  top: -30px;

  @media (max-width: 768px) {
    font-size: 26px;
    left: -40px;
  }
`;

export const Text = styled.p`
  color: #6e9485;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 10px;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 35%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 45%;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    width: 250px;
    margin: 40px 0;
  }
`;
