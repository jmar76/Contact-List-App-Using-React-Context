const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			//es un array. se recorre con .map()
			agenda_slug: "Morena"
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			createContact(data) {
				// const store = getStore();
				//no hace falta getStore() porque no necesita cambiar nada del store
				console.log(data);
				data = {
					agenda_slug: store.agenda_slug,
					email: "martadmdo@gmail.com",
					full_name: "Marta de la Morena",
					phone: "660156882",
					address: "Calle única, 5b. Piedrafita de Jaca"
				};
				const endpoint = " https://assets.breatheco.de/apis/fake/contact/";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			getContact(id, data) {
				/*el parametro :id del endpoint tiene que reemplazarse por el parametro id de la función getContact */
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			updateContact(id, data) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			deleteContact(id) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "DELETE"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			listContacts() {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/" + store.agenda_slug;
				const config = {
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);
						setStore({ contacts: json });
						console.log(store.contacts);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
			/* Actualizar la clave contacts en mi objeto store con la respuesta a la petición listContacts */
		}
	};
};

export default getState;
