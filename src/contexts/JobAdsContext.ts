import { createContext } from "react";
import { IJob } from "../models/IJob";

export const JobAdsContext = createContext<IJob[]>([]);