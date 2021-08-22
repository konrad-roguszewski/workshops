import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFoloowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
};

describe("FollowersList", () => {

  beforeEach(() => {
    console.log("running before each test");
  });

  beforeAll(() => {
    console.log("ran once before all tests");
  });

  afterEach(() => {
    console.log("running after each test");
  });

  afterAll(() => {
    console.log("ran once after all tests");
  });

  it('should render follower item', async () => {
    render(<MockFoloowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower item 1', async () => {
    render(<MockFoloowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower item 2', async () => {
    render(<MockFoloowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should render multiple follower items', async () => {
  //   render(<MockFoloowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});