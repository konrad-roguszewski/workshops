import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App, { Search } from './App';

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });

  describe('Search', () => {
    test('calls the onChange callback handler', async () => {
      const onChange = jest.fn();

      render(
        <Search value="" onChange={onChange}>
          Search
        </Search>
      );

      await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

      expect(onChange).toHaveBeenCalledTimes(10);
    })
  });
});
