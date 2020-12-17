import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const Search = ({ searchOpenToggle }) => {
	return (
		<SearchContainer data-testid='Search'>
			<AiOutlineClose className='closeIcon' data-testid='closeIcon' onClick={searchOpenToggle} />
			<div>
				<AiOutlineSearch className='searchIcon' onClick={searchOpenToggle} data-testid='searchIcon' />
				<input type='text' autoFocus={true} />
			</div>
		</SearchContainer>
	);
};

const SearchSlideAnimation = keyframes`
	0% {
		top: -400px;
		opacity: 0;
	}
	100% {
		top: 0;
		opacity: 1;
	}
`;

const SearchSlideAnimationMobile = keyframes`
	0% {
		right: -100vw;
		opacity: 0;
	}
	100% {
		right: 0;
		opacity: 1;
	}
`;

const SearchContainer = styled.section`
	width: 100%;
	height: 400px;
	position: fixed;
	top: 0;
	z-index: 20;
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 1);
	animation: ${SearchSlideAnimation} 0.3s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
	.closeIcon {
		font-size: 25px;
		cursor: pointer;
		position: absolute;
		right: 70px;
		top: 20px;
		z-index: 20;
		color: rgba(0, 0, 0, 1);
		&:hover {
			color: #0166ff;
		}
	}
	div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.searchIcon {
			font-size: 30px;
			position: relative;
			left: 35px;
		}
		input {
			width: 60%;
			height: 50px;
			border: none;
			border-bottom: 1px solid rgba(0, 0, 0, 1);
			font-size: 35px;
			outline: none;
			padding: 0 50px;
		}
	}
	@media only screen and (max-width: 990px) {
		height: 100%;
		animation: ${SearchSlideAnimationMobile} .3s ease-in-out;
	}
`;

export default Search;
