import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';



class App extends Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let todos = [...this.state.todos, newTodo];

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center teal-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />

      </div>
    );
  }

}

export default App;
