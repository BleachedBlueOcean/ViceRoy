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
import UserProfile from '../user_profile/UserProfile.jsx';

afterEach(() => {
  cleanup();
});

describe('UserProfile', () => {
  it('renders the UserProfile component', () => {
    const mockUser = {
      achievements: [1],
      coinsOwned: [],
    };

    const noop = () => {};

    render(
      <UserProfile
        user={mockUser}
        setUser={noop}
        previewImage={null}
        setPreviewImage={noop}
        setShowBadgesModal={noop}
        showBadgesModal={false}
        setView={noop}
        unrealizedGains={[]}
        setUnrealizedGains={noop}
      />
    );

    const userProfileContainer = screen.getByTestId('userProfile');
    expect(userProfileContainer).toBeInTheDocument();
  });
});

describe('User profile has buttons', () => {
  render(<UserProfile />);
  it('should contain "Trading page" button', async () => {

  });
});
