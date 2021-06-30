export default function fetchNotes() {
    return(dispatch) => {
        fetch("http://localhost:3333/notes")
        .then(response => response.json())
        .then((notes) => {
            dispatch({type: "FETCH_NOTES", payload: notes})
        })
    }
}