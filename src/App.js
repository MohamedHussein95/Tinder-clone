import React from 'react';
import './App.css';
import Header from './components/Header';
import TinderCard from './components/TinderCard';
import SwipeButtons from './components/SwipeButtons';
function App() {
	return (
		//BEM class naming convention
		<div className='App'>
			{/* Header */}
			<Header />

			{/* Tinder Card */}
			<TinderCard />
			{/* Swipe Buttons */}
			<SwipeButtons />
		</div>
	);
}

export default App;
