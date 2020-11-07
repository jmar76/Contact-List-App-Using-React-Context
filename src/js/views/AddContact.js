import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { actions, store } = useContext(Context);

	//DEFINO CADA CLAVE COMO VARIABLE CON ESTADO

	// const [name, setName] = useState("");
	// const [phone, setPhone] = useState("");
	// const [email, setEmail] = useState("");
	// const [address, setAddress] = useState("");

	const [data, setData] = useState({
		full_name: "",
		phone: "",
		email: "",
		address: "",
		agenda_slug: "Morena"
		// agenda_slug: "Morena" ???????
	});

	useEffect(() => {
		console.log("data despues de declarar [data,setData]", data);
		// console.log("phone", data.phone);
		// console.log("email", email);
	});

	//ONCHANGE CON CADA IMPUT PARA SETEAR VALOR CON SETX()

	// const handleChangeName = event => setName(event.target.value);
	// const handleChangePhone = event => setPhone(event.target.value);
	// const handleChangeEmail = event => setEmail(event.target.value);
	// const handleChangeAddress = event => setAddress(event.target.value);

	const handleChangeData = event => {
		setData(event.target.value);
		// setData({ ...data, [event.target.name]: event.target.value });
		// setData(...data, event.target.value);
		// // setTodo([...todo, task])
		//  setValues({
		// ...form,
		// [e.target.name]: e.target.value
		// NO SE SI SE ESTÁ GUARDANDO EN DATA COMO UN OBJETO, EN SUS CLAVES CORRESPONDIENTES ????
	};

	// useEffect(() => {
	// 	console.log("data despues del handleChangeName ", data);
	// }, []);

	//DECLARO NUEVA VARIABLE PARA TRATAR DE ALMACENAR LOS DATOS DE LAS IMPUT

	// const [newContact, setNewContact] = useState({
	// 	full_name: "",
	// 	address: "",
	// 	phone: "",
	// 	email: "",
	// 	agenda_slug: "Morena"
	// });

	// CONSTRUYO UN HANDLE PARA GUARDAR CONTACTO DE LOS IMPUT
	// const handleSaveContact = event => {
	// 	setNewContact({
	// 		full_name: name,
	// 		address: address,
	// 		phone: phone,
	// 		email: email,
	// 		agenda_slug: "Morena"
	// 	});
	// 	console.log("save contact", newContact);

	// 	actions.createContact(newContact);
	// 	setName("");
	// };

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
							onChange={handleChangeData}
							value={data.full_name}
							// onChange={handleChangeName}
							// value={data}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChangeData}
							value={data.email}
							// onChange={handleChangeEmail}
							// value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChangeData}
							value={data.phone}
							// onChange={handleChangePhone}
							// value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChangeData}
							value={data.address}
							// onChange={handleChangeAddress}
							// value={address}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						// onClick={handleSaveContact}
						onClick={() => {
							actions.createContact(data);
							// console.log("data desde onclick", data);
						}}>
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
