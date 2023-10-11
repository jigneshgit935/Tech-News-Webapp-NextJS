import Posts from '@/components/Posts';
import { postsData } from '@/data';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      {postsData && postsData.length > 0 ? (
        postsData.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            author={post.author}
            authorEmail={'test@email.com'}
            date={post.datepublished}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">
          No Posts Created Yet.{' '}
          <Link className="underline" href="/create-post">
            Create New
          </Link>
        </div>
      )}
    </div>
  );
}
