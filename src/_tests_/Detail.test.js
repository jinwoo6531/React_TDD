import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Detail from '../Pages/Detail';

describe('Detail page', () => {
	it('Detail page is rendered', () => {
		const { getByTestId } = render(<Detail />);
		expect(getByTestId('Detail')).toBeInTheDocument();
	});
});