import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from '../components/Base'

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className='mt-4'>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color='dark' outline>
              <CardHeader >
                <h3>Login Here !!</h3>
              </CardHeader>
              <CardBody>
                <Form autoComplete='off'>
                  {/* Email filed */}

                  <FormGroup>
                    <Label for='email'>
                      username
                    </Label>
                    <Input type='text' id='email' />

                  </FormGroup>

                  {/* password filed */}

                  <FormGroup>
                    <Label for='email'>
                      password
                    </Label>
                    <Input type='password' id='password' />

                  </FormGroup>
                  <Container className='text-center'>
                    <Button color='secondary' type='reset'>Reset</Button>
                    <Button color='dark' className='ms-2'>Login</Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  )
}

export default Login