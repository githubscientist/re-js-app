const Note = ({ note }) => {
    return note.favourite ? (
        <>
            <li>{ note.content } { '❤︎⁠' }</li>
        </>
    ) : (
        <>
            <li>{ note.content }</li>
        </>    
    )
}

export default Note;