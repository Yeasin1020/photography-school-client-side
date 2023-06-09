import React from 'react';
import AddClassForm from '../Forms/AddClassForm';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
	
	
	const onSubmit = data => {
		const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`



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

	const formData = new FormData();
	formData.append('image', data.fileUpload[0])
	fetch(img_hosting_url,{
		method:'POST',
		body: formData
	})
	.then(res => res.json())
	.then(imgResponse => {
		console.log(imgResponse);
	})
		}
	return (
		<div>
			<AddClassForm onSubmit={onSubmit}></AddClassForm>
		</div>
	);
};

export default AddClass;