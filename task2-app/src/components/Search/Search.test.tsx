import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('Renders search input', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});