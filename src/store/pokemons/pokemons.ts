import { SimplePokemon } from '@/app/interface';
import { PokemonBasic } from '@/pokemons/components/PokemonGrid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
	favorites: { [key: string]: PokemonBasic };
}
// const getInitialState = (): PokemonsState => {
// 	const favorites = JSON.parse(
// 		localStorage.getItem('favorite-pokemons') ?? '{}'
// 	);
// 	return favorites;
// };
const initialState: PokemonsState = {
	favorites: {},
	// ...getInitialState(),
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		setFavoritesPokemons(
			state,
			action: PayloadAction<{ [key: string]: PokemonBasic }>
		) {
			state.favorites = action.payload;
		},
		addToFavorites(state, action: PayloadAction<PokemonBasic>) {
			if (state.favorites[action.payload.id]) {
				delete state.favorites[action.payload.id];
			} else {
				state.favorites[action.payload.id] = {
					id: action.payload.id,
					name: action.payload.name,
				};
			}
			localStorage.setItem(
				'favorite-pokemons',
				JSON.stringify(state.favorites)
			);
		},
	},
});

export const { addToFavorites, setFavoritesPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
