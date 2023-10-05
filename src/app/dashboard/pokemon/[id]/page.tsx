interface Props {
	params: { id: string };
}
const PokemonPage = ({ params }: Props) => {
	return <div>pokemon page {params.id}</div>;
};

export default PokemonPage;
