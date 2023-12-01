import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
  cleanup
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import axios from "axios";
import mockAxiosApiRequest from "./mocks/axios.config.mock";


beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockAxiosApiRequest);
  //jest.mock('axios');
});

afterEach(() => {
  jest.restoreAllMocks();
  cleanup()
});
test("renders the app with out crashing", async () => {
  render(<App />);
  screen.debug();
  // getBy*, findBy*, queryBy*
  /* returns element or error
  expect(screen.getByText(/Signed in as/)).toBeNull();

   
    getByText
    getByRole
    getByLabelText
    getByPlaceholderText
    getByAltText
    getByDisplayValue
  */
  /** use case
    * expect(screen.queryByText(/Signed in as/)).toBeNull();
    * queryByText
    queryByRole
    queryByLabelText
    queryByPlaceholderText
    queryByAltText
    queryByDisplayValue
    */

  /* async usecase
      expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

     findByText
    findByRole
    findByLabelText
    findByPlaceholderText
    findByAltText
    findByDisplayValue
     */

    /*
    getAllBy
queryAllBy
findAllBy
    */
  // expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(await screen.findByRole("option", { name: "husky"})).toBeInTheDocument();
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();

  //Simulate selecting an option and verifying its value
  //    const select = screen.getByRole("combobox");
  //    expect(await screen.findByRole("option", { name: "cattledog"})).toBeInTheDocument();
  //    userEvent.selectOptions(select, "cattledog");
  //    expect(select).toHaveValue("cattledog");

  //Simulate initiating the search request
  // const searchBtn = screen.getByRole("button", { name: "Search" });
  // expect(searchBtn).not.toBeDisabled();
  // userEvent.click(searchBtn);

  // //Loading state displays and gets removed once results are displayed
  // await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

  //Verify image display and results count
  //    const dogImages = screen.getAllByRole("img");
  //    expect(dogImages).toHaveLength(2);
  //    expect(screen.getByText(/2 Results/i)).toBeInTheDocument();
  //    expect(dogImages[0]).toHaveAccessibleName("cattledog 1 of 2");
  //    expect(dogImages[1]).toHaveAccessibleName("cattledog 2 of 2");


    //   fire events
    //   fireEvent.change(screen.getByRole('textbox'), {
    //     target: { value: 'JavaScript' },
    //   });
    //expect(onChange).toHaveBeenCalledTimes(1);

            // waitFor(() =>
            //       expect(
            //         screen.getByText(/Searches for JavaScript/)
            //       ).toBeInTheDocument()
            //     );
    //simulates user typing
    /*
     await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

   

    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
    */


    /*// Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
    */




    // it('fetches stories from an API and displays them', async () => {
    //     const stories = [
    //       { objectID: '1', title: 'Hello' },
    //       { objectID: '2', title: 'React' },
    //     ];
    
    //     axios.get.mockImplementationOnce(() =>
    //       Promise.resolve({ data: { hits: stories } })
    //     );
    
    //     render(<App />);
    
    //     await userEvent.click(screen.getByRole('button'));
    
    //     const items = await screen.findAllByRole('listitem');
    
    //     expect(items).toHaveLength(2);
    //   });



    
    //   it('fetches stories from an API and fails', async () => {
    //     axios.get.mockImplementationOnce(() =>
    //       Promise.reject(new Error())
    //     );
    
    //     render(<App />);
    
    //     await userEvent.click(screen.getByRole('button'));
    
    //     const message = await screen.findByText(/Something went wrong/);
    
    //     expect(message).toBeInTheDocument();
    //   });



    // it('fetches stories from an API and displays them', async () => {
    //     const stories = [
    //       { objectID: '1', title: 'Hello' },
    //       { objectID: '2', title: 'React' },
    //     ];
    
    //     const promise = Promise.resolve({ data: { hits: stories } });
    
    //     axios.get.mockImplementationOnce(() => promise);
    
    //     render(<App />);
    
    //     await userEvent.click(screen.getByRole('button'));
    
    //     waitFor(() => promise);
    
    //     expect(screen.getAllByRole('listitem')).toHaveLength(2);
    //   });


    /* it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })*/

   /*more samples

   it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

   it('increments counter', () => {
    const { getByTestId } = render(<TestEvents />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<TestEvents />); 
    
    fireEvent.click(getByTestId('button-down'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
  });

  //wait
   fireEvent.click(getByTestId('button-up'))

    const counter = await waitForElement(() => getByText('1')) 
        expect(counter).toHaveTextContent('1')
   
   */
});


/* 
toBeDisabled
toBeEnabled
toBeEmpty
toBeEmptyDOMElement
toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
toBeVisible
toContainElement
toContainHTML
toHaveAttribute
toHaveClass
toHaveFocus
toHaveFormValues
toHaveStyle
toHaveTextContent
toHaveValue
toHaveDisplayValue
toBeChecked
toBePartiallyChecked
toHaveDescription
*/