import {useState} from 'react';

const labelStyle = {
	marginRight: '8px',
};

const Filter = (props) => {
	return(
		<div className="filter-block">
			<label>
				<span style={labelStyle}>Search</span>
				<input
					autoFocus
					type="text"
					placeholder="Jake"
					onChange={props.changeQueryString}
				/>
			</label>
		</div>
	)
};

export default Filter;