import Image from 'next/image';
import Link from 'next/link';

import { BiLogoReact } from 'react-icons/bi';
import {
	IoBrowsersOutline,
	IoCalculator,
	IoHeartOutline,
} from 'react-icons/io5';
import { SiPokemon } from 'react-icons/si';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { SidebarItems } from '../index';

const menuItems = [
	{
		path: '/dashboard/main',
		icon: <IoBrowsersOutline size={40} />,
		title: 'Dashboard',
		subtitle: 'Visualization',
	},
	{
		path: '/dashboard/counter',
		icon: <IoCalculator size={40} />,
		title: 'Counter',
		subtitle: 'Client Side Counter',
	},
	{
		path: '/dashboard/pokemons',
		icon: <SiPokemon size={40} />,
		title: 'Pokemons',
		subtitle: 'Static Pokemons',
	},
	{
		path: '/dashboard/favorites',
		icon: <IoHeartOutline size={40} />,
		title: 'Favorites',
		subtitle: 'Favorites Global State',
	},
];
const Sidebar = () => {
	return (
		<div
			id='menu'
			className='min-w-[250px] bg-gray-900 min-h-screen z-10 w-[400px] text-slate-300  left-0  overflow-y-scroll'
		>
			<div id='logo' className='my-4 px-6'>
				<h1 className='text-lg md:text-2xl font-bold text-white'>
					<BiLogoReact />
					<span>Dash</span>
					<span className='text-blue-500'>8</span>.
				</h1>
				<p className='text-slate-500 text-sm'>
					Manage your actions and activities
				</p>
			</div>
			<div id='profile' className='px-6 py-10'>
				<p className='text-slate-500'>Welcome back,</p>
				<a href='#' className='inline-flex space-x-2 items-center'>
					<span>
						<Image
							width={10}
							height={10}
							className='rounded-full w-8 h-8'
							src='https://scontent.flhr3-3.fna.fbcdn.net/v/t39.30808-6/375148865_10161312111711972_2500444689611945810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=F8rMCSVwWScAX8yOY6K&_nc_ht=scontent.flhr3-3.fna&oh=00_AfDABHt3wqfPqjAl9l2KvP1YOEbPJAUCZRtp2_YultIU1Q&oe=651C0C0E'
							alt=''
						/>
					</span>
					<span className='text-sm md:text-base font-bold'>Victor Ramirez</span>
				</a>
			</div>
			<div id='nav' className='w-full px-6'>
				{menuItems.map((el) => (
					<SidebarItems {...el} key={el.path} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
