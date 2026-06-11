const Note = ({ note }) => {
    return (
        <>
            <li>{ note.content } { note.favourite && '❤︎⁠' }</li>
        </>
    )
}

export default Note;