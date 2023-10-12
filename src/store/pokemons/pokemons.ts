import { SimplePokemon } from '@/app/interface';
import { PokemonBasic } from '@/pokemons/components/PokemonGrid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
	[key: string]: PokemonBasic;
}

const initialState: PokemonsState = {
	'1': { id: '1', name: 'bulbasaur' },
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		addToFavorites(state, action: PayloadAction<PokemonBasic>) {
			state[action.payload.id]
				? delete state[action.payload.id]
				: (state[action.payload.id] = {
						id: action.payload.id,
						name: action.payload.name,
				  });
		},
	},
});

export const { addToFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
