import React from "react";
import { Container } from "reactstrap";
import AddPost from "../components/AddPost";
import Base from "../components/Base";

const UserDashboard = () => {
  return (
    <Base>
      <Container style={{width:'90%'}}>
        <AddPost />
      </Container>
    </Base>
  );
};

export default UserDashboard;
