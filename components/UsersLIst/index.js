import axios from 'axios';
import {useState, useEffect} from 'react';
import _ from 'lodash';
import Loading from '../Loading';
import Filter from '../Filter';
import User from './User';

const UsersList = (props) => {
	const [users, setData] = useState([]);
	const [filterUsers, setFilterData] = useState([]);
	const [query, setQuery] = useState('');
	const [prevQuery, setPrevQuery] = useState('');

	const fetchData = async () => {
		const result = await axios(
			'https://jsonplaceholder.typicode.com/users',
		);

		setData(result.data);
	};

	const changeQueryString = evt => {
		const currentString = evt.target.value;
		setQuery(currentString);
	};
	
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if(query !== prevQuery) {
			setPrevQuery(query);
			const filtersData = _.filter(users, user => user.name.toLowerCase().match(query))
			setFilterData(filtersData);
		}
	});
	
	return (
		<>
			<Filter changeQueryString={changeQueryString}/>
			<ul>

				{_.size(filterUsers)
					? filterUsers.map(user => <User user={user} key={user.id} />)
					: users.map(user => <User user={user} key={user.id} />)}

				<Loading isShown={!Boolean(users.length)}/>
			</ul>
		</>
	)
};

export default UsersList;