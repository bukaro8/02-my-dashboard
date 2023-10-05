import { SimplePokemon } from '@/app/interface';
import { PokemonCard } from '.';

interface Props {
	pokemons: SimplePokemon[];
}
const PokemonGrid = ({ pokemons }: Props) => {
	const showPokemons = pokemons.map((el: SimplePokemon) => (
		<PokemonCard key={el.id} {...el} />
	));
	return (
		<div className='flex flex-wrap gap-10 items-center justify-center'>
			{showPokemons}
		</div>
	);
};

export default PokemonGrid;
