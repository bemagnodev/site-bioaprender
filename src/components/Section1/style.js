import styled from 'styled-components';

export const Section = styled.section`
  background-color: #6e9485;
  color: #ffffff;
  padding: 100px 40px 40px 40px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  background-color: #0d4f83;
  color: #ffffff;
  font-size: 32px;
  font-family: 'Nunito', sans-serif;
  border-radius: 0px 10px 10px 0px;
  width: fit-content;
  padding: 8px 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 20px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 22px;
  line-height: 28px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 45%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
