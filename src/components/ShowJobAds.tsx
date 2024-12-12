import { useContext } from "react";
import { ShowJobAd } from "./ShowJobAd";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import "../styles/showJobAds.css";

export const ShowJobAds = () => {
  const jobAds = useContext(JobAdsContext);

  return (
    <>
      <DigiLayoutContainer className="resultWrapper">
        {jobAds.map((jobAd) => {
          return <ShowJobAd key={jobAd.id} jobAd={jobAd}></ShowJobAd>;
        })}
      </DigiLayoutContainer>
    </>
  );
};
