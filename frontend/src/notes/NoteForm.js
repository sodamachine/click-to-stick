import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addNote from '../actions/addNote'

class NoteForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            content: "",
            status: "live",
            positionX: 500,
            positionY: 500
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const note = {
            title: this.state.title,
            content: this.state.content,
            status: this.state.status,
            positionX: this.state.positionX,
            positionY: this.state.positionY
        }
        this.props.addNote(note)
        this.props.history.push("/notes")
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.title} name="title"/>
                <br/>
                <label>Body:</label>
                <textarea onChange={this.handleChange.bind(this)} value={this.state.content} name="content"/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default withRouter(connect(null, {addNote})(NoteForm))