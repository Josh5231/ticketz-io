//react, react-router
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//user-side components
import App from './components/user-side/App';
import NewTicket from './components/user-side/NewTicket';
import Status from './components/user-side/Status';
import Login from './components/user-side/Login';
import Success from './components/user-side/Success';

//admin-side components
import AppAdmin from './components/admin-side/AppAdmin';
import Dashboard from './components/admin-side/pages/Dashboard';
import Tickets from './components/admin-side/pages/Tickets';
import EditUsers from './components/admin-side/pages/EditUsers';
import Settings from './components/admin-side/pages/Settings';
import Tasks from './components/admin-side/pages/Tasks';
import PageNotFound from './components/admin-side/pages/PageNotFound';



class Index extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/admin" component={AppAdmin}>
					<IndexRoute component={Dashboard} />
					<Route path="tickets" component={Tickets} />
					<Route path="editusers" component={EditUsers} />
					<Route path="settings" component={Settings} />
					<Route path="tasks" component={Tasks} />
					<Route path="*" component={PageNotFound} />
				</Route>
			</Router>
		)
	}
}



ReactDOM.render(<Index />, document.getElementById('root'));