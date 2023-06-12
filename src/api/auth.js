import { data } from "autoprefixer"

// save a user to database 
export const saveUser = user => {
	const currentUser ={
		email: user.email,
		name: user.displayName,
		photo: user.photoURL
	}
	fetch(`https://photo-server-production.up.railway.app/users/${user?.email}`,{
		method:'PUT',
		headers:{
			'content-type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
	.then(res=>res.json())
	.then(data => console.log(data))
}