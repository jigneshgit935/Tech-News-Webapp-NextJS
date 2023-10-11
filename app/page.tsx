import Categorieslist from '@/components/CategoriesList';
import Posts from '@/components/Posts';
import { postsData } from '@/data';

export default function Home() {
  return (
    <>
      <Categorieslist />
      {postsData && postsData.length >= 0 ? (
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
        <div>No Post to display</div>
      )}
    </>
  );
}
