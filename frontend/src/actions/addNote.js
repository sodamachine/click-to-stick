export default function addNote(note) {
    return function(dispatch) {
            fetch("http://localhost:3333/notes", {
            method: "POST",
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({note})
        }).then(response => response.json())
        .then(note => dispatch({type: "ADD_NOTE", payload: note}))
    }
}