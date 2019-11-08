import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
     // background: '#f4f4f4',
      background: '#c9fbf3',
      padding: '10px',
     // borderBottom: '1px #ccc dotted',
      borderBottom: '1px #3d8d76 dotted',
      marginTop: '5px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  // background: '#ff0000',
  background: '#3d8d76',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
