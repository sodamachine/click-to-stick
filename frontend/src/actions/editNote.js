export default function editNote(note) {
    return function(dispatch) {
            fetch(`http://localhost:3001/notes/${note.id}`, {
                method: "PATCH",
                headers: {Accept: "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({note: note})
        }).then(response => response.json())
        .then(note => dispatch({type: "EDIT_NOTE", payload: note}))
    }
}