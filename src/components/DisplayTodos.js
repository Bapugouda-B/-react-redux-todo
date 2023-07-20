import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount.js";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions/Todo.js";

const DisplayTodos = ({ todos, deleteTodo }) => {
  return (
    <Container>
      <Card className="shadow-sm mt-2">
        <Card.Body>
          <h3>Todo List</h3>
          <DisplayCount />
          <Row xs={1} sm={2} lg={3}>
            {todos.map((todo, index) => (
              <Col key={index}>
                <Card className="todo-card mt-3" bg="light">
                  <Card.Body>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <Col className="d-flex justify-content-between align-items-center">
                      <Button variant="primary" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button
                        onClick={(event) => deleteTodo(todo.id)}
                        variant="danger"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
