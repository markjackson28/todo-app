import React, { useContext } from 'react';
import { SettingsContext } from '../../context/settings';



const TodoList = () => {
  const { setting, setSetting } = useContext(SettingsContext);

  const startIndex =  (setting.pageNumber - 1) * 3;
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
    <div>
      {pageSlice.map((item, index) => (
        <div key={index}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TodoList;
