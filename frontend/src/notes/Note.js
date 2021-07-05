import './Notes.css';
import Draggable from "react-draggable";
import {connect} from 'react-redux'
import deleteNote from '../actions/deleteNote'
import {Link} from 'react-router-dom'

function Note(props) {

    const handleDelete = () => {
        props.deleteNote(props.note.id)
        
    }

    return (
        <Draggable
            key={props.i}
            defaultPosition={{x: props.note.positionX, y: props.note.positionY}}
            onStop={(e, data) => {
                props.sendData(data, props.i)
            }}
            >
            <div className="box">
                <h4><Link to={`/notes/${props.i}`}>{props.note.title}</Link></h4>
                <p>{props.note.content}</p>
                <button onClick={handleDelete}>x</button>
            </div>
        </Draggable>
    )
}

export default connect(null, {deleteNote})(Note)