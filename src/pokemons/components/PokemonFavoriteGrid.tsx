'use client';
import { useAppSelector } from '@/store';
import { PokemonGrid } from '.';

const PokemonFavoriteGrid = () => {
	const listOfFavorites = useAppSelector((state) => state.pokemons);
	const isEmpty = Object.keys(listOfFavorites).length;
	let pokemons = [];
	if (isEmpty > 0) {
		for (let i = 1; i <= isEmpty; i++) {
			pokemons.push({
				name: `${listOfFavorites[i].name}`,
				id: listOfFavorites[i].id,
			});
		}
	}

	return (
		<div>
			{pokemons.length > 0 ? (
				<PokemonGrid pokemons={...pokemons} />
			) : (
				<h1 className='font-bold mt-10 text-5xl text-center'>
					Nothing to see here
				</h1>
			)}
		</div>
	);
};

export default PokemonFavoriteGrid;
