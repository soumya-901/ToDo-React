import React from 'react'
import { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import TodoForm from './TodoForm';

function Todo({ todos, removetodo, updatetodo }) {
    const [edit, setEdit] = useState({
        id: null,
        text: ''
    })
    const [forRenderEditValue, setForRenderEditValue] = useState(edit.text)
    const onsubmited = todooo => {
        // console.log(todooo)
        updatetodo(edit.id, todooo);
        setEdit({
            id: null,
            text: ""
        })
    }
    const handlechange = e => {
        e.preventDefault();
        setForRenderEditValue(e.target.value);

    }
    // if (edit.id) {
    //     // updatetodo(edit.id);

    //     return <TodoForm edit={edit} onsubmit={onsubmited} />

    // }
    return todos.map((todo, index) => (
        <div className='Todoss' key={index} >
            <div key={todo.id} >
                {edit.id !== todo.id ?
                    <>
                        {todo.text}
                        <span className="icons" >
                            <AiTwotoneDelete onClick={() => removetodo(todo.id)} />
                            <FaEdit onClick={() => {
                                setEdit({ id: todo.id, text: todo.text })
                                setForRenderEditValue(todo.text)
                            }} />
                        </span>
                    </>
                    : (<TodoForm
                        edit={edit}
                        forRenderEditValue={forRenderEditValue}
                        onsubmit={onsubmited}
                        handleChange={handlechange}
                    />)
                }
            </div>


        </div>
    )
    );
}

export default Todo