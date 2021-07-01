import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Note from './Note'

class Notes extends Component {

    render() {
        return (
            <div>
                {this.props.notes && this.props.notes.map((note) => <Note key={note.id} note={note} />)}
            </div>
        )
    }
               /* {this.props.notes && this.props.notes.map((note, i) => <li key={note.id}>{note.title}</li> )} */
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Notes)