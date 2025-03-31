import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getPostError,
  getPostStatus,
  selectAllPosts,
} from "../postSlice";
import { useEffect } from "react";
import PostExerpt from "./PostExerpt";
import { PostSkeleton } from "@/components/skeletons/PostSkeleton";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postStatus === "idle") dispatch(fetchPosts());
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = (
      <div className="space-y-4 w-full">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      ?.slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts?.map((post) => (
      <PostExerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="flex items-center flex-col gap-3 mt-4">
      {content}
    </section>
  );
};

export default PostList;
