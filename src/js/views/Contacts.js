import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const contacts = [
		// {
		// 	id: "1",
		// 	agenda_slug: "mi_slug",
		// 	email: "contact1@example.com",
		// 	full_name: "Nombre del contacto 1",
		// 	phone: "123456789",
		// 	address: "Street name, 1, 12345 Province"
		// },
		// {
		// 	id: "2",
		// 	agenda_slug: "mi_slug",
		// 	email: "contact2@example.com",
		// 	full_name: "Nombre del contacto 2",
		// 	phone: "123456789",
		// 	address: "Street name, 1, 12345 Province"
		// },
		// {
		// 	id: "3",
		// 	agenda_slug: "mi_slug",
		// 	email: "contact2@example.com",
		// 	full_name: "Nombre del contacto 2",
		// 	phone: "123456789",
		// 	address: "Street name, 1, 12345 Province"
		// }
	];

	const { actions, store } = useContext(Context);
	useEffect(() => {
		// actions.createContact();
		// actions.getContact();
		// actions.updateContact();
		// actions.deleteContact();
		actions.listContacts();
		console.log("store desde contacts", store);
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact, index) => {
							{
								console.log("contact desde el map", contact);
							}
							<ContactCard
								// data={contact}
								key={index}
								contactName={contact.full_name}
								contactAddress={contact.address}
								contactPhone={contact.phone}
								contactEmail={contact.email}
							/>;
						})}
						<ContactCard
							onDelete={() => setState({ showModal: true })}
							//  key={index}
						/>
						<ContactCard />
						<ContactCard />
						<ContactCard />
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
