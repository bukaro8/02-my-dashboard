import { PokemonsResponse, SimplePokemon } from '@/app/interface';
import { PokemonGrid } from '@/pokemons/components';
import PokemonFavoriteGrid from '@/pokemons/components/PokemonFavoriteGrid';
import { useAppSelector } from '@/store';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
	return {
		title: `favorites`,
		description: `first 151 pokemons`,
	};
}
const PokemonsPage = async () => {
	// const listFavorites = useAppSelector((state) => state.pokemons);
	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2 text-center'>
				Pokemon favorites <small className='text-blue-600'>Global State</small>
			</span>

			<PokemonFavoriteGrid />
		</div>
	);
};

export default PokemonsPage;
