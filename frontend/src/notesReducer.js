export default function notesReducer(state = {notes: []}, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return {notes: [...state.notes, action.payload]}
        case "FETCH_NOTES":
            return {notes: action.payload}
        default:
            return state
    }
}