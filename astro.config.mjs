// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Assumes the repo is named "utsavosho.github.io" so the site serves at
// the domain root. If you name the repo something else (e.g. "utsavpandey"),
// you'll deploy to https://utsavosho.github.io/<repo>/ instead — that requires
// adding `base: '/<repo>'` here AND updating every internal href in
// components/pages to be relative (Astro does not auto-prefix raw string
// hrefs with `base`), so tell me before renaming the repo.
export default defineConfig({
  site: 'https://utsavosho.github.io',
  integrations: [sitemap()],
});
