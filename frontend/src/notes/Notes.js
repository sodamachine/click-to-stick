import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

class Notes extends Component {

    debugger
    render() {
        return (
            <>
                <ul>
                    {this.props.notes && this.props.notes.map((note, i) => <li key={note.id}>{note.title}</li> )}
                </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Notes)