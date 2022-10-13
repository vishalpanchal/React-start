import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Blog Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
