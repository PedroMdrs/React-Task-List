import React from "react";
import Card from './Card'
import gosling from '../assets/gosling.jpg'
import ana from '../assets/and.png'
import { useDispatch } from "react-redux";
import { onDone, onItemDeleted } from "../actions/listActions";





function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src={gosling}></img>
    } else {
        return <img alt="undone" src={ana}></img>
    }
}

function ListItem(props) {

    const dispatch = useDispatch()

    return (
        <Card>
            <li className={props.item.done ? 'done' : ''}>

                {props.item.text}
                <div className="content">
                    <button onClick={() => dispatch(onDone(props.item.id))}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>
                    <button onClick={() => dispatch(onItemDeleted(props.item.id))}>
                        <img alt="delete" src={require('../assets/1843344.png')}></img>
                    </button>
                </div>

            </li>
        </Card>
    )

}

export default ListItem