import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Main from '../Pages/Main';

describe('Main', () => {
	it('rendered Main component', () => {
		const { getByTestId } = render(<Main />);
		expect(getByTestId('MainContainer')).toBeInTheDocument();
	});

	it('toggle event to open and close menu', () => {
		const { getByTestId } = render(<Main />);
		const openMenuIcon = getByTestId('menuIcon');

		fireEvent.click(openMenuIcon);
		expect(getByTestId('Menu')).toBeInTheDocument();
		console.log('open menu');

		const closeMenuIcon = getByTestId('closeIcon');
		fireEvent.click(closeMenuIcon);
		console.log('close menu');

		expect(screen.queryByTestId('Menu')).not.toBeInTheDocument();
	});

	it('toggle event to open and close search', () => {
		const { getByTestId } = render(<Main />);
		const openSearchIcon = getByTestId('searchIcon');

		fireEvent.click(openSearchIcon);
		expect(getByTestId('Search')).toBeInTheDocument();
		console.log('open search');

		const closeSearchIcon = getByTestId('closeIcon');
		fireEvent.click(closeSearchIcon);
		console.log('close search');

		expect(screen.queryByTestId('Search')).not.toBeInTheDocument();
	});

	it('toggle event to open and close infomation', () => {
		const { getByTestId } = render(<Main />);
		const openInfoIcon = getByTestId('infoIcon');

		fireEvent.click(openInfoIcon);
		expect(getByTestId('Info')).toBeInTheDocument();
		console.log('open infomation');

		const closeSearchIcon = getByTestId('closeIcon');
		fireEvent.click(closeSearchIcon);
		console.log('close infomation');

		expect(screen.queryByTestId('Info')).not.toBeInTheDocument();
	});
});