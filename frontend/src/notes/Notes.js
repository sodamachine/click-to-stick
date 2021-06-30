import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Note from './Note'

class Notes extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <>
                <ul>
                    {/* {this.props.notes && this.props.notes.map((note, i) => <li key={note.id}>{note.title}</li> )} */}
                    {this.props.notes && this.props.notes.map((note, i) => <Note key={i} note={note} /> )}
                </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Notes)