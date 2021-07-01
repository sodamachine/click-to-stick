import './Notes.css';
import Draggable from "react-draggable";

// export default function Note(props) {
//     return (
//         <div>
//             <h2>{props.note.title}</h2>
//             <p>{props.note.content}</p>
//         </div>
//     )
// }

export default function Note(props) {
    return (
        <Draggable
            key={props.note.id}
            defaultPosition={{x: props.note.positionX, y: props.note.positionY}}
            >
            <div className="box">
                {props.note.title}
            </div>
        </Draggable>
    )
}