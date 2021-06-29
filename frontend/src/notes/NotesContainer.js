import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Notes from './Notes'
import fetchNotes from '../actions/fetchNotes'

class NotesContainer extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchNotes()
    }

    render() {
        debugger
        return (
            <>
                <Switch>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                </Switch>
            </>
        )
    }

}

export default connect(null, {fetchNotes})(NotesContainer)