import {screen, render} from '@testing-library/react';
import { Greetings } from './Greetings';

describe('Component load', () => {
    it('should load the greetings component correctly', () => {
        render(<Greetings />);
        expect(screen.getByText('Greetings')).toBeInTheDocument();
    });
});