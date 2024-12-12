import { IJob } from "./IJob";

export interface ISearch {
    total: string;
    hits: IJob[];
}