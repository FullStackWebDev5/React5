import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import "./Posts.css";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setPosts(res.data))
    //   .catch((err) => console.log(err))
    
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
    
  }, []);

  return (
    <>
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
              <Card.Title>{post.title}</Card.Title>
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
