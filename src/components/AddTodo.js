import React,{useState} from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(handleSubmit(event));

  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo Here...</h3>
              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter here..."
                    value={todo.title}
                    onChange={(event) =>
                      setTodo({ ...todo, title: event.target.value })
                    }
                  />
                </Form.Group>
                {/* description */}
                <Form.Group>
                  <Form.Label className="mt-4">Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter here..."
                    value={todo.description}
                    onChange={(event) =>
                      setTodo({ ...todo, description: event.target.value })
                    }
                  />
                </Form.Group>
                <Container className="mt-3">
                  <Button variant="primary">Add Todo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
