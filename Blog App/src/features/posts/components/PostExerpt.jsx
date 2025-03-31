import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExerpt = ({ post }) => {
  return (
    <article className="p-5 bg-gray-100 flex items-start rounded-md flex-col gap-2 w-full">
      <h3 className="font-semibold text-xl">{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExerpt;
