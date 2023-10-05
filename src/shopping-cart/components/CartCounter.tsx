'use client';
import { useState } from 'react';
interface Props {
	value?: number;
}
const CartCounter = ({ value = 0 }: Props) => {
	const [counter, setCounter] = useState<number>(value);
	const handleOnCLick = (operation: number) => {
		setCounter(counter + operation);
	};
	return (
		<>
			<span className='text-5xl font-bold'>{counter}</span>
			<div>
				<button
					onClick={() => handleOnCLick(1)}
					className='bg-gray-300 hover:bg-gray-400  text-gray-800 font-bold py-2 px-4 rounded-l transition-all'
				>
					+
				</button>
				<button
					onClick={() => handleOnCLick(-1)}
					className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
				>
					-
				</button>
			</div>
		</>
	);
};

export default CartCounter;
