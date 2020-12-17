import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Detail from './Pages/Detail';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/detail' component={Detail} />
				<Route exact path='/detail/:id' component={Detail} />
			</Switch>
		</Router>
	);
};

export default Routes;