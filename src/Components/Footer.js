import React from 'react';
import styled from 'styled-components';
import { BsInfoCircle, BsChevronRight } from 'react-icons/bs';

const Footer = ({ infoOpenToggle }) => {
	return (
		<FooterContainer data-testid='Footer'>
			<div onClick={infoOpenToggle}>
				<BsInfoCircle className='infoIcon' data-testid='infoIcon' />
				<span> Info</span>
			</div>
			<form>
				<label>
					Weekly Newsletter
					<input type='email' placeholder='Your email here' />
				</label>
				<BsChevronRight className='arrowIcon' type='submit' />
			</form>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	height: 300px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 100px 5% 50px 5%;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		.infoIcon {
			font-size: 25px;
		}
		span {
			margin-left: 7px;
			font-size: 18px;
			font-family: serif;
			font-weight: bold;
			letter-spacing: 1px;
		}
	}
	form {
		position: relative;
		font-size: 18px;
		font-weight: 200;
		label {
			font-family: serif;
			letter-spacing: 0.5px;
			input {
				width: 260px;
				height: 35px;
				border: none;
				border-bottom: 1px solid rgba(0, 0, 0, 1);
				margin-left: 15px;
				font-size: 20px;
				outline: none;
				&::placeholder {
					font-size: 15px;
					color: rgba(0, 0, 0, 0.2);
					font-family: serif;
					font-weight: 600;
					letter-spacing: 2px;
				}
			}
		}
		.arrowIcon {
			position: absolute;
			right: -5px;
			bottom: 8px;
			cursor: pointer;
		}
	}
`;

export default Footer;