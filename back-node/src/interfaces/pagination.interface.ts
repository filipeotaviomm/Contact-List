import { IContacstResp } from "./contact.interface";

export type IPaginationParams = {
    page: number;
    perPage: number;
    order: string;
    sort: string;
    prevPage: string | null;
    nextPage: string | null;
  };
  
  export type IAllContacts = {
    prevPage: string | null;
    nextPage: string | null;
    data: IContacstResp;
    count: number;
  };
