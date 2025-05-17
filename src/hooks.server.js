/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Special case for favicon.ico
  if (event.url.pathname === '/favicon.ico') {
    return new Response('', {
      status: 301,
      headers: {
        location: '/favicon.svg'
      }
    });
  }
  
  return await resolve(event);
}
