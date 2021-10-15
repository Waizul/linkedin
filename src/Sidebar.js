import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import background from './../src/image/background.jpg';
function Sidebar() {
	const recentItem = (topic) => (
		<div className='sidebar_recent'>
			<span className='sidebar_hash'>#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className='sidebar'>
			<div className='sidebar_top'>
				<img src={background} alt='' />
				<Avatar className='sidebar_avatar' />
				<h2>Waizul</h2>
				<h4>waizul@gmail.com</h4>
			</div>
			<div className='sidebar_stats'>
				<div className='sidebar_stat'>
					<p>Who viewed you</p>
					<p className='sidebar_stat_number'>25</p>
				</div>
				<div className='sidebar_stat'>
					<p>Views on post</p>
					<p className='sidebar_stat_number'>22</p>
				</div>
			</div>
			<div className='sidebar_middle'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwareengineering')}
				{recentItem('developer')}
			</div>
		</div>
	);
}

export default Sidebar;
