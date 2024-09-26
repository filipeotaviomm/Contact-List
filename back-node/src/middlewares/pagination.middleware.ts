import { NextFunction, Request, Response } from "express";
import { IPaginationParams } from "../interfaces/pagination.interface";

export const pagination =
  (url: string) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const queryPage: number = Number(req.query.page);
    const queryPerPage: number = Number(req.query.perPage);

    const page: number = queryPage && queryPage > 1 ? queryPage : 1;
    const perPage: number =
      queryPerPage && queryPerPage > 0 && queryPerPage <= 3 ? queryPerPage : 3;

    const baseUrl: string = `http://localhost:3000${url}`;
    
    const prevPage: string | null = `${baseUrl}?page=${
      page - 1
    }&perPage=${perPage}`;

    const nextPage: string | null = `${baseUrl}?page=${
      page + 1
    }&perPage=${perPage}`;

    const querySort: any = req.query.sort;
    const sortOpts: Array<string> = ["id", "name", "email", "value", "size"];

    const queryOrder: any = req.query.order;
    const orderOpts: Array<string> = ["asc", "desc"];

    let sort: string;
    let order: string;

    if (!(querySort && sortOpts.includes(querySort))) {
      sort = "id";
    } else {
      sort = querySort;
    }

    if (!querySort || !(queryOrder && orderOpts.includes(queryOrder))) {
      order = "asc";
    } else {
      order = queryOrder;
    }

    const pagination: IPaginationParams = {
      page: (page - 1) * perPage,
      perPage,
      prevPage,
      nextPage,
      order,
      sort,
    };

    res.locals.pagination = pagination;

    return next();
  };