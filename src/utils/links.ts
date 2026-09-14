/**
 * Prefix an internal path with the configured base URL.
 * Use this for all internal navigation links.
 *
 * When deploying to GitHub Pages (base: '/svscreenings-'),
 * link('/services') → '/svscreenings-/services'
 *
 * When deploying to svscreenings.com (base: '/'),
 * link('/services') → '/services'
 */
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/') return base + '/';
  // Insert trailing slash before any hash fragment
  if (path.includes('#')) {
    const [pagePath, hash] = path.split('#');
    return base + pagePath + '/#' + hash;
  }
  return base + path + '/';
}
