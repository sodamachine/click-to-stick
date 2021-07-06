import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NoteForm from './NoteForm'
import Notes from './Notes'
import NoteOnShow from './NoteOnShow'
import {connect} from 'react-redux'
import fetchNotes from '../actions/fetchNotes'
import Home from '../Home'

class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/notes/new">
                        <NoteForm />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                    {/* <Route path="/notes/:id" render={(routerProps) => <NoteOnShow note={this.state.notes.find(note => note.id === parseInt(routerProps.match.params.id))} />}/> */}
                    <Route path="/notes/:id" render={
                        (routerProps) => <NoteOnShow {...routerProps}/>}
                    />
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </>
        )
    }

}

export default connect(null, {fetchNotes})(NotesContainer)