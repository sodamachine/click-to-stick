import React from 'react'
import {connect} from 'react-redux'
import Note from './Note'
import updateNote from '../actions/updateNote.js'


class Notes extends React.Component {

    constructor(props) {
        super(props)
        // this.props.updateNote.bind(this)
    }

    // updateNote(e, data) {
    //     this.props.notes.map((note, i) => {
    //         if (e.target.type == "submit") {
    //             note.status = "inactive"
    //             this.props.updateNote(note)
    //         } else {
    //             note.positionX = data.x
    //             note.positionY = data.y
    //             this.props.updateNote(note)
    //         }
    //     })
    // }
    
    render() {
        return (
            <div>
                {this.props.notes && this.props.notes.map((note, i) => <Note key={i} i={i} note={note}/>)}
                {/* {this.props.notes && this.props.notes.map((note, i) => <Note key={i} i={i} note={note} updateNote={this.updateNote.bind(this)}/>)} */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {notes: state.notes.filter(note => note.status === "active")}
}

export default connect(mapStateToProps, {updateNote})(Notes)
