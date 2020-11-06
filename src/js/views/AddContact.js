import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const AddContact = () => {

	const { actions, store } = useContext(Context);
	//defino cada clave como variable de estado
	const [newName, setNewName] = useState();
	// const [phone, setPhone] = useState();
    // const [email, setEmail] = useState();
    // const [address, setAddress] = useState();

	// useEffect(() => {
	// 	console.log("nombre", name);
	// 	console.log("phone", phone);
	// 	console.log("email", email);
	// });

	//hago un onchange en cada imput que setee su valor
	const handleChangeName = event => setNewName(event.target.value);
	const handleChangePhone = event => setPhone(event.target.value);
	const handleChangeEmail = event => setEmail(event.target.value);
	const handleChangeAddress = event => setAddress(event.target.value);

	const saveContact = event => {
		const newContact = {
			full_name: newName,
			address: newAdress,
			phone: newPhone,
			email: newEmail
        },
        actions.createContact(newContact),
        actions.listConstact(),
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
							value={newName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChangeEmail}
							value={newEmail}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChangePhone}
							value={newPhone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChangeAddress}
							value={newAddress}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
