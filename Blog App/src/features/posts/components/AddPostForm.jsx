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
import { useDispatch } from "react-redux";
import { addPost } from "../postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const canSave = [title, content, author].every(Boolean);

  const handlePost = () => {
    if(title && content) {
      dispatch(addPost(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="bg-gray-100 p-5 flex items-center gap-4 flex-col rounded-md mt-2">
      <h1 className="text-2xl font-semibold">Create a new Blog</h1>
      <form className="w-full flex items-center flex-col gap-4">
        <Input
          type="text"
          placeholder="Enter title from your blog"
          className="h-12"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select value={author} onValueChange={setAuthor}>
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="Select The Author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anonymous">Anonymous</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
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
