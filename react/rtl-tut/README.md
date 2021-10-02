# How to use React Testing Library Tutorial

Article by Robin Wieruch on [robinwieruch.de](https://www.robinwieruch.de/react-testing-library)

>Notes:
- And there is the last resort search type TestId with getByTestId where one needs to assign data-testid attributes in the source code's HTML. After all, getByText and getByRole should be your go-to search types to select elements from your rendered React components with React Testing Library.
- So every time you are asserting that an element isn't there, use queryBy. Otherwise default to getBy.
- For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. If you assert for a missing element, use queryBy. Otherwise default to getBy.
- All search variants can be extended with the All word. Whereas all of them return an array of elements and can be associated with the search types again.
- Assertive functions happen on the right hand-side of your assertion. Usually all these assertive functions origin from Jest. However, React Testing Library extends this API with its own assertive functions like toBeInTheDocument.
- We can use RTL's fireEvent function to simulate interactions of an end user.
- Whenever possible, use userEvent over fireEvent when using React Testing Library.
