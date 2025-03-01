import styled from "styled-components";

export const Section1 = styled.section`
  background-color: #e49066;
  color: white;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Section2 = styled.section`
  background-color: #6e9485;
  color: white;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const WhatsAppButton = styled.a`
  background-color: #ffffff;
  color: #6e9485;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-top: 15px;
  transition: 0.3s ease;

  &:hover {
    color: #1ebc57;
  }
`;
