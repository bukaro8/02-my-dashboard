'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addToFavorites } from '@/store/pokemons/pokemons';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { PokemonBasic } from './PokemonGrid';

// const isFavorite = async () => {
// 	const data = await fetch('/api/pokemons').then((res) => res.json());
// 	return data;
// };

const PokemonFavorite = (pokemon: PokemonBasic) => {
	const favorites = useAppSelector((store) => store.pokemons);
	const dispatch = useAppDispatch();
	return (
		<div className='px-4 py-2 hover:bg-gray-100 w-full flex cursor-pointer'>
			<div className='text-red-600 '>
				<span onClick={() => dispatch(addToFavorites(pokemon))}>
					{favorites[pokemon.id] ? (
						<IoHeart size={30} />
					) : (
						<IoHeartOutline size={30} />
					)}
				</span>
			</div>
			<div className='pl-3'>
				<p className='text-sm font-medium text-gray-800 leading-none'>
					{favorites[pokemon.id] ? 'Is Favorite' : 'Not favorite'}
				</p>
				<p className='text-xs text-gray-500'>
					{favorites[pokemon.id] ? 'Click to remove' : 'Click to add'}
				</p>
			</div>
		</div>
	);
};

export default PokemonFavorite;
