import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/docs',
	paths: {
		"@images": "src/images/*",
	},
	outDir: './dist/docs/',	

	integrations: [
		starlight({
			title: 'My Docs',
			components: {
				// Override the default `SocialIcons` component.
				SiteTitle: './src/components/SiteTitle.astro',
			  },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
