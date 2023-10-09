import { PokemonsResponse, SimplePokemon } from '@/app/interface';
import { PokemonGrid } from '@/pokemons/components';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
	return {
		title: `Pokemons`,
		description: `first 151 pokemons`,
	};
}

export const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((res) => res.json());

	const pokemons = data.results.map((el) => {
		return {
			id: el.url.split('/').at(-2)!,
			name: el.name,
		};
	});

	return pokemons;
};

const PokemonsPage = async () => {
	const pokemons = await getPokemons(151);

	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2 text-center'>
				Pokemon List <small className='text-blue-600'>Static</small>
			</span>
			<PokemonGrid pokemons={...pokemons} />
		</div>
	);
};

export default PokemonsPage;
