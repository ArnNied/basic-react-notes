import { FILTER_CATEGORY } from "../App"
import NoteItem from "./NoteItem"

const NoteDisplay = ({
  notes,
  filter,
  search,
  handleDeleteNote,
  handleArchiveNote,
}) => {
  const filteredNotes = notes.filter((note) => {
    if (
      (filter === FILTER_CATEGORY.ALL ||
        (filter === FILTER_CATEGORY.ACTIVE && !note.archived) ||
        (filter === FILTER_CATEGORY.ARCHIVED && note.archived)) &&
      note.title.toLowerCase().includes(search)
    ) {
      return true
    } else {
      return false
    }
  })
  return (
    <div className="flex flex-row flex-wrap">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handleDeleteNote={handleDeleteNote}
            handleArchiveNote={handleArchiveNote}
          />
        ))
      ) : (
        <p className="mx-auto text-white">{search ? `No Note Containing ${search}` : "No Notes"}</p>
      )}
    </div>
  )
}

export default NoteDisplay
