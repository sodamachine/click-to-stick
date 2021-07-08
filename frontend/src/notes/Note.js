import Draggable from "react-draggable";
import {connect} from 'react-redux'
import updateNote from '../actions/updateNote.js'

function Note(props) {

    const updateNote = (e, data) => {
        if (e.target.type == "submit") {
            props.note.status = "inactive"
            props.updateNote(props.note)
        } else {
            props.note.positionX = data.x
            props.note.positionY = data.y
            props.updateNote(props.note)
        }
    }
    
    return (
        <Draggable
            key={props.i}
            defaultPosition={{x: props.note.positionX, y: props.note.positionY}}
            onStop={(e, data) => {updateNote(e, data)}}>
            <div className="box">
                <h4>{props.note.title}</h4>
                <p>{props.note.content}</p>
                <button onClick={(e, data) => {updateNote(e, data)}}>x</button>
            </div>
        </Draggable>
    )
}

export default connect(null, {updateNote})(Note)