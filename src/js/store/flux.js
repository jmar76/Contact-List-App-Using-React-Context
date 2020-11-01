const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
			//es un array. se recorre con .map()
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			createContact(data) {
				console.log(data);
				data = {
					// "id": "1480",
					// "agenda_slug": "Morena",
					// "full_name":
					// "email": "cmor@gmail.com",
					// "phone": "7864445566",
					// "address": "47568 NW 34ST, 33434 FL, USA",
					// "created_at": "2020-10-28 19:18:40"
				};
				const store = getStore();
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
			listContacts(slug) {
				const endpoint = "https://assets.breatheco.de//apis/fake/contact/agenda/" + slug;
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
			}
			/* Actualizar la clave contacts en mi objeto store con la respuesta a la petición listContacts */
		}
	};
};

export default getState;
