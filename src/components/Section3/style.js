import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff;
  color: #6e9485;
  padding: 70px 40px 40px 40px;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`;

export const Container = styled.div`
  background-color: #6e9485;
  border-radius: 8px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 30px 60px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 80px 20px 50px 20px;
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
  left: 0;
  top: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 22px;
  line-height: 28px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;
