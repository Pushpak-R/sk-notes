
import React from 'react'; 
import { render, Simulate, flushPromises } from 'react-testing-library';


import App from '../src/App';
import FakeTodoService from './service/FakeTodoService';


describe('The App component', () => {
    test('gets todos when component is mounted and displays them', async () => {
        const { container, getByTestId } = render(<App />);
    });
});