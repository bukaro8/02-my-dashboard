import { redirect } from 'next/navigation';

export default function Home() {
	redirect('dashboard/main');
	return (
		<>
			<h1 className='text-3xl'>hello world</h1>
		</>
	);
}
