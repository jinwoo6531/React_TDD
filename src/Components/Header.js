import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import logo from '../Images/logo.png';

const Header = ({ menuOpenToggle, searchOpenToggle, scrollEvent }) => {
	return (
		<HeaderContainer scrollEvent={scrollEvent === 0} data-testid='Header'>
			<AiOutlineMenu className='menuIcon' onClick={menuOpenToggle} data-testid='menuIcon' />
			<h1>
				{/* <a href='/'>BOOK JOURNALISM</a> */}
                <a href='/'><img src={logo} alt=""/></a>
			</h1>
			<div>
				<AiOutlineSearch className='searchIcon' onClick={searchOpenToggle} data-testid='searchIcon' />
				<a href='/login'>
					<AiOutlineUser className='userIcon' data-testid='userIcon' />
				</a>
			</div>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;
	background-color: #fff;
	position: fixed;
	top: 0;
	transition: .3s ease-in-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 24px;
	z-index: 10;
	border-bottom: ${props => (props.scrollEvent ? 'none' : '1px solid rgba(0, 0, 0, 1)')};
	h1 {
		display: flex;
		a {
			font-size: 20px;
			text-decoration: none;
		}
		img {
			width: 205px;
			height: auto;
		}
	}
	.menuIcon {
		margin-left: 30px;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		&:hover {
			color: #0166ff;
		}
	}
	.searchIcon {
		margin-right: 20px;
		cursor: pointer;
		position: absolute;
		right: 50px;
		transition: 0.2s ease-in-out;
		&:hover {
			color: #0166ff;
		}
	}
	a {
		color: rgba(0, 0, 0, 1);
		.userIcon {
			margin-right: 30px;
			cursor: pointer;
			transition: 0.2s ease-in-out;
			&:hover {
				color: #0166ff;
			}
		}
	}
	@media only screen and (max-width: 990px) {
		height: 55px;
		border-bottom: 1px solid rgba(0, 0, 0, 1);
		.searchIcon {
			display: none;
		}
	}
`;

export default Header;