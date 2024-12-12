import {
  DigiButton,
  DigiLayoutContainer,
  DigiMediaImage,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import backgroundImage from "../assets/remote-5491798_1920.png";
import "../styles/homepage.css";
import { LayoutContainerVariation } from "@digi/arbetsformedlingen";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const navigateToJobbtorget = () => {
    navigate("/jobbtorget");
  };

  return (
    <>
      <DigiLayoutContainer className="container" afVerticalPadding afMarginTop>
        <DigiLayoutContainer
          afVerticalPadding
          afVariation={LayoutContainerVariation.STATIC}
          className="textContainer"
        >
          <DigiTypography>
            <h1>Jobbtorget</h1>
            <p className="text">
              Hos jobbtorget kan du alltid känna dig trygg när du söker ditt
              nästa jobb. Plattformen är byggd med omtanke och Arbetscentrumet
              finns med er på hela vägen.
            </p>
            <h4>
              Klicka på knappen för att komma till jobbtorgets sökfunktion
            </h4>
            <DigiButton onClick={navigateToJobbtorget}>
              Till Jobbtorget
            </DigiButton>
          </DigiTypography>
        </DigiLayoutContainer>
        <DigiLayoutContainer
          afVerticalPadding
          afMarginTop
          className="imgContainer"
        >
          <DigiMediaImage
            afUnlazy
            afHeight="350"
            afWidth="350"
            afSrc={backgroundImage}
            afAlt="Arbetsförmedlingens logotyp som en fasadskyld"
          ></DigiMediaImage>
        </DigiLayoutContainer>
      </DigiLayoutContainer>
    </>
  );
};
