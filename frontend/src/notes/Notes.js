import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Note from './Note'

class Notes extends Component {

    constructor(props) {
        super(props)
        this.updateState = this.updateState.bind(this)
    }

    updateState(data="delete", id) {
        let newNotes = this.props.notes
        if (data == "delete") {
            newNotes[id-1].status = "deleted"
        }
        newNotes[id-1].positionX = data.x
        newNotes[id-1].positionY = data.y
        this.setState({newNotes})
    }

    render() {
        return (
            <div>
                {this.props.notes && this.props.notes.map((note, i) => <Note key={i} note={note} sendData={this.updateState}/>)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Notes)