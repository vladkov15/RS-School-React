import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyForm from './MyForm';

describe('Form', () => {
  it('Renders form', () => {
    render(<MyForm onSubmit={function (): void {
        throw new Error('Function not implemented.');
    } } />);
    expect(screen.getByText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of Birth:/i)).toBeInTheDocument();
    expect(screen.getByText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Female/i)).toBeInTheDocument();
    expect(screen.getByText(/Image:/i)).toBeInTheDocument();
  });
});
