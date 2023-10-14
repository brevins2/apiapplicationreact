import { useState } from 'react'
import axios from 'axios'

function Form(){

	// const url = '/home/brevin/Documents/React/apicalls/src/components/data.json';
	// const [data, setData] = useState({
	// 		name: "",
	// 		date: ""
	// 	});
	// const upload = async() => {
	// 	try {
	// 		const newdata = {...data}
	// 		const response = await axios.post(url, {
	// 			id: 11,
	// 			name: 'brevin',
	// 			username: 'brev',
	// 			email: 'email@me.com'
	// 		})
	// 		console.log(response)
	// 	}
	// 	catch(error){
	// 		console.log(error)
	// 	}

		const upload = async () => {
	    try {
	      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
	        id: 11,
				name: 'brevin',
				username: 'brev',
				email: 'email@me.com'
	      });
	      console.log(response.data);
	    } catch (error) {
	      console.error(error);
	    }
	}

	return(
		<form onSubmit={upload} style={{width: '50%', margin: '0 auto', marginTop: '5rem', border: '1px solid grey', padding: '10px', display: 'flex', flexWrap: 'wrap'}}>
			<div style={{display: 'inline-block', width: '90%'}}>
				<label>Name: </label>
				<input type="text" name="name" style={{width: '100%'}} />
			</div>
			<div style={{display: 'inline-block', width: '100% !important'}}>
				<label>Name: </label>
				<input type="date" name="date" style={{width: '100%'}} />
			</div>

			<div style={{marginTop: '2rem', width: '100%', textAlign: 'center'}}>
				{/*<input type="submit" name="upload" value="submit data" style={{width: '30%'}} />*/}
				<button>submit data</button>
			</div>
		</form>
	);
}


export default Form;