import MenuComponent from '/components/MenuComponent';
import { useRouter } from 'next/router';

export default function Page({ slug, time }) {
  const router = useRouter();
  return (
    <section>
      <h1>[...slug]</h1>
      <div style={{ margin: '2rem' }}>
        Client Side:
        <div>Router Query (slugs): /{router.query.slug?.join('/')}</div>
      </div>
      <div style={{ margin: '2rem' }}>
        SSR:
        <div>Slug: /{slug?.join('/')}</div>
        <div>Generated at {time}</div>
      </div>
      <MenuComponent />
    </section>
  );
}

// This gets called on every request
export async function getServerSideProps({ req, res, query }) {
  const slug = query.slug;

  if (slug[0] === 'redirect') {
    return {
      redirect: {
        destination: `https://www.google.com/search?q=${slug
          .filter((s, index) => index > 0)
          .join(' ')}`,
        permanent: false
      }
    };
  }

  return {
    notFound: slug[0] === '404',
    props: {
      slug,
      time: Date.now()
    }
  };
}
