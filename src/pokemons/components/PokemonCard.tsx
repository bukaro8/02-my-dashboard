import Image from 'next/image';
import Link from 'next/link';
// import { IoHeartOutline } from 'react-icons/io5';
import PokemonFavorite from './PokemonFavorite';
import { PokemonBasic } from './PokemonGrid';

const PokemonCard = (pokemon: PokemonBasic) => {
	return (
		<div className='mx-auto right-0 mt-2 w-60'>
			<div className='bg-white rounded overflow-hidden shadow-lg'>
				<div className='flex flex-col justify-center items-center p-6 bg-gray-800 border-b'>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
						height={100}
						width={100}
						alt={pokemon.name}
						priority={false}
					/>

					<p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
						{pokemon.name}
					</p>

					<div className='mt-5'>
						<Link
							href={`/dashboard/pokemons/${pokemon.name}`}
							className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
						>
							More info
						</Link>
					</div>
				</div>
				<div className='border-b flex justify-center items-center'>
					<PokemonFavorite {...pokemon} />
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
