  
import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Login = () => {
	return (
		<React.Fragment>
			<Header />
			<LoginContainer data-testid='Login'>Hello world</LoginContainer>
			<Footer />
		</React.Fragment>
	);
};

const LoginContainer = styled.main`
	width: 100%;
	height: 100%;
	background-color: #fff;
`;

export default Login;