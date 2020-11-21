import React from 'react';
import ReactDOM from 'react-dom';
import './CardTile.css';
import cloud from './assets/cloud.png';
import 'tachyons';

function CardTile(props) {
	return (
		<div className="tileDiv grow">
			<h1>{props.day}</h1>
			<p>{props.date}</p>
			<img className="image" src={cloud} alt="cloud" />
			<h1>{props.temp}</h1>
		</div>
	);
}

export default CardTile;