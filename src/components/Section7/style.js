import styled from "styled-components";

export const Section = styled.section`
  background-color: #fffdf0;
  padding: 100px 80px 40px 80px;
  position: relative;

  @media (max-width: 768px) {
    padding: 70px 20px 40px 20px;
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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const BoxImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;

  @media (max-width: 1024px) {
    align-items: center;
    justify-content: space-around;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  background-color: #6e9485;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 40px;
  border-radius: 10px;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const BoxTitle = styled.h1`
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
  top: -20px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 26px;
    top: 20px;
    left: -20px;
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
  left: 0px;
  top: 40px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 26px;
    top: 20px;
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
  width: 95%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const BoxText = styled.p`
  color: #ffffff;
  font-size: 22px;
  line-height: 28px;
  width: 95%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const BigImageFirst = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  display: none;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BigImage = styled.img`
  width: 45%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SmallImage = styled.img`
  width: 25%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 50%;
    margin: 10px 0;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 400px;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    width: 250px;
    margin: 10px 0;
    margin-left: -60px;
  }
`;

export const SideImage = styled.img`
  width: 280px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 40px;
  margin: 0 -60px;

  @media (max-width: 1024px) {
    width: 400px;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    width: 250px;
    margin-top: 0px;
    margin-right: -60px;
  }
`;
