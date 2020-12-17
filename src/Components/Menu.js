import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { menuItems } from '../config';

const Menu = ({ menuOpenToggle, searchOpenToggle }) => {
	return (
		<MenuContainer data-testid='Menu'>
			<AiOutlineClose className='closeIcon' data-testid='closeIcon' onClick={menuOpenToggle} />
			<AiOutlineSearch className='searchIcon' onClick={searchOpenToggle} data-testid='searchIcon' />

			<h4>북저널리즘</h4>

			<div>
				<ul>{menuItems.bookjournalism.map((item, idx) => <li key={item + idx}>{item}</li>)}</ul>
			</div>
			<h4>뉴스</h4>

			<div>
				<ul>{menuItems.news.map((item, idx) => <li key={item + idx}>{item}</li>)}</ul>
			</div>
			<h4>더 보기</h4>

			<div>
				<ul>{menuItems.more.map((item, idx) => <li key={item + idx}>{item}</li>)}</ul>
			</div>
			<div>
				<button>PRIME</button>
			</div>
		</MenuContainer>
	);
};

const MenuSlideAnimation = keyframes`
	0% {
		left: -400px;
		opacity: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
`;

const MenuContainer = styled.section`
	width: 310px;
	height: 100vh;
	position: fixed;
	z-index: 20;
	background-color: #fff;
	border-right: 1px solid rgba(0, 0, 0, 1);
	animation: ${MenuSlideAnimation} .3s ease-in-out;
	overflow: auto;
	.closeIcon,
	.searchIcon {
		font-size: 25px;
		margin-left: 30px;
		margin-top: 20px;
		cursor: pointer;
		transition: 0.3s ease-in-out;
		&:hover {
			color: #0166ff;
		}
	}
	.searchIcon {
		display: none;
		position: absolute;
		right: 30px;
		top: 0;
	}
	h4 {
		font-size: 16.5px;
		margin-left: 30px;
		margin-top: 30px;
		cursor: pointer;
		font-family: serif;
		&:hover {
			color: #0166ff;
		}
	}
	div {
		max-height: 25vh;
		border-top: 1px solid rgba(0, 0, 0, 1);
		font-family: serif;
		ul {
			font-size: 13.5px;
			font-weight: 400;
			position: relative;
			right: 10px;
			display: flex;
			flex-wrap: wrap;
			li {
				list-style: none;
				margin-bottom: 20px;
				width: 50%;
				cursor: pointer;
				&:hover {
					color: #0166ff;
				}
			}
		}
	}
	div:last-child {
		height: 20vh;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		button {
			width: 250px;
			height: 30px;
			color: #0166ff;
			background-color: #fff;
			border: 1px solid #0166ff;
			transition: 0.2s ease-in-out;
			cursor: pointer;
			font-family: serif;
			letter-spacing: 2px;
			font-weight: 800;
			&:hover {
				color: #fff;
				background-color: #0166ff;
			}
		}
	}
	@media only screen and (max-width: 990px) {
		.searchIcon {
			display: block;
		}
	}
`;

export default Menu;
