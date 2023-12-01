
import { IResponse } from "../Common.types";

import endpoints from "./endpoints";
import Config from "../config"







export const fetchSampleData3 = async (data ={}) => {
  try{
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

  }catch (err){

  }

}


export const fetchSampleData2 = async (data ={}) => {
  try{
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

  }catch (err){

  }

}


export const fetchSampleData1 = async (data={}) => {
  try{
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
  }catch(err){

  }

}
