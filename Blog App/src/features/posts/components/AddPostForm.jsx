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
import { addNewPost, addPost } from "../postSlice";
import { selectAllUsers } from "@/features/users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const handlePost = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({title, body: content, userId})).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("Failed To save the post", error)
      } finally {
        setAddRequestStatus("idle")
      }
    }
  };

  const userOptions = users.map((user) => (
    <SelectItem key={user.id} value={String(user.id)}>
      {user.name}
    </SelectItem>
  ));

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
        <Select value={userId} onValueChange={setUserId}>
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="Select The Author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anonymous">Anonymous</SelectItem>
            {userOptions}
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
