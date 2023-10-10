'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { BiCalculator } from 'react-icons/bi';
import { useEffect } from 'react';
import { initCountState } from '@/store/counter/counterSlice';
interface Props {
	value: number;
}
const WidgetsGrid = ({ value }: Props) => {
	const counter = useAppSelector((state) => state.counter.count);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(initCountState(value));
	}, [dispatch, value]);
	return (
		<div className='flex flex-wrap justify-center items-center gap-3'>
			<SimpleWidget
				label='SoyTitulo'
				subtitle='Contador'
				icon={<BiCalculator size={50} className='text-blue-500' />}
				title={`${counter}`}
			/>
		</div>
	);
};

export default WidgetsGrid;
