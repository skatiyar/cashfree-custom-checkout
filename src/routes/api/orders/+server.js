import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function POST() {
	return new Response(String('random'));
}
