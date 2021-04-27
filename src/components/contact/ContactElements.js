import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eaf0f8;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ContactCard = styled.div`
  height: 120px;
  width: 300px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #1d3557;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactH2 = styled.h2`
  color: #1d3557;
  font-size: 1rem;
  margin-top: 10px;
`;

export const ContactA = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;

  &:hover {
    color: #1d3557;
    font-weight: 600;
  }
`;
