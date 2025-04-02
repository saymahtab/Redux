import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addReaction } from "../postSlice";

const emojis = {
  thumbsUp: "👍",
  heart: "❤️",
  wow: "😯",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const handleEmojiClick = (emogiName) => {
    dispatch(addReaction({ postId: post.id, reaction: emogiName }));
  };

  const emojiButtons = Object.entries(emojis).map(([name, emoji]) => (
    <Button
      className="cursor-pointer"
      variant="outline"
      key={name}
      onClick={() => handleEmojiClick(name)}
    >
      {emoji} {post.reactions[name]}
    </Button>
  ));

  return (
    <section className="flex items-center gap-3 mt-3">{emojiButtons}</section>
  );
};

export default ReactionButtons;
