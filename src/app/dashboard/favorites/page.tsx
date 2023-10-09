import { PokemonsResponse, SimplePokemon } from '@/app/interface';
import { PokemonGrid } from '@/pokemons/components';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
	return {
		title: `favorites`,
		description: `first 151 pokemons`,
	};
}

const PokemonsPage = async () => {
	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2 text-center'>
				Pokemon favorites <small className='text-blue-600'>Global State</small>
			</span>
			<PokemonGrid pokemons={[]} />
		</div>
	);
};

export default PokemonsPage;
