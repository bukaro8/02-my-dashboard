import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	return NextResponse.json({
		'1': { id: '1', name: 'bulbasaur' },
	});
}
