import React from 'react'

class NoteForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            // content: "", 
            // status: "live",
            // positionX: 100,
            // positionY: 0
        }
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

export default NoteForm