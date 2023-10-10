'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	addOne,
	initCountState,
	resetCount,
	subtractOne,
} from '@/store/counter/counterSlice';
import { useEffect } from 'react';
interface CounterResponse {
	method: string;
	count: number;
}
interface Props {
	value?: number;
}
const getApiCounter = async (): Promise<CounterResponse> => {
	const data = await fetch('/api/counter').then((res) => res.json());
	return data;
};
const CartCounter = ({ value = 0 }: Props) => {
	const counter = useAppSelector((state) => state.counter.count);
	const dispatch = useAppDispatch();
	useEffect(() => {
		getApiCounter().then(({ count }) => dispatch(initCountState(count)));
	}, [dispatch]);
	return (
		<>
			<span className='text-5xl font-bold'>{counter}</span>
			<div>
				<button
					onClick={() => dispatch(addOne())}
					className='bg-gray-300 hover:bg-gray-400  text-gray-800 font-bold py-2 px-4 rounded-l transition-all'
				>
					+
				</button>
				<button
					onClick={() => dispatch(subtractOne())}
					className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
				>
					-
				</button>
			</div>
		</>
	);
};

export default CartCounter;
