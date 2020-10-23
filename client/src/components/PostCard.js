import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
  function likePost() {
    console.log('Like post!!');
  }
  function commentOnPost() {
    console.log('Coment on post!!');
  }
  return (
    <Card fluid>
      <Card.Content>
        <Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="red" basic>
            <Icon name="heart" />
            {/* Like */}
          </Button>
          <Label basic color="red" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="teal" basic>
            <Icon name="comments" />
            {/* Comments */}
          </Button>
          <Label basic color="teal" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
