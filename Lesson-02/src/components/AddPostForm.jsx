import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../features/post/postSlice";
import { useState } from "react";
import { selectAllUsers } from "../features/users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAuthorChange = (e) => setUserId(e.target.value);
  
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const handleSavePost = () => {
    if(canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({title, body: content, userId})).unwrap();

        setTitle('')
        setContent('')
        setUserId('')
      } catch (error) {
        console.error('Failed to save the post', error);
      } finally {
        setAddRequestStatus('idle')
      }
    }
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={handleAuthorChange}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button disabled={!canSave} onClick={handleSavePost} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
