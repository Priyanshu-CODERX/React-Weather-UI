import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import CardTile from './CardTile';
function App(props) {

	return (
		<div className="mainDiv">
			<div className="TextDiv">
				<h1>Weather Forcast: UI</h1>
				<p>Developed By: Priyanshu Bhattacharjee</p>
			</div>
			<div className="tiles">
				<CardTile className="cards" day="Sunday" date="1st March, 2020" temp = "37° C" />
				<CardTile className="cards" day="Monday" date="2nd March, 2020" temp = "25° C" />
				<CardTile className="cards" day="Tuesday" date="3rd March, 2020" temp = "30° C" />
				<CardTile className="cards" day="Wednesday" date="4th March, 2020" temp = "45° C" />
			</div>
		</div>
	);
}

export default App;
