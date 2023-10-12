import { SimplePokemon } from '@/app/interface';
import { PokemonCard } from '.';

interface Props {
	pokemons: PokemonBasic[];
}
export interface PokemonBasic {
	id: string;
	name: string;
}
const PokemonGrid = ({ pokemons }: Props) => {
	const showPokemons = pokemons.map((el) => (
		<PokemonCard key={el.id} {...el} />
	));
	return (
		<div className='flex flex-wrap gap-10 items-center justify-center'>
			{showPokemons}
		</div>
	);
};

export default PokemonGrid;
