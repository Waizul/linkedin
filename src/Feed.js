import { Create } from '@mui/icons-material';
import React from 'react';
import './Feed.css';

function Feed() {
	return (
		<div>
			<div className='feed'>
				<div className='feed-input-container'>
					<div className='feed-input'>
						<Create />
						<form>
							<input type='text' />
							<button type='submit'>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feed;
