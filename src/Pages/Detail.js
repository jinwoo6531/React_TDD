import React from 'react';
import styled from 'styled-components';

const Detail = () => {
	return (
		<DetailContainer data-testid='Detail'>
			<div>Hello world</div>
		</DetailContainer>
	);
};

const DetailContainer = styled.main`
	width: 100%;
	height: 100%;
	background-color: pink;
`;

export default Detail;
