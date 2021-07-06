import {connect} from 'react-redux'
import NoteOnWall from './NoteOnWall'

function Notes(props) {

    return (
            <div>
                {props.notes && props.notes.map((note, i) => <NoteOnWall key={i} i={i} note={note}/>)}
            </div>
    )
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Notes)