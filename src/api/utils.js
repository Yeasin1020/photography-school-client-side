
export const imageUpload = async image => {
	
	const formData = new FormData()
	formData.append('image', image)
	const url = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_Image_Upload_Token}`
	const response = await fetch(url, {
		method:'POST',
		body: formData
	})
	const pic = await response.json()
	return pic;

}