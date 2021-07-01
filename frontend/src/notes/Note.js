import './Notes.css';
import Draggable from "react-draggable";
import {connect} from 'react-redux'
import deleteNote from '../actions/deleteNote'

function Note(props) {

    const handleDelete = () => {
        props.deleteNote(props.note.id)

    }

    return (
        <Draggable
            key={props.note.id}
            defaultPosition={{x: props.note.positionX, y: props.note.positionY}}
            // onStop={(e, data) => {
            //     debugger
            //     props.sendData(data, props.note.id)
            // }}
            >
            <div className="box">
                <h4>{props.note.title}</h4>
                <p>{props.note.content}</p>
                <button onClick={handleDelete}>x</button>
            </div>
        </Draggable>
    )
}

export default connect(null, {deleteNote})(Note)