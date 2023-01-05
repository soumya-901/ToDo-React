import React from 'react'
import { useState } from 'react'



function TodoForm(props) { // this is props and it should be read only in this function
    const [input, setInput] = useState('hello world');
    const onChanges = e => {
        e.preventDefault();
        props.onsubmit({
            id: Math.floor(Math.random() * 1000),
            text: props.edit ? props.forRenderEditValue : input
        })
        setInput('')
    }
    const handleChange = e => {
        setInput(e.target.value);
    }
    return (
        <form className='todo-form' onSubmit={onChanges} >
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Enter Your name"
                        value={props.forRenderEditValue}
                        onChange={event => props.handleChange(event)}
                        autoFocus
                    />
                    <button type="submit" onClick={onChanges}>Add to</button>
                </>

            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Enter Your name"
                        value={input}
                        onChange={handleChange}
                        autoFocus
                    />
                    <button type="submit">Add To</button>
                </>
            )}
        </form>
    )
}
// the below lines are only for practice
TodoForm.defaultProps = {
    titel: "this is navbar",
    titleNumber: 34,
    type: 56
}


export default TodoForm