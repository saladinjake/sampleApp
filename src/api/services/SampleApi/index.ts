import { AxiosResponse } from "axios";
import { IResponse } from "../Common.types";

import { postCall, getCall } from "../../apiCalls";
import endpoints from "./endpoints";
import Config from "../config"


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





export const fetchSampleData3 = async (data ={}) => {
  const responseApi = await fetch(Config.baseUrl+ endpoints.SAMPLE_URL_3, {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          credentials: "include",
            'Access-Control-Allow-Origin':'*'

        },


      });

      const apiResponse = await responseApi.json();
      return apiResponse
}


export const fetchSampleData2 = async (data ={}) => {
  const responseApi = await fetch(Config.baseUrl+ endpoints.SAMPLE_URL_2, {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          credentials: "include",
            'Access-Control-Allow-Origin':'*'

        },


      });

      const apiResponse = await responseApi.json();
      return apiResponse
}


export const fetchSampleData1 = async (data={}) => {
  const responseApi = await fetch(Config.baseUrl+ endpoints.SAMPLE_URL_1, {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          credentials: "include",
            'Access-Control-Allow-Origin':'*'

        },


      });

      const apiResponse = await responseApi.json();
      return apiResponse
}
