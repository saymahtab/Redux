import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../postSlice";
import { selectAllUsers } from "@/features/users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const authors = users?.map((user) => (
    <SelectItem key={user.id} value={user.id}>
      {user.name}
    </SelectItem>
  ));

  const canSave = [title, content, userId].every(Boolean);

  const handlePost = () => {
    if (title && content && userId) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
      setUserId('')
    }
  };

  return (
    <section className="bg-gray-100 p-5 flex items-center gap-4 flex-col rounded-md mt-2">
      <h1 className="text-2xl font-semibold">Create a new Blog</h1>
      <form className="w-full flex items-center flex-col gap-4">
        <Input
          name="postTitle"
          type="text"
          placeholder="Enter title from your blog"
          className="h-12"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select value={userId} onValueChange={(value) => setUserId(value)}>
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="Select The Author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="404">Anonymous</SelectItem>
            {authors}
          </SelectContent>
        </Select>
        <Textarea
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write The content for your blog"
        />
        <Button
          onClick={handlePost}
          disabled={!canSave}
          type="button"
          className="cursor-pointer w-full"
        >
          Post
        </Button>
      </form>
    </section>
  );
};

export default AddPostForm;
