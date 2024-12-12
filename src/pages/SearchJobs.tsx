import { useEffect, useState } from "react";
import { ShowJobAds } from "../components/ShowJobAds";
import { getJobAds } from "../services/jobService";
import { IJob } from "../models/IJob";
import "../styles/searchJobs.css";
import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockVariation,
  LayoutContainerVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiContextMenu,
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiNavigationBreadcrumbs,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { Pagination } from "../components/Pagination";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

interface IMenuItems {
  id: number;
  title: string;
}

export const SearchJobs = () => {
  const [jobAds, setJobAds] = useState<IJob[]>([]);
  const [userInput, setuserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState("relevance");
  const itemsPerPage = 7;

  useEffect(() => {
    getData();
  }, [currentPage, sortOption]);

  const getData = async () => {
    const response = await getJobAds(userInput, sortOption);
    setJobAds(response);
  };

  const handleSubmit = (e: DigiFormInputSearchCustomEvent<string>) => {
    e.preventDefault();
    setCurrentPage(0);
    getData();
  };

  const offset = currentPage * itemsPerPage;
  const currentJobAds = jobAds.slice(offset, offset + itemsPerPage);

  const handleClick = (id: number) => {
    if (id === 1) {
      setSortOption("pubdate-desc");
    } else {
      setSortOption("relevance");
    }
  };

  const menuItems: IMenuItems[] = [
    {
      id: 0,
      title: "Relevans",
    },
    {
      id: 1,
      title: "Publiceringsdatum",
    },
  ];
  
  return (
    <>
      <DigiLayoutContainer
        afVerticalPadding
        afVariation={LayoutContainerVariation.FLUID}
        className="wrapperSearch"
      >
        <DigiLayoutBlock
          className="searchContainer"
          afVariation={LayoutBlockVariation.TRANSPARENT}
        >
         <DigiNavigationBreadcrumbs afCurrentPage="Jobbtorget" className="breadcrumb" >
          <a href="/">Hem</a>
        </DigiNavigationBreadcrumbs>
          <DigiTypography>
            <h1>Jobbtorget</h1>
          </DigiTypography>
          <DigiFormInputSearch
            afLabel="Här kan du söka alla våra jobb"
            afVariation={FormInputSearchVariation.MEDIUM}
            afType={FormInputType.SEARCH}
            afLabelDescription="Skriv t.ex. Butikssäljare Stockholm "
            afButtonText="Sök"
            value={userInput}
            onInput={(e) => setuserInput((e.target as HTMLInputElement).value)}
            onAfOnSubmitSearch={handleSubmit}
            onAfOnClick={handleSubmit}
          ></DigiFormInputSearch>
          <DigiContextMenu
            className="sortingMenu"
            afTitle="Sorteringsalternativ"
            afMenuPosition="right-bottom"
            afMenuItems={menuItems}
            onAfChangeItem={(e) => handleClick(e.detail.idx)}
          ></DigiContextMenu>
        </DigiLayoutBlock>
      </DigiLayoutContainer>

      <JobAdsContext.Provider value={currentJobAds}>
        <DigiLayoutContainer>
          <ShowJobAds></ShowJobAds>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={jobAds.length}
          />
        </DigiLayoutContainer>
      </JobAdsContext.Provider>
    </>
  );
};
