import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";


export default function Note(props) {
    debugger
    return (
        // <Draggable
        //     key={props.note.id}
        //     defaultPosition={ x: 100, y:0 }
        <div>
            {props.note.title}
            {props.note.content}
        </div>
    )
}