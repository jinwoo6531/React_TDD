import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Info from '../Components/Info';

describe('Info', () => {
	it('rendered info component', () => {
		const { getByTestId } = render(<Info />);
		expect(getByTestId('Info')).toBeInTheDocument();
	});
});