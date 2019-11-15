import React from 'react';
import "./Todos.css"

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <i className="material-icons right delete-icon right" onClick={() => { deleteTodo(todo.id) }}>delete</i>
                </div>
            )
        })
    ) : (
            <p className="center">You have no todo's, yay!</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}



export default Todos;