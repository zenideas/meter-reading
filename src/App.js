import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker'; //https://www.npmjs.com/package/react-datetime-picker
import './App.css';

function myPrettyDateFormat(d) {
	const pureDateStr = d.toString().split('GMT')[0];
	return `${pureDateStr}`
  }
function App() {
	const [currentDate,onChange]=useState(new Date());

	const [meter1, setM1] = useState('');
	const [meter2, setM2] = useState('');
	const [meter3, setM3] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const objt = { currentDate: myPrettyDateFormat(currentDate),meter1,meter2,meter3 };

		axios
			.post(
				'https://sheet.best/api/sheets/03546af2-1888-42f1-9771-e1a12879199a',
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<Container fluid className="container">
			<Header as="h2">Meter Reading Entry</Header>
			<Form className="form">
				<Form.Field>
					<label>DateTime</label><br/>
					 <DateTimePicker 
					 onChange={onChange} 
					 value={currentDate} 
				    //  format="d/MMM/y"
					 />
					{/* <SemanticDatepicker 
					onChange={onChange} 
					value={currentDate} 
					format="D/MMM/YY"
					/><br/> */}
					{/* <TimePicker 
					onChange={setTime} 
					value={getTime}
					/> */}
				</Form.Field>
				<Form.Field>
					<label>Meter1</label><br/>
					<input
						placeholder="Enter Meter1 reading"
						onChange={(e) => setM1(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Meter2</label><br/>
					<input
						placeholder="Enter Meter2 reading"
						onChange={(e) => setM2(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Meter3</label><br/>
					<input
						placeholder="Enter Meter3 reading"
						onChange={(e) => setM3(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;