import NoteForm from './NoteForm'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import deleteNote from '../actions/deleteNote'
import {connect} from 'react-redux'



export default function NoteOnShow(props) {

    return (
        <div>
            <h4><Link to={`/notes/${props.note.id}`}>{props.note.title}</Link></h4>
            {/* <p>
                {if (window.location.pathname == `/notes/${props.note.id}`) {
                    <NoteForm />
                } else {
                    props.note && props.note.content
                }
            }
            </p> */}
        </div>
    )
}