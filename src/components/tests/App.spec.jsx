import {
  describe,
  it,
  expect,
  afterEach
} from 'vitest';
import {
  waitFor,
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom';
// import { jest } from 'jest';
import App from '../App.jsx';
import InitialPage from '../initial_page/InitialPage.jsx';

afterEach(() => {
  cleanup();
});

describe('App renders to screen', () => {
  it('Check if the App renders to the screen', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });
});

describe('Registration modal render', () => {
  it('renders the modal when the Register button is clicked', () => {
    render(<App />);
    const registerButton = screen.getByText(/Register/i);
    fireEvent.click(registerButton);

    const cancelButton = screen.getByText(/Cancel/i);
    expect(cancelButton).toBeInTheDocument();
  });
});

// describe('App', () => {
//   it('UserProfile page loads after clicking login button', async () => {
//     render(<App />);

//     // Find the login button and click it
//     const loginButton = screen.getByTestId('loginButton');
//     await fireEvent.click(loginButton);

//     // Mock the getUser function to simulate a successful login
//     const getUser = () => Promise.resolve({
//       code: undefined,
//       profilePic: 'sample_profile_pic.png',
//     });

//     // Call the getUser function with sample email and password
//     await getUser('testing@service.edu', '1qa2ws');

//     // Check if the UserProfile component has been rendered
//     const userProfile = screen.getByTestId('userProfile');
//     expect(userProfile).toBeInTheDocument();
//   });
// });

describe('Incorrect login info', () => {
  it('Warning if email is invalid', async () => {
    render(<App />);
    const loginButton = screen.getByTestId('loginButton');
    fireEvent.click(loginButton);

    await waitFor (() => screen.getByText('Invalid E-Mail Address'));
    const invalid = screen.getByText('Invalid E-Mail Address');
    expect(invalid).toBeInTheDocument();
  });
});
