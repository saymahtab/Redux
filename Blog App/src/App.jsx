import AddPostForm from "./features/posts/components/AddPostForm"
import PostList from "./features/posts/components/PostList"

function App() {
  return (
    <main className="h-screen w-full max-w-xl mx-auto">
      <AddPostForm />
      <PostList />
    </main>
  )
}

export default App
