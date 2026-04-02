import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

describe('UserProfile Component', () => {
    test('renders user name', () => {
        const user = { name: 'John Doe', email: 'john.doe@example.com' };
        render(<UserProfile user={user} />);
        const nameElement = screen.getByText(/John Doe/i);
        expect(nameElement).toBeInTheDocument();
    });

    test('renders user email', () => {
        const user = { name: 'John Doe', email: 'john.doe@example.com' };
        render(<UserProfile user={user} />);
        const emailElement = screen.getByText(/john.doe@example.com/i);
        expect(emailElement).toBeInTheDocument();
    });

    test('displays loading message when user data is loading', () => {
        render(<UserProfile user={null} />);
        const loadingElement = screen.getByText(/loading/i);
        expect(loadingElement).toBeInTheDocument();
    });

    test('handles undefined user gracefully', () => {
        render(<UserProfile user={undefined} />);
        const fallbackElement = screen.getByText(/no user data/i);
        expect(fallbackElement).toBeInTheDocument();
    });
});