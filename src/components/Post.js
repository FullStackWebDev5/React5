import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import "./Posts/Posts.css";
import { useParams } from "react-router-dom";
import { fetchPost } from "../redux";
import { connect } from "react-redux";

function Post(props) {
  const { id } = useParams();

  useEffect(() => {
    props.fetchPost(id);
  }, [id]);

  return (
    <>
      {!props.loading ? (
        !props.error ? (
          <>
            <h1>Post No. {props.post.id}</h1>
            <Card
              className="post"
              border="primary"
              bg="dark"
              text="light"
              key={props.post.id}
            >
              <Card.Header>
                <small className="text-muted">User {props.post.userId}</small>
              </Card.Header>
              <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>{props.post.body}</Card.Text>
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
          <h1>{props.error}</h1>
        )
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    post: state.post.post,
    loading: state.post.loading,
    error: state.post.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
