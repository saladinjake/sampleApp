import React from "react";
import { createMemoryHistory } from "history";

import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { GlobalStyles } from "../../theme/globalStyles";
import Theme from "../../theme";
import { matcherfunction } from '@testing-library/react'
import { AuthProvider } from "../../context/AuthContext";

let queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 2,
    },
  },
});

export function getText(sample) {
  return screen.queryByText(sample);
}

export function getRole(sample, opt = null) {
  if (!opt) {
    return screen.queryByRole(sample);
  }
  return screen.queryByRole(sample, opt);
}

export async function findRole(sample, opt = null) {
  if (!opt) {
    return screen.findByRole(sample);
  }
  return screen.findByRole(sample, opt);
}

export function wiating(sample) {
  return waitFor(sample);
}

queryClient.invalidateQueries(["sample-test-query"]);
export const enhanceRenderWithRouterComponent = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

export const enhanceRenderWithReduxProvider = (component, store, Provider) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const enhanceRenderWithStyledComponentProvider = (component) => {
  return {
    ...render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Theme>
              <GlobalStyles />
              {component}
            </Theme>
          </Router>
        </QueryClientProvider>
      </React.StrictMode>
    ),
  };
};

export const enhanceRenderWithContextProvider = (
  ContextProvider,
  values,
  component
) => {
  return {
    ...render(
      <Router>
        <ContextProvider value={values}>
          <Theme>
            <GlobalStyles />
            {component}
          </Theme>
        </ContextProvider>{" "}
      </Router>
    ),
  };
};

export const changeEvent = (testElement, value = "solomon grandy") => {
  return fireEvent.change(testElement, { target: { value } });
};

export const fillForm = async (formPayload) => {
  let formsData = {};

  let form = screen.getByRole("form", {
    name: /mock form identity/i,
  });
  formsData.form = form;
  for (let value of Object.keys(formPayload)) {
    let selector = `[name=\"${value}\"]`;
    let regexChecker = new RegExp("" + value + "");
    let type = formPayload[value]?.split("=");
    type = type[1];
    
    switch (type) {
      case "input": {
        let nameTextBox = screen.getByRole("textbox", {
          name: value,
        });

        fireEvent.change(nameTextBox, { target: { value: type[0] } });
        formsData[value] = nameTextBox;

        break;
      }
      case "textArea": {
        let descriptiontBox = screen.getByRole("textArea", {
          name: value,
        });
        fireEvent.change(descriptiontBox, { target: { value: type[0] } });
        formsData[value] = descriptiontBox;
        break;
      }
      case "select": {
        break;
      }
      case "checkbox": {
        let checkBox = screen.getByRole("checkbox", {
          name: value,
        })[0];
        fireEvent.change(checkBox, { target: { value: type[0] } });
        formsData[value] = checkBox;
        break;
      }
      case "radio": {
        break;
      }
      default: {
        break;
      }
    }
  }

  return formsData;
};
export const enhanceRenderWithTankStackQueryProvider = (
  component,
  rendererMockedDom
) => {
  if (rendererMockedDom) {
    return {
      ...rendererMockedDom(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Theme>
                <GlobalStyles />
                {component}
              </Theme>
            </Router>
          </QueryClientProvider>
        </React.StrictMode>
      ),
    };
  }
  return {
    ...render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Theme>
              <GlobalStyles />
              {component}
            </Theme>
          </Router>
        </QueryClientProvider>
      </React.StrictMode>
    ),
  };
};

export const redrawComponent = (fn, component) => {
  return fn(component);
};

export const getExpectCondition = (condition) => expect(condition);
export const waitingList = async (callback) => waitFor(callback);




// type query = (f: matcherfunction) => htmlelement

export const withmarkup = (query) => (text) =>
  query((content, node) => {
    const hastext = (node) => node.textcontent === text
    const childrendonthavetext = Array.from(node.children).every(
      child => !hastext(child )
    )
    return hastext(node) && childrendonthavetext
  })


  