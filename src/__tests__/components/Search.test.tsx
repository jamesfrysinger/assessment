import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/Search';

describe('Search Component', () => {
  test('renders search form correctly', () => {
    const setQueryMock = jest.fn();
    render(<Search setQuery={setQueryMock} />);

    expect(screen.getByLabelText('Enter a name')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    const setQueryMock = jest.fn();
    render(<Search setQuery={setQueryMock} />);

    const input = screen.getByLabelText('Enter a name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John' } });

    expect(input.value).toBe('John');
  });

  test('handles form submission correctly', () => {
    const setQueryMock = jest.fn();
    render(<Search setQuery={setQueryMock} />);

    const input = screen.getByLabelText('Enter a name') as HTMLInputElement;
    const submitButton = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(submitButton);

    expect(setQueryMock).toHaveBeenCalledWith('John');
  });
});
