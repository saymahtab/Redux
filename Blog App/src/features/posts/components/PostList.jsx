import { useSelector } from "react-redux";
import { selectAllPosts } from "../postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts?.map((post) => (
    <article key={post.id} className="p-5 bg-gray-100 flex items-start rounded-md flex-col gap-2 w-full">
      <h3 className="font-semibold text-xl">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return <section className="flex items-center flex-col gap-3 mt-4">
    {renderedPosts}
  </section>;
};

export default PostList;
