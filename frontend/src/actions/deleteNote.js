// export default function deleteNote(noteId) {
//     return function(dispatch) {
//         fetch(`http://localhost:3333/notes/${noteId}`, {
//             method: "DELETE",
//             headers: {Accept: "application/json", "Content-Type": "application/json"},
//         }).then(response => response.json())
//         .then(note => dispatch({type: "DELETE_NOTE", payload: note.id}))
//     }
// }