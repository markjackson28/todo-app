import React, { useEffect, useContext } from 'react';
import { Card, Form, Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import useForm from '../../hooks/form.js';
import TodoList from '../list/list';
import { SettingsContext } from '../../context/settings';
import Pages from '../pages/pages'
import PageAmount from '../pageAmount/pageAmount';
import './todo.css';

import { v4 as uuid } from 'uuid';

const ToDo = () => {
  const { setting, setSetting } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setSetting({
      ...setting,
      list: [...setting.list, item],
    });
  }

  // function deleteItem(id) {
  //   const items = list.filter(item => item.id !== id);
  //   setList(items);
  // }

  useEffect(() => {
    let incompleteCount = setting.list.filter(item => !item.complete).length;
    setSetting({
      ...setting,
      incomplete: incompleteCount
    });
    document.title = `To Do List: ${setting.incomplete}`;
  }, [setting.list]);

  return (
    <>
      <Container fluid>
        <Navbar className="mb-3 mt-3" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">To Do List: {setting.incomplete} items pending</Navbar.Brand>
          </Container>
        </Navbar>
        <Row>
          <Col md="auto">
            <Form onSubmit={handleSubmit}>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Add To Do Item</Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>To Do Item</Form.Label>
                    <Form.Control onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Range onChange={handleChange} name="difficulty" defaultValue={3} type="range" min={1} max={5} />
                  </Form.Group>
                  <Button type="submit">Add Item</Button>
                </Card.Body>
              </Card>
              <PageAmount />
            </Form>
          </Col>
          <Col>
            <TodoList />
          </Col>
        </Row>
        <Pages />
      </Container>
    </>
  );
};

export default ToDo;
