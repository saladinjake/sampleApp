import { AxiosResponse } from "axios";
import { IResponse } from "../Common.types";

import { postCall, getCall } from "../../apiCalls";
import endpoints from "./endpoints";



export const getAllDataSample1 = () => {
  return getCall(endpoints.SAMPLE_URL_1, {}) as Promise<
    AxiosResponse<IResponse & { data: any[] }>
  >;
};


export const getAllDataSample2 = () => {
  return getCall(endpoints.SAMPLE_URL_2, {}) as Promise<
    AxiosResponse<IResponse & { data: any[] }>
  >;
};


export const getAllDataSample3 = () => {
  return getCall(endpoints.SAMPLE_URL_3, {}) as Promise<
    AxiosResponse<IResponse & { data: any[] }>
  >;
};
