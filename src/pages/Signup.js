import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import { SignUp } from "../services/UserService";
import { toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });
 
  // handle change

  const handleChange = (event, property) => {
    // dynamic

    setData({ ...data, [property]: event.target.value });
  };

  // reset the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // submit the form

  const submitForm = (event) => {
    event.preventDefault();

    if (error.isError) {
      toast.error("form data is invalid Correct all details !! ");
      // setError({ ...error, isError: false })
      return;
    }

    console.log(data);
    //data validate

    //call api for sending data
    SignUp(data)
      .then((resp) => {
        console.log("resp : " + resp);
        console.log("success");
        toast.success("Registration Successful !!  userId " + resp.id);
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");

        // handle error

        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {/* {JSON.stringify(data)} */}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h3>Fill Information to Register !!</h3>
              </CardHeader>
              <CardBody>
                <Form autoComplete="off" onSubmit={submitForm}>
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">Enter Name </Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error?.errors?.response?.data.name ? true : false
                      }
                    />
                  </FormGroup>
                  <FormFeedback>
                    {error.errors?.response?.data?.name}
                  </FormFeedback>
                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Email </Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {" "}
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>
                  {/* Password Field */}
                  <FormGroup>
                    <Label for="password">Enter Password </Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {" "}
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>
                  {/* About Field */}
                  <FormGroup>
                    <Label for="about">Enter Name </Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "100px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    />
                    <FormFeedback>
                      {" "}
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="secondary" type="reset" onClick={resetData}>
                      Reset
                    </Button>
                    <Button color="dark" className="ms-2">
                      Register
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

export default Signup;
