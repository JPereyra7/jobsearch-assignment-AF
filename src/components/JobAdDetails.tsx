import {
  DigiLayoutContainer,
  DigiMediaImage,
  DigiNavigationBreadcrumbs,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IJobDetails } from "../models/IJob";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobAdById } from "../services/jobService";
import { ApplicationForm } from "./ApplicationForm";
import "../styles/jobAdDetails.css";

export const JobAdDetails = () => {
  const [jobAd, setJobAd] = useState<IJobDetails | null>(null);
  const { id } = useParams<{ id: string }>();

  const getData = async (id: string) => {
    try {
      const response = await getJobAdById(id);
      setJobAd(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const paragraphs = jobAd?.description.text
    .split("\n")
    .map((text, index) => <p key={index}>{text}</p>);

  return (
    <>
      <DigiLayoutContainer className="jobDetailsContainer" afNoGutter>
        <DigiLayoutContainer
          afVerticalPadding
          afNoGutter
          afMarginBottom
          className="detailsContainer"
        >
          <DigiTypography>
            <DigiNavigationBreadcrumbs afCurrentPage="Annons">
              <a href="/">Hem</a>
              <a href="/jobbtorget">Jobbtorget</a>
            </DigiNavigationBreadcrumbs>
            <DigiLayoutContainer afMarginTop className="employerContainer">
              <h2>{jobAd?.headline}</h2>
              <h5>{jobAd?.employer.name}</h5>
              {jobAd?.logo_url && (
                <DigiMediaImage
                  className="employeerLogo"
                  afUnlazy
                  afAlt=""
                  afSrc={jobAd?.logo_url}
                ></DigiMediaImage>
              )}
              {jobAd?.workplace_address.street_address && (
                <p>{jobAd.workplace_address.street_address}</p>
              )}
              {jobAd?.workplace_address.postcode && (
                <p>{jobAd.workplace_address.postcode}</p>
              )}
              {jobAd?.workplace_address.municipality && (
                <p>{jobAd.workplace_address.municipality}</p>
              )}

              {jobAd?.application_deadline && (
                <h6 className="deadlineText">
                  Ansök senast{" "}
                  {new Date(
                    jobAd?.application_deadline || ""
                  ).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h6>
              )}
            </DigiLayoutContainer>
            <DigiLayoutContainer
              afNoGutter
              afMarginBottom
              afMarginTop
              className="labelContainer"
            >
              <span className="label">
                Omfattning: {jobAd?.working_hours_type.label}
              </span>

              <span className="label">
                Varaktighet: {jobAd?.duration.label}
              </span>

              <span className="label"> Lön: {jobAd?.salary_type.label}</span>
            </DigiLayoutContainer>

            <DigiLayoutContainer afMarginTop className="aboutContainer">
              <h5>Om jobbet</h5>
              <div>{paragraphs}</div>
            </DigiLayoutContainer>
          </DigiTypography>
        </DigiLayoutContainer>
        <DigiLayoutContainer afNoGutter afMarginTop afMarginBottom>
          <ApplicationForm employerDetails={jobAd} />
        </DigiLayoutContainer>
      </DigiLayoutContainer>
    </>
  );
};
