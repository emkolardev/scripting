import React from 'react';
import { Router, Route } from 'reactRouter';
import ListCreator from 'es6!app/components/ListCreator';
import NotFound from 'es6!app/components/NotFound';
import ListManager from 'es6!app/components/ListManager';

let routes = (
	<Router>
		<Route path="/" component={ ListCreator } />
		<Route path="/list/:listId" component={ ListManager } />
		<Route path="*" component={ NotFound } />
	</Router>
)

export default routes;