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
  it('should render follower item', async () => {
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