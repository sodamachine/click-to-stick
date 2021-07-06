import './Notes.css';
import Draggable from "react-draggable";
import {connect} from 'react-redux'
import deleteNote from '../actions/deleteNote'

function Note(props) {
    
    return (
        <Draggable
            key={props.i}
            defaultPosition={{x: props.note.positionX, y: props.note.positionY}}
            onStop={(e, data) => {
                props.sendData(data, props.i, props.note.id)
            }}
            >
            <div className="box">
                <h4>{props.note.title}</h4>
                <p>{props.note.content}</p>
                <button onClick={(e, data) => {
                    props.sendData(data="delete", props.i, props.note.id)
                }}
                >x</button>
            </div>
        </Draggable>
    )
}

export default connect(null, {deleteNote})(Note)