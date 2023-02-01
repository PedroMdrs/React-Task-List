// import Item from '../components/Item'


export function onAddItem(text) {
    const item = {
        text: text,
        done: false,
        id: Math.random() * 100
    }
    return { type: "add_item", payload: item }

}

export function onItemDeleted(id) {

    return { type: "delete_item", payload: id }
}

export function onDone(id) {

    return { type: "change_done", payload: id }


}


