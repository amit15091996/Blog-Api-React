import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { doLogin } from "../auth";
import Base from "../components/Base";
import { LoginUser } from "../services/UserService";

const Login = () => {
  const [loginDetail, setloginDetail] = useState({
    username: "",
    password: "",
  });

  const handlChange = (event, field) => {
    let actualvalue = event.target.value;
    setloginDetail({
      ...loginDetail,
      [field]: actualvalue,
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    setTimeout(() => {
      if (
        loginDetail.username.trim() === "" ||
        loginDetail.password.trim() === ""
      ) {
        toast.warning(" username or password required !!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      //submit data to genetrate token

      LoginUser(loginDetail)
        .then((data) => {
          console.log(data);

          //save to local storage

          doLogin(data, () => {
            console.log("saved in local ");

            // redirect to dashboard

            navigate("/user/private")
          });

          toast.success("login successful", {
            position: toast.POSITION.TOP_RIGHT,
          });
          // navigate("/user/private");
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 400 || error.response.status === 404) {
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            toast.error("Something went wrong !! ", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }, 1000);
  };

  const resetData = () => {
    setloginDetail({
      username: "",
      password: "",
    });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h3>Login Here !!</h3>
              </CardHeader>
              <CardBody>
                <Form autoComplete="off" onSubmit={handleFormSubmit}>
                  {/* Email filed */}

                  <FormGroup>
                    <Label for="email">username</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handlChange(e, "username")}
                    />
                  </FormGroup>

                  {/* password filed */}

                  <FormGroup>
                    <Label for="email">password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handlChange(e, "password")}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="secondary" type="reset" onClick={resetData}>
                      Reset
                    </Button>
                    <Button color="dark" className="ms-2">
                      Login
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
