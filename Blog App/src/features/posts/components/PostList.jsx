import { useSelector } from "react-redux";
import { selectAllPosts } from "../postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts?.map((post) => {
    
    return (
      <article
        key={post.id}
        className="p-5 bg-gray-100 flex items-start rounded-md flex-col gap-2 w-full"
      >
        <h3 className="font-semibold text-xl">{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <div>
          <PostAuthor postUserId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <ReactionButtons post={post} />
      </article>
    );
  });

  return (
    <section className="flex items-center flex-col gap-3 mt-4">
      {renderedPosts}
    </section>
  );
};

export default PostList;
