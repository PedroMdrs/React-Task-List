import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";


function List(props) {
  const items = useSelector(items => items)
  return (
    <ul>
      {items.map(item =>

        <ListItem key={item.id} item={item} items={props.items}></ListItem>)}
    </ul>
  )
}

export default List