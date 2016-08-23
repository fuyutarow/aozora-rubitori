import React, { PropTypes } from 'react'

const Todo = ({ url }) => ( 
 <li>
    {url}
  </li>
)

Todo.propTypes = {
  url: PropTypes.string.isRequired
}

const TodoList = ({ urls }) => (
  <ul>
    {urls.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    //completed: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default TodoList

