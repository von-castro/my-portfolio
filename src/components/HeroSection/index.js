import React from "react";
import Video from "../../videos/video2.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>VON CASTRO</HeroH1>
        <HeroP>
          ASPIRING FULL STACK WEB DEVELOPER. 3RD YEAR COMPUTER SCIENCE STUDENT.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
