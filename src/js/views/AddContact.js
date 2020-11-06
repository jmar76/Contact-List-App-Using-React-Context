import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { actions, store } = useContext(Context);
	//defino cada clave como variable de estado
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		console.log("nombre", name);
		// console.log("phone", phone);
		// console.log("email", email);
	});

	//hago un onchange en cada imput que setee su valor
	const handleChangeName = event => setName(event.target.value);
	const handleChangePhone = event => setPhone(event.target.value);
	const handleChangeEmail = event => setEmail(event.target.value);
	const handleChangeAddress = event => setAddress(event.target.value);

	useEffect(() => {
		console.log("name despues del handleChangeName ", name);
	}, []);

	const [newContact, setNewContact] = useState({
		full_name: "",
		address: "",
		phone: "",
		email: "",
		agenda_slug: "Morena"
	});
	const handleSaveContact = event => {
		setNewContact({
			full_name: name,
			address: address,
			phone: phone,
			email: email,
			agenda_slug: "Morena"
		});
		console.log("save contact", newContact);

		actions.createContact(newContact);
		setName("");
	};

	// console.log(setNewContact());
	// 	const newContact = {
	// 		full_name: name,
	// 		address: adress,
	// 		phone: phone,
	// 		email: email,
	// 		agenda_slug: "Morena"
	// 	};
	// };
	// actions.createContact(newContact),
	// actions.listConstact(),
	// setNewName("");
	// console.log("save contact", newContact);
	// actions.createContact(newContact);

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
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
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
							onChange={handleChangeAddress}
							value={address}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={handleSaveContact}>
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
