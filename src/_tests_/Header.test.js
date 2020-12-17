import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Components/Header';

describe('<Header />', () => {
	it('Header is rendered', () => {
		const { getByAltText } = render(<Header />);
		expect(getByAltText('book journalism')).toBeInTheDocument();
	});

	it('has user and menu icons', () => {
		const { getByTestId } = render(<Header />);
		expect(getByTestId('menuIcon')).toBeInTheDocument();
		expect(getByTestId('userIcon')).toBeInTheDocument();
	});

	// it('has border line only scrollTop 0', () => {
	// 	const { getByTestId } = render(<Header />);
	// 	if (window.scrollY === 0) {
	// 		expect(getByTestId('Header')).toHaveStyle('border-bottom: none');
	// 	} else {
	// 		expect(getByTestId('Header')).toHaveStyle('border-bottom: 1px solid rgba(0, 0, 0, 1)');
	// 	}
	// });
});
