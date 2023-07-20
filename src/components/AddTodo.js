import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount.js";
import { addTodo } from "../redux/actions/Todo.js"; // Importing the addTodo action creator
import { connect } from "react-redux";
import { v4 } from "uuid";

const AddTodo = ({ addTodo }) => {
  // Define a local state to store the todo title and description
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the addTodo action creator and pass the todo object as a parameter
    addTodo({...todo, id:v4()});
    console.log(todo);
    // Clear the input fields after form submission
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo Here...</h3>
              <DisplayCount />
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
                  <Button type="submit" variant="primary">
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Define mapStateToProps and mapDispatchToProps for connecting Redux with the component
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  // Map the addTodo action creator to props, so it can be used in the component
  addTodo: (todo) => dispatch(addTodo(todo)),
});

// Connect the AddTodo component to Redux using the connect function
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
