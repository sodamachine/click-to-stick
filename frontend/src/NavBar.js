import {Link} from 'react-router-dom'

export default function NavBar(props) {
    debugger
    return (
    <>
        <Link to="/notes">All Notes</Link>
        <Link to="/notes/new">New Note</Link>
    </>
    )
}