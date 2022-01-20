import Head from 'next/head';
import { getEvents, getPosts } from '../src/utils/wordpress';
import Post from '../src/components/_test/Post';
import Event from '../src/components/_test/Event';

export default function Home({ posts, events }) {
  const jsxPosts = posts.map((post) => <Post post={post} key={post.id} />);
  const jsxEvents = events.map((event) => <Event event={event} key={event.id} />);

  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <meta name='description' content='Keep up to date with the latest trends in tech' />
        <link rel='icon' href='/favicon.ico' />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className='container pt-5'>
        <h1 className='text-center pb-5'>Tech Blog</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <h2 className='pb-3'>Our blog posts</h2>
            {jsxPosts}
          </div>
          <div className='col-lg-4'>
            <h2 className='pb-3'>Events</h2>
            {jsxEvents}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const events = await getEvents();

  return {
    props: {
      posts,
      events,
    },
    revalidate: 10, // In seconds
  };
}
