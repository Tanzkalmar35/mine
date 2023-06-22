import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
        }),
        ssr: false,
        vite: {
            define: {
                global: {}
            }
        },
    },
};

export default config;