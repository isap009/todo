import SpeakerNotesSharpIcon from '@material-ui/icons/SpeakerNotes';
import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="title">
                <SpeakerNotesSharpIcon className="icon" fontSize="large"></SpeakerNotesSharpIcon>
                <h1>TODO</h1>
            </div>

        </div>
    )
}

export default Header

