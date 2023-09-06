import MenuComponent from '/components/MenuComponent';
import { useRouter } from 'next/router';

export default function Page({ slug, time }) {
  const router = useRouter();
  console.log({ router });
  return (
    <section>
      <h1>Oops - 404</h1>
      <div style={{ margin: '2rem' }}>
        Client Side:
        <div>Router Path: {router.asPath}</div>
      </div>
      <div style={{ margin: '2rem' }}>
        SSR:
        <div>Generated at {time}</div>
      </div>
      <MenuComponent />
    </section>
  );
}

// This gets called on every request
export async function getStaticProps() {
  return {
    props: {
      time: Date.now()
    },
    revalidate: 10 // In seconds
  };
}
