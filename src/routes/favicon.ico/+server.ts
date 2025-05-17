import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET() {
  // Redirect favicon.ico requests to favicon.svg
  return redirect(301, '/favicon.svg');
}
