import axios from 'axios';
import {useState, userEffect} from 'react';
import User from './User';

function UsersList() {
	const [users, setUsersList] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(users => setUsersList(users))
			.catch(err => console.warn(err))
	});

	console.log(users)
	
	return (
		<ul>
			{props.users.map(it => <User user={it} key={it.id}/>)}
		</ul>
	)
};

export default UsersList;