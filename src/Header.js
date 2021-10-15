import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from './../src/image/linkedin2.png';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, NotificationsActive } from '@mui/icons-material';
import Home from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
function Header() {
	return (
		<div className='header'>
			<div className='header-left'>
				<img src={logo} alt='' />
				<div className='header-search'>
					<SearchIcon />
					<input type='text' name='' id='' />
				</div>
			</div>
			<div className='header-right'>
				<HeaderOption Icon={Home} title='Home' />
				<HeaderOption Icon={SupervisorAccount} title='My Network' />
				<HeaderOption Icon={BusinessCenter} title='Jobs' />
				<HeaderOption Icon={Chat} title='Messaging' />
				<HeaderOption Icon={NotificationsActive} title='Notification' />
				<HeaderOption avatar='' title='me' />
			</div>
		</div>
	);
}

export default Header;
