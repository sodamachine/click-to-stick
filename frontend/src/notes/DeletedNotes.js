import {connect} from 'react-redux'

function DeletedNotes(props) {

    return (
            <div className="trash">
                <ul>
                    {props.notes && props.notes.map((note, i) => <li key={note.id}>{note.title}: {note.content}</li>)}
                </ul>
            </div>
    )
}

function mapStateToProps(state) {
    return {notes: state.notes.filter(note => note.status === "inactive")}
}

export default connect(mapStateToProps)(DeletedNotes)