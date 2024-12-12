import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IJob } from "../models/IJob";
import { useNavigate } from "react-router-dom";
import "../styles/showJobAd.css";
import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface IShowJobAdProps {
  jobAd: IJob;
  onSaveChange?: () => void;
}

export const ShowJobAd = ({ jobAd, onSaveChange }: IShowJobAdProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [logoHovered, setLogoHovered] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    const jobIndex = savedJobs.findIndex(
      (savedJob: IJob) => savedJob.id === jobAd.id
    );
    if (jobIndex !== -1) {
      setIsSaved(true);
    }
  }, [jobAd]);

  const handleClick = () => {
    navigate("/" + jobAd.id);
  };

  const publicationDate = new Date(jobAd.publication_date);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - publicationDate.getTime();

  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  let isPublishedText = `Publicerad för ${daysDifference} dagar sen`;

  if (daysDifference === 0) {
    isPublishedText = `Publicerades idag`;
  }
  if (daysDifference === 1) {
    isPublishedText = `Publicerad för ${daysDifference} dag sen`;
  }

  const handleSave = (job: IJob) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    const jobIndex = savedJobs.findIndex(
      (savedJob: IJob) => savedJob.id === job.id
    );

    if (jobIndex === -1) {
      savedJobs.push(job);
      setIsSaved(true);
    } else {
      savedJobs.splice(jobIndex, 1);
      setIsSaved(false);
    }

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

    if (onSaveChange) {
      onSaveChange();
    }
  };

  return (
    <>
      <DigiLayoutContainer afVerticalPadding className="jobContainer">
        <DigiTypography>
          <h3 className="headlineText" onClick={handleClick}>
            {jobAd.headline}
          </h3>
          <h6>{jobAd.employer.name}</h6>

          {jobAd.workplace_address.city ? (
            <p className="cityText">{jobAd.workplace_address.city}</p>
          ) : (
            <p className="cityText">{jobAd.workplace_address.municipality}</p>
          )}

          {jobAd.working_hours_type.label && (
            <span className="workingHoursText">
              {jobAd.working_hours_type.label}
            </span>
          )}
          <div className="publishedAndIconContainer">
            <p className="publishedText">{isPublishedText}</p>
            <div
              className="bookmarkIconContainer"
              onClick={() => handleSave(jobAd)}
            >
              <div
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
              >
                {isSaved || logoHovered ? (
                  <FaBookmark size="20px" />
                ) : (
                  <FaRegBookmark size="20px" />
                )}
              </div>
              <h4> {isSaved ? "Sparad" : "Spara"} </h4>
            </div>
          </div>
        </DigiTypography>
      </DigiLayoutContainer>
    </>
  );
};
