import {
  DigiButton,
  DigiFormFileUpload,
  DigiFormInput,
  DigiFormTextarea,
  DigiLayoutContainer,
  DigiLinkExternal,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import "../styles/applicationForm.css";
import {
  ButtonSize,
  ButtonVariation,
  FormFileUploadValidation,
  FormFileUploadVariation,
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  FormTextareaValidation,
  FormTextareaVariation,
  LayoutContainerVariation,
  LinkVariation,
} from "@digi/arbetsformedlingen";
import { IJobDetails } from "../models/IJob";

interface IAboutEmployerProps {
  employerDetails: IJobDetails | null;
}

export const ApplicationForm = ({ employerDetails }: IAboutEmployerProps) => {
  return (
    <>
      <DigiLayoutContainer
        className="wrapper"
        afVerticalPadding
        afVariation={LayoutContainerVariation.FLUID}
      >
        <form action="">
          {/* LABEL */}
          <DigiTypography>
            <h3>Sök jobbet här direkt</h3>
            {employerDetails?.application_details?.url && (
              <DigiLinkExternal
                afHref={employerDetails.application_details.url}
                afTarget="_blank"
                afVariation={LinkVariation.SMALL}
              >
                eller ansök via arbetsgivarens webbplats
              </DigiLinkExternal>
            )}
          </DigiTypography>

          {/* FÖRNAMN */}
          <DigiFormInput
            className="fnameInput"
            afLabel="Förnamn"
            afVariation={FormInputVariation.SMALL}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
          ></DigiFormInput>

          {/* EFTERNAMN */}
          <DigiFormInput
            afLabel="Efternamn"
            afVariation={FormInputVariation.SMALL}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
          ></DigiFormInput>

          {/* EMAIL */}
          <DigiFormInput
            afLabel="E-Postadress"
            afVariation={FormInputVariation.SMALL}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
          ></DigiFormInput>

          {/* LADDA UPP DOKUMENT */}
          <DigiFormFileUpload
            afVariation={FormFileUploadVariation.SMALL}
            afValidation={FormFileUploadValidation.ENABLED}
            afFileTypes="*"
          ></DigiFormFileUpload>

          {/* TEXTAREA */}
          <DigiFormTextarea
            afLabel="Vänligen skriv ditt personliga brev nedan"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
          ></DigiFormTextarea>

          {/* KNAPPAR */}

          <DigiLayoutContainer className="buttonWrapper" afNoGutter>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.SECONDARY}
              afFullWidth={false}
            >
              Rensa
            </DigiButton>

            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.PRIMARY}
              afFullWidth={false}
            >
              Skicka
            </DigiButton>
          </DigiLayoutContainer>
        </form>
      </DigiLayoutContainer>
    </>
  );
};
