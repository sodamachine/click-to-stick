export default function notesReducer(state = {notes: []}, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return {notes: [...state.notes, action.payload]}
        case "FETCH_NOTES":
            return {notes: action.payload}
        case "UPDATE_NOTE":
            const editedNotesArray = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            return {notes: editedNotesArray}
        default:
            return state
    }
}