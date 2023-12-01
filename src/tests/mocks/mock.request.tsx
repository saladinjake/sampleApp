import {
  getGoogleLoginMockResponse,
  getAccountOfficerMockResponses,
  getAuditTrailMockResponses,
  getAccountMaintenanceMockResponses,
  getAdvancedFeesMockResponses,
  getApprovalConfigsMockResponses,
  getApprovalsReportMockResponses,
  getBranchesMockResponses,
  getBusinessAutomationsResponses,
  getCasaProductMockResponses,
  getCategoriesResponses,
  getChargesResponses,
  getCustomerInformationResponses,
  getCustomersAccountMockResponses,
  getEntryCodesMockResponses,
  getFixedDepositProductMockResponses,
  getGeneralLedgerMockResponses,
  getInterestMockResponses,
  getLienMockResponses,
  getLoanAccountsMockResponses,
  getLoanFeesMockResponses,
  getLoanProductsMockResponses,
  getMenuMockResponses,
  getPagesMockResponses,
  getRegionMockResponses,
  getSubMenuMockResponses,
  getSystemSetupAccountTierLevelMockResponses,
  getUsersFunctionMockResponses,
  getUsersMockResponses,
  getUsersRoleMockResponses,
  getGoogleLoginFailedMockResponse,
  getGenericErrorResponse,
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

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/account-officer-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getAccountOfficerMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/basems/mock/account-maintenance": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getAccountMaintenanceMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/advanced-fees-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getAdvancedFeesMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/approval-configurations-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getApprovalConfigsMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/approval-managements": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getApprovalsReportMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/branches-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getBranchesMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/business-automations-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getBusinessAutomationsResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/casa-product-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getCasaProductMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/charges-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getChargesResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/customer-information-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getCustomerInformationResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/customer-account-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getCustomersAccountMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/entry-codes-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getEntryCodesMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/fixed-deposit-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getFixedDepositProductMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/interest-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getInterestMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/general-ledger-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getGeneralLedgerMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }
    
    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/lien-memo":
    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/lien-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getLienMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }
    case "https://nerve-test-sandbox.mockme-service/audittrailmgtms/api/v1/AuditTrail":
    case "https://nerve-test-sandbox.mockme-service/audittrailmgtms/sample": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getAuditTrailMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/loan-account-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getLoanAccountsMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/loan-fees-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getLoanFeesMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/loan-products-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getLoanProductsMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/menu-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getMenuMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/pages-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getPagesMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/region-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getRegionMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/sub-menu-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getSubMenuMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/system-setup-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(
                  getSystemSetupAccountTierLevelMockResponses
                ),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/user-function-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getUsersFunctionMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/user-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () => await Promise.resolve(getUsersMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
            };
      return response;
    }

    case "https://nerve-test-sandbox.mockme-service/mockms/api/v2/userRole-management": {
      let response =
        options == true
          ? {
              ok: true,
              status: 200,
              data: async () =>
                await Promise.resolve(getUsersRoleMockResponses),
            }
          : {
              ok: true,
              status: 401,
              data: async () => await Promise.resolve(getGenericErrorResponse),
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
