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

  const handleEmojiClick = (emoji) => {
    dispatch(addReaction({ id: post.id, emoji }));
  };

  const emojiButtons = Object.entries(emojis).map(([emojiName, emojiIcon]) => (
    <Button className='cursor-pointer' variant="outline" key={emojiName} onClick={() => handleEmojiClick(emojiName)}>
      {emojiIcon} {post.reactions[emojiName]}
    </Button>
  ));

  return (
    <section className="flex items-center gap-3 mt-3">
      {emojiButtons}
    </section>
  );
};

export default ReactionButtons;
