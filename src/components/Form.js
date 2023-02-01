import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddItem } from "../actions/listActions";


function Form(props) {
    const dispatch = useDispatch()
    const [text, setText] = useState('');

    function onChange(event) {
        let text = event.target.value

        setText(text)
    }

    function addItem(event) {


        event.preventDefault()

        if(text){
            dispatch(onAddItem(text))
            setText('')
        }

    }

    return (

        <form>
            <input type="text" onChange={onChange} value={text}></input>
            <button onClick={addItem}>+</button>
        </form>
    )
}


export default Form