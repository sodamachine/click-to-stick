import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Note from './Note'

class Notes extends Component {

    updateNote(data, key) {
        debugger
    }

    render() {
        return (
            <div>
                {this.props.notes && this.props.notes.map((note) => <Note key={note.id} note={note} />)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Notes)