import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { actions, store } = useContext(Context);

	//DEFINO CADA CLAVE COMO VARIABLE CON ESTADO

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	// useEffect(() => {
	// 	console.log("data despues de declarar [data,setData]", data);
	// 	// console.log("phone", data.phone);
	// 	// console.log("email", email);
	// });

	//ONCHANGE CON CADA IMPUT PARA SETEAR VALOR CON SETX()

	const handleChangeName = event => setName(event.target.value);
	const handleChangePhone = event => setPhone(event.target.value);
	const handleChangeEmail = event => setEmail(event.target.value);
	const handleChangeAddress = event => setAddress(event.target.value);

	// useEffect(() => {
	// 	console.log("data despues del handleChangeName ", data);
	// }, []);

	// CONSTRUYO UN HANDLE PARA GUARDAR CONTACTO al escribir LOS IMPUT
	const handleSaveContact = event => {
		const newContact = {
			full_name: name,
			address: address,
			phone: phone,
			email: email,
			agenda_slug: store.agenda_slug
		};
		// 	console.log("save contact", newContact);

		actions.createContact(newContact);
		alert("Tu contacto " + newContact.full_name + " ha sido creado");

		// setName("");
		// console.log('después de setName("")', name);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={handleChangeName}
							value={name}
							//  onChange={handleChangeData}
							// value={data.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							// onChange={handleChangeData}
							// value={data.email}
							onChange={handleChangeEmail}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							// onChange={handleChangeData}
							// value={data.phone}
							onChange={handleChangePhone}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							// onChange={handleChangeData}
							// value={data.address}
							onChange={handleChangeAddress}
							value={address}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={handleSaveContact}
							// onClick={() => {
							// 	actions.createContact(data);
							// 	// console.log("data desde onclick", data);
							// }}
						>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
