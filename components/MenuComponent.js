import Link from 'next/link';

export default function Component() {
  const ssrRandom = '132413123';
  const redirectRandom = '3D461202E';
  const notFoundRandom = 'whatever';

  return (
    <nav>
      <p>I am a menu:</p>
      <ul>
        <li>
          <Link href="/">Home (index)</Link>
        </li>
        <li>
          <Link href="/blog/articles/some-article">
            Blog Article: Some Article
          </Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <div
            style={{
              margin: '0.5rem',
              padding: '0.5rem',
              background: '#444',
              color: '#FFFFFF'
            }}
          >
            Note: Anything under /ssr/* are processed by SSR, ISR mode can be
            achived as well by using the correct settings in
            `getServerSideProps`
            <br />
            <br />
            <Link style={{ color: 'orange' }} href={`/ssr/${ssrRandom}`}>
              Example: Fallback - SSR - /ssr/{ssrRandom}
            </Link>
          </div>
        </li>
        <li>
          <div
            style={{
              margin: '0.5rem',
              padding: '0.5rem',
              background: '#EEEEEE'
            }}
          >
            Note: Anything under /redirect/* are 404 redirected to
            `https://www.google.com/search?q=*`
            <br />
            <br />
            <Link href={`/redirect/${redirectRandom}`}>
              Example: Fallback - Google Redirect - /redirect/{redirectRandom}
            </Link>
          </div>
        </li>
        <li>
          <div
            style={{
              margin: '0.5rem',
              padding: '0.5rem',
              background: '#cccccc'
            }}
          >
            Note: Anything under /404/* are 404 handled by `/404.js`
            <br />
            <br />
            <Link href={`/404/${notFoundRandom}`}>
              Example: Fallback - 404 - /404/{notFoundRandom}
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
