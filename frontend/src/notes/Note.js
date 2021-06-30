export default function Note(props) {
    return (
        <div>
            {props.note.title}
            {props.note.content}
        </div>
    )
}