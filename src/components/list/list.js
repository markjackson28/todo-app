import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { SettingsContext } from '../../context/settings';



const TodoList = () => {
  const { setting, setSetting } = useContext(SettingsContext);

  const startIndex = (setting.pageNumber - 1) * 3;
  const pageSlice = setting.list.slice(startIndex, startIndex + setting.maxPageNumber)

  function toggleComplete(id) {

    const items = setting.list.length > 0 && setting.list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      console.log('item', item)
      return item;
    });
    setSetting({
      ...setting,
      items
    });
  }

  return (
    <Container>
      {pageSlice.map((item, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Header>
              <Card.Title>Assigned to: {item.assignee}</Card.Title>
            </Card.Header>
            <Card.Text className="mt-2">Task: {item.text}</Card.Text>
            <Card.Text>Difficulty: {item.difficulty}</Card.Text>
            <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            <hr />
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default TodoList;
