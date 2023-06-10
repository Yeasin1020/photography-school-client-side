import React, { useContext } from 'react';
import AddClassForm from '../Forms/AddClassForm';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../Provider/AuthProvider';


const AddClass = () => {
	const {user} = useContext(AuthContext)
	
	const onSubmit = data => {
		

		fetch('http://localhost:5000/postClass', {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(result => {
		console.log(result)
	})

		console.log(data.className);

	// const formData = new FormData();
	// formData.append('image', data.fileUpload[0])
	// fetch(img_hosting_url,{
	// 	method:'POST',
	// 	body: formData
	// })
	// .then(res => res.json())
	// .then(imgResponse => {
	// 	console.log(imgResponse);
	// })

	imageUpload(data.fileUpload)
	.then(pic => {
		const classData = {
			image: pic.data.display_url,
			host: {
				name: user?.displayName,
				image: user?.photoURL,
				email: user?.email
			}
		}
	})
		}
	return (
		<div>
			<AddClassForm onSubmit={onSubmit}></AddClassForm>
		</div>
	);
};

export default AddClass;