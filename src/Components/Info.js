import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';

const Info = ({ infoOpenToggle }) => {
	return (
		<InfoContainer data-testid='Info'>
			<AiOutlineClose className='closeIcon' data-testid='closeIcon' onClick={infoOpenToggle} />
			<img
				src='https://avatars1.githubusercontent.com/u/48628740?s=460&u=bc89f324605e79f99a8c048bf20fdc1b8c0da154&v=4'
				alt='codeAmeba pofile'
			/>
			<div className='infoBox'>
				<h3>안녕하세요!</h3>
				<p>이 사이트는 TDD를 연습하기 위해 만든 북저널리즘 클론 사이트입니다.</p>
				<div className='iconBox'>
					<a href='https://github.com/jinwoo6531' target='_blank' rel='noopener noreferrer'>
						<AiOutlineGithub className='githubIcon' />
					</a>
					<a href='https://serene-shirley-9f5cd5.netlify.app/' target='_blank' rel='noopener noreferrer'>
						<FaBlogger className='blogIcon' />
					</a>					
				</div>
			</div>
		</InfoContainer>
	);
};

const InfoSlideAnimation = keyframes`
	0% {
		bottom: -250px;
		opacity: 0;
	}
	100% {
		bottom: 0;
		opacity: 1;
	}
`;

const InfoContainer = styled.aside`
	width: 100%;
	height: 250px;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	z-index: 20;
	animation: ${InfoSlideAnimation} .3s ease-in-out;
	border-top: 1px solid rgba(0, 0, 0, 1);
	display: flex;
	justify-content: center;
	align-items: flex-end;
	.closeIcon {
		font-size: 25px;
		position: absolute;
		top: 20px;
		left: 30px;
		cursor: pointer;
		&:hover {
			color: #0166ff;
		}
	}
	img {
		width: 250px;
		height: auto;
	}
	.infoBox {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		margin-bottom: 45px;
		padding: 0 20px;
		h3 {
			font-size: 26px;
			border-bottom: 3px solid rgba(0, 0, 0, 1);
			margin: 0;
		}
		.iconBox {
			font-size: 30px;
			height: 30px;
			width: 150px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			a {
				color: rgba(0, 0, 0, 1);
			}
			& > *:hover {
				color: #0166ff;
			}
		}
	}
`;

export default Info;