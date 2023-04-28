import React, { useEffect, useState } from 'react';
import './TinderCard.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios';

function TinderCards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const req = await axios.get('/tinder/cards');
			setPeople(req.data);
		};
		fetchData();
	}, []);
	const swiped = (dir, nameToDelete) => {
		console.log('removing' + nameToDelete);
	};
	const outOfFrame = (name) => {
		console.log(name + 'Left the Screen');
	};
	return (
		<div className='tinderCards'>
			<div className='tinderCards_cardContainer'>
				{people.map((person) => {
					return (
						<TinderCard
							className='swipe'
							key={person.name}
							preventSwipe={['up', 'down']}
							onSwipe={(dir) => swiped(dir, person.name)}
							onCardLeftScreen={() => outOfFrame(person.name)}
						>
							<div
								style={{ backgroundImage: `url(${person.imgUrl})` }}
								className='card'
							>
								<h3>{person.name}</h3>
							</div>
						</TinderCard>
					);
				})}
			</div>
		</div>
	);
}

export default TinderCards;
