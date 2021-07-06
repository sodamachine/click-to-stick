import './Notes.css';
import Draggable from "react-draggable";
import NoteOnShow from './NoteOnShow'

function NoteOnWall(props) {

    changePosition() {
        
    }
    
    return (
        <Draggable
            key={props.i}
            defaultPosition={{x: props.note.positionX, y: props.note.positionY}}
            onStop={(e, data) => {
                props.changePosition(data, props.i, props.note.id)
            }}
            >
            <div className="box">
                <NoteOnShow note={props.note} />
                <button onClick={(e, data) => {
                    props.sendData(data="delete", props.i, props.note.id)
                }}
                >x</button>
            </div>
        </Draggable>
    )
}

export default NoteOnWall