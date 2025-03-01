import styled from "styled-components";

export const Section = styled.section`
  background-color: #e49066;
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

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  border-radius: 10px;
  margin-top: 120px;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  background-color: #0d4f83;
  color: #ffffff;
  font-size: 32px;
  font-family: "Nunito", sans-serif;
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

export const Subtitle = styled.h2`
  color: #6e9485;
  font-size: 32px;
  font-family: "Nunito", sans-serif;
  border-radius: 0px 10px 10px 0px;
  width: fit-content;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
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
    width: 450px;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    width: 250px;
    margin: 40px 0;
  }
`;
