import { IJob, IJobDetails } from "../models/IJob";
import { ISearch } from "../models/ISearch";
import { get } from "./serviceBase";

export const BASE_URL = "https://jobsearch.api.jobtechdev.se/";

export const getJobAds = async (searchText: string, sortOption: string): Promise<IJob[]> => {
  const response = await get<ISearch>(
    `${BASE_URL}search?q=${searchText}&offset=0&limit=100&sort=${sortOption}`
  );
  return response.hits;
};

export const getJobAdById = async (id: string) => {
  const response = await get<IJobDetails>(`${BASE_URL}ad/${id}`);
  return response;
};