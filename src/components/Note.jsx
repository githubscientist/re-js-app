const Note = ({ note }) => {
    if (note.favourite) {
      return (
            <>
                <li>{ note.content } { '❤︎⁠' }</li>
            </>
        )
    } 

    return (
        <>
            <li>{ note.content }</li>
        </>
    )
}

export default Note;