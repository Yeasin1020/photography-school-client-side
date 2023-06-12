import React, { useContext } from 'react';
import AddClassForm from '../Forms/AddClassForm';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../Provider/AuthProvider';


const AddClass = () => {
	
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
		}
	return (
		<div>
			<AddClassForm onSubmit={onSubmit}></AddClassForm>
		</div>
	);
};

export default AddClass;