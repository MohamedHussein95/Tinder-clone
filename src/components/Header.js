import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';
import { IconButton } from '@mui/material';
import Tinder_logo from '../assets/images/Tinder_logo_PNG3.png';
function Header() {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header_icon' />
			</IconButton>
			<img className='header_logo' src={Tinder_logo} alt='tinder logo' />
			<IconButton>
				<ForumIcon fontSize='large' className='header_icon' />
			</IconButton>
		</div>
	);
}

export default Header;
