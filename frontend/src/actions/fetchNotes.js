export default function fetchNotes() {
    return(dispatch) => {
        fetch("http://localhost:3333/notes")
        .then(response => response.json())
        .then((allNotes) => {
            dispatch({type: "FETCH_NOTES", payload: allNotes})
        })
    }
}