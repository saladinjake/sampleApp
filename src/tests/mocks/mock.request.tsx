import {
  getGoogleLoginMockResponse,
getGoogleLoginFailedMockResponse,
getGenericErrorResponse
} from "./resolvedMocks/api.mocks";
const mockAxiosApiRequest = async (url, options = null) => {
  switch (url) {
    case "https://nerve-test-sandbox.mockme-service/basems/mock/Authenticatewithgoogle": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getGoogleLoginMockResponse),
            }
          : {
              ok: true,
              status: 401,
              data: async () =>
                await Promise.resolve(getGoogleLoginFailedMockResponse),
            };
      return response;
    }




    default: {
      let response =
        options == true
          ? {
              ok: false,
              status: 400,
              data: async () =>
                await Promise.resolve({
                  data: null,
                  message: `something went wrong.`,
                }),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }
  }
};

let mockSessionStorage = {};
let mockStorage = {};

export const localStorage = {
  setItem: (key, val) =>
    Object.assign(mockStorage, {
      [key]: val,
    }),
  getItem: (key) => mockStorage[key],
  clear: () => (mockStorage = {}),
};

export const sessionStorage = {
  setItem: (key, val) =>
    Object.assign(mockSessionStorage, {
      [key]: val,
    }),
  getItem: (key) => mockSessionStorage[key],
  clear: () => (mockSessionStorage = {}),
};

export default mockAxiosApiRequest;
