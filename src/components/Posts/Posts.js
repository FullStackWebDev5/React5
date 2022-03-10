import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom'

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setPosts(res.data))
    //   .catch((err) => console.log(err))
    
    const fetchPosts = async () => {
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts()
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts.length ? (
        posts.map((post) => (
          <Card
            className="post"
            border="primary"
            bg="dark"
            text="light"
            key={post.id}
          >
            <Card.Header>
              <small className="text-muted">User {post.userId}</small>
            </Card.Header>
            <Card.Body>
              <Card.Title><Link className="router-link" to={`/posts/${post.id}`}>{post.title}</Link></Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary" className="post-buttons">
                Like
              </Button>
              <Button variant="primary" className="post-buttons">
                Comment
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Uploaded {Math.floor(Math.random() * 60)} mins ago
              </small>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

export default Posts;
