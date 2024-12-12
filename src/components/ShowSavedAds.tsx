import {
  DigiButton,
  DigiLayoutContainer,
  DigiNavigationBreadcrumbs,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IJob } from "../models/IJob";
import { useEffect, useState } from "react";
import { ShowJobAd } from "./ShowJobAd";
import "../styles/showSavedAds.css";
import { useNavigate } from "react-router-dom";

export const ShowSavedAds = () => {
  const [savedAds, setSavedAds] = useState<IJob[]>([]);

  const navigate = useNavigate();

  const fetchSavedJobs = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSavedAds(savedJobs);
  };

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const navigateToJobbtorget = () => {
    navigate("/jobbtorget");
  };

  return (
    <>
      <DigiTypography>
        <DigiLayoutContainer afMarginBottom className="savedWrapper">
          <div className="breadcrumbContainer">
            <DigiNavigationBreadcrumbs
              afCurrentPage="Sparat"
              className="breadcrumb"
            >
              <a href="/">Hem</a>
              <a href="/jobbtorget">Jobbtorget</a>
            </DigiNavigationBreadcrumbs>
            </div>
            <div className="savedH1">
              {savedAds.length > 0 && <h1>Sparade annonser</h1>}
            </div>
        
          <div className="savedAdsContainer">
            {savedAds.length > 0 ? (
              savedAds.map((jobAd) => (
                <ShowJobAd
                  key={jobAd.id}
                  jobAd={jobAd}
                  onSaveChange={fetchSavedJobs}
                ></ShowJobAd>
              ))
            ) : (
              <>
                <DigiLayoutContainer className="noJobsText" afNoGutter>
                  <h3>Du har inga sparade annonser.</h3>
                  <p>Sök ditt nästa jobb här:</p>
                  <DigiButton onAfOnClick={navigateToJobbtorget}>
                    Jobbtorget
                  </DigiButton>
                </DigiLayoutContainer>
              </>
            )}
          </div>
        </DigiLayoutContainer>
      </DigiTypography>
    </>
  );
};
