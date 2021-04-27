import React from "react";
import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-6.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
  RefLink,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <RefLink href="https://github.com/von-castro/codenames">
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <PortfolioH2>Codenames</PortfolioH2>
            <PortfolioP>Web-based board game</PortfolioP>
          </PortfolioCard>
        </RefLink>
        <RefLink href="https://github.com/von-castro/car-rental-system">
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2>Car Rental System</PortfolioH2>
            <PortfolioP>Desktop application</PortfolioP>
          </PortfolioCard>
        </RefLink>
        <RefLink href="https://github.com/von-castro/edmonton-property-assessment">
          <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2>YEG Property Assessment</PortfolioH2>
            <PortfolioP>Desktop Application</PortfolioP>
          </PortfolioCard>
        </RefLink>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
