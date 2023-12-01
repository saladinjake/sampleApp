import React from "react";
import  "@testing-library/jest-dom";
import mockAxiosApiRequest, {
  sessionStorage,
  localStorage,
} from "../../mocks/mock.request";
import { enhanceRenderWithTankStackQueryProvider } from "../../utils/index";
import App from "../../../App";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";

const testEmail = "victor.juwa@kuda.com";
const testPassword = "xxxx-xxxx-xxxx-xxxx";
const testUserRoleID = "xxxx-xxxxxxxx-xxxxxxxx-xxxx";
const testDesignation = "Frontend Engineer";

let googleAuthService;
let googleAuthServiceFailed;
let responseData;
let invalidResponse;

beforeEach(async () => {
  global.window = {};
  global.fetch = mockAxiosApiRequest;
  window.localStorage = localStorage;
  global.localStorage = localStorage;
  global.sessionStorage = sessionStorage;
  const signinMock = async (pass = true) =>
    await mockAxiosApiRequest(
      "https://nerve-test-sandbox.mockme-service/basems/mock/Authenticatewithgoogle",
      pass
    );
  /*mock authenit*/
  googleAuthService = await signinMock(true);
  googleAuthServiceFailed = await signinMock(false);
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.resetAllMocks();
});
describe("renders the app with out crashing", () => {
  const { asFragment } = render(<App/>);

  it("should take a snapshot", () => {
    expect(asFragment(<App/>)).toMatchSnapshot();
  });

  // it("should return an already logged in user", async () => {
  //   responseData = await googleAuthService.data();
  //   expect(responseData.data.email).toEqual(testEmail);
  //   expect(responseData.data.designation).toEqual(testDesignation);
  //   expect(responseData.data.userRoleID).toEqual(testUserRoleID);
  //   expect(responseData.data.password).toEqual(testPassword);
  // });


});
