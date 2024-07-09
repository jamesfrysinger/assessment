import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  test('renders the logo image with correct src and alt attributes', () => {
    render(<Header />);

    const logoImg = screen.getByAltText('Employee Directory');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', expect.stringContaining('logo.svg'));
    expect(logoImg).toHaveAttribute('alt', 'Employee Directory');
  });
});
