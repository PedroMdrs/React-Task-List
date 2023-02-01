
export default function listReducer(state = [], action) {
    switch (action.type) {
        case "add_item":

            return [...state, action.payload]
        case "delete_item":

            return state.filter(it => it.id !== action.payload)
        case "change_done":

            return state.map(item => {
                if (item.id === action.payload) {
                    item.done = !item.done
                }
                return item
            })
        default:
            return state
    }
}
