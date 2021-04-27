import React from "react";
import foodIcon from "../../images/svg-5.svg";
import booksIcon from "../../images/svg-3.svg";
import {
  HobbiesContainer,
  HobbiesH1,
  HobbiesP,
  HobbiesH2,
  HobbiesContentWrapper,
  RefLink,
  Column1,
  Column2,
  InfoRow,
  ImgWrap,
  Img,
} from "./HobbiesElements";
const Hobbies = () => {
  return (
    <HobbiesContainer id="hobbies">
      <HobbiesH1>Hobbies</HobbiesH1>
      <HobbiesContentWrapper>
        <InfoRow imgStart={false}>
          <Column1>
            <HobbiesH2 id="hobbies-food">Food</HobbiesH2>
            <HobbiesP>
              One of the most consistent habit of a human being is their need to
              consume food. I consider myself a foodie. For such an inescapable
              part of the day, I feel that it is important to make the best of
              it! Good food, good times, and an even better rest of your day.
              <RefLink href="https://www.instagram.com/ngocastroeats/">
                Take a peek of my food adventures on instagram
              </RefLink>
            </HobbiesP>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={foodIcon} alt="food" />
            </ImgWrap>
          </Column2>
        </InfoRow>
        <InfoRow imgStart={true}>
          <Column1>
            <HobbiesH2 id="hobbies-books">Books/Audiobooks/Podcasts</HobbiesH2>
            <HobbiesP>
              As a lifelong learner, I find many wisdoms and knowledge can be
              found through various peoples experiences and knowledge. I treat
              them as my mentors sharing their experiences with me so that I can
              learn from them. One of my all time favorites is,
              <RefLink href="https://charlesduhigg.com/the-power-of-habit/">
                "The Power of Habit by Charles Duhigg".
              </RefLink>
            </HobbiesP>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={booksIcon} alt="books" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </HobbiesContentWrapper>
    </HobbiesContainer>
  );
};

export default Hobbies;
