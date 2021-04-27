import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  ContactContainer,
  ContactH1,
  ContactWrapper,
  ContactH2,
  ContactA,
  ContactCard,
} from "./ContactElements";
// import Icon1 from "../../images/svg-1.svg";

const Contact = () => {
  return (
    <IconContext.Provider
      value={{ color: "#1d3557", className: "global-class-name" }}
    >
      <ContactContainer id="contact">
        <ContactH1>Get in touch with me!</ContactH1>
        <ContactWrapper>
          <ContactCard>
            <ContactH2>Email</ContactH2>
            <ContactA href={`mailto: castrov4@mymacewan.ca`}>
              castrov4@mymacewan.ca
            </ContactA>
          </ContactCard>
          <ContactCard>
            <ContactH2>Social Network</ContactH2>
            <a href="https://www.linkedin.com/in/voncastro/">
              <FaLinkedin size="2em" />
              <a href="https://github.com/von-castro">
                <FaGithub size="2em" />
              </a>
            </a>
          </ContactCard>
        </ContactWrapper>
      </ContactContainer>
    </IconContext.Provider>
  );
};

export default Contact;
