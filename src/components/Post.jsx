import React from "react";
import { Button, Card, CardBody, CardText } from "reactstrap";

const Post = ({
  post = { title: "default title", content: "default content" },
}) => {
  return (
    <Card className="border-0 shadow-sm mt-3">
      <CardBody>
        <h1>{post.title}</h1>
        <CardText
          dangerouslySetInnerHTML={{
            __html: post.content.substring(0, 40) + "....",
          }}
        ></CardText>
        <div>
          <Button>Read More</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
