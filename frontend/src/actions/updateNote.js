export default function updateNote(note) {
    return function(dispatch) {
            fetch(`http://localhost:3333/notes/${note.id}`, {
                method: "PATCH",
                headers: {Accept: "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({note: note})
        }).then(response => response.json())
        .then(note => dispatch({type: "UPDATE_NOTE", payload: note}))
    }
}