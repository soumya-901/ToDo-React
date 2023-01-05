import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [toos, setToos] = useState([]);

    const addTodos = (todo) => {
        if (!todo.text) {
            return;
        }
        const newtodos = [todo, ...toos];
        // console.log(toos)
        setToos(newtodos);
    }
    const removetodo = (todoId) => {
        const newtodos = toos.filter(todo => {
            return todo.id !== todoId;
        })
        // console.log(newtodos)
        setToos(newtodos)
    }
    const updatetodo = (Id, todo) => {
        if (!todo.text) {
            return;
        };
        console.log(todo);
        // let newtodos = toos.map((tod) => {
        //     if (tod.id === todo.id) {
        //         tod.text = todo.text;
        //     }
        //     return tod;
        // });
        setToos(newtodos => newtodos.map(item => (item.id === Id ? todo : item)));
    }
    return (
        <>
            <TodoForm onsubmit={addTodos} />
            {/* <div>todolist</div> */}
            <Todo todos={toos} removetodo={removetodo} updatetodo={updatetodo} />
        </>
    )
}

export default TodoList