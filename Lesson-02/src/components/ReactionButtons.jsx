import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "../features/post/postSlice";

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😯',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => dispatch(addReaction({postId: post.id, reaction: name}))}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}

export default ReactionButtons;
