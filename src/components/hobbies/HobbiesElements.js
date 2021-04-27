import styled from "styled-components";

export const HobbiesContainer = styled.div`
  height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const HobbiesH1 = styled.h1`
  font-size: 2.5rem;
  color: #1d3557;
  // justify-content: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HobbiesH2 = styled.h2`
  color: #1d3557;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const HobbiesP = styled.p`
  font-size: 1rem;
  //   text-align: center;
`;

export const HobbiesContentWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  align-items: center;
  // justify-content: center;
`;

export const RefLink = styled.a`
  text-decoration: none;
  font-weight: 550;
  color: #1d3557;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
