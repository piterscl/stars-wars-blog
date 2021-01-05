const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			getcharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							characters: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getplanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							planets: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getstarships: () => {
				fetch("https://swapi.dev/api/starships/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							starships: data.results
						});
					})
					.catch(error => console.log(error));
			},
			addFavorites: favorito => {
				const store = getStore();
				const { favorites } = store;
				favorites.push(favorito);
				setStore({
					favorites: favorites
				});
			},
			deleteFavorites: index => {
				const store = getStore();
				const { favorites } = store;
				favorites.splice(index, 1);
				setStore({
					favorites: favorites
				});
			}
		}
	};
};

export default getState;
