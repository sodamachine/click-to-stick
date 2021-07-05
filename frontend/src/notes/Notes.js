import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Note from './Note'
import deleteNote from '../actions/deleteNote'


class Notes extends Component {

    constructor(props) {
        super(props)
        this.updateState = this.updateState.bind(this)
    }

    updateState(data="delete", i, id) {
        let newNotes = this.props.notes
        if (data == "delete") {
            this.props.deleteNote(id)
        }
        newNotes[i].positionX = data.x
        newNotes[i].positionY = data.y
        this.setState({newNotes})
    }

    render() {
        return (
            <div>
                {this.props.notes && this.props.notes.map((note, i) => <Note key={i} i={i} note={note} sendData={this.updateState}/>)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps, {deleteNote})(Notes)