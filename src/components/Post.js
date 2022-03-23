import React, { useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import "./Posts/Posts.css";
import { useParams } from "react-router-dom";
import { fetchPost } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function Post() {
  const {post, loading, error} = useSelector(state => state.post)
  const dispatch = useDispatch()
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id, dispatch]);

  return (
    <>
      {!loading ? (
        !error ? (
          <>
            <h1>Post No. {post.id}</h1>
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
          </>
        ) : (
          <h1>{error}</h1>
        )
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

export default Post;
