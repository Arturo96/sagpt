import React from "react";
import { Header, loadHeader } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "../components/content/Home";
import { About } from "../components/content/About";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Products } from "../components/content/Products";
import { Contact } from "../components/content/Contact";
import {Customers} from '../components/content/Customers';
import {Purchases} from '../components/content/Purchases';
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { AddBuy } from "../components/content/AddBuy";
import { useEffect } from "react";
import {firebase} from '../firebase/firebase-config';
import { login } from "../actions/auth";
import { useState } from "react";
import { startLoadingCustomers } from "../actions/customer";

export const AppRouter = () => {

	const {uid} = useSelector(state => state.auth)

	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true)

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if(user?.uid) {
				dispatch(login(user));
				dispatch(startLoadingCustomers());
			} 

			setChecking(false);
		})

	}, [dispatch, setChecking])

	if (checking) return <h2>Loading...</h2>

	return (
		<Router>
			<div>
				<Header />
				<main className="content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/products" component={Products} />
						<Route exact path="/contact" component={Contact} />
						<PrivateRoute exact path="/customers" isLogged={!!uid} component={Customers} />
						<PrivateRoute exact path="/purchases" isLogged={!!uid} component={Purchases} />
						<PrivateRoute exact path="/addBuy" isLogged={!!uid} component={AddBuy} />
						<Redirect to="/" />
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

window.addEventListener("DOMContentLoaded", e => {
	loadHeader();
});
