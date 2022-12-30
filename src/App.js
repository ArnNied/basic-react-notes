import { useState } from "react"

import Header from "./components/Header"
import NoteCreateSection from "./components/NoteCreateSection"
import NoteDisplaySection from "./components/NoteDisplaySection"

export const FILTER_CATEGORY = {
  ALL: "ALL",
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
}

function App() {
  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState(FILTER_CATEGORY.ALL)
  const [search, setSearch] = useState("")

  function handleCreateNote(newNote) {
    setNotes([...notes, newNote])
  }

  function handleArchiveNote(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived }
        } else {
          return note
        }
      })
    )
  }

  function handleDeleteNote(id) {
    if (window.confirm("Are you sure want to delete this note?")) {
      setNotes(notes.filter((note) => note.id !== id))
    }
  }

  return (
    <div className="flex flex-col">
      <Header setSearch={setSearch} />
      <div className="w-1/3 mx-auto mt-8">
        <NoteCreateSection handleCreateNote={handleCreateNote} />
      </div>
      <div className="flex flex-row justify-center">
        {Object.keys(FILTER_CATEGORY).map((category) => (
          <button
            key={category}
            className={
              "p-4 border-b " +
              (filter === category
                ? "text-white border-white"
                : "text-gray-500 border-gray-500")
            }
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="w-10/12 mx-auto mt-8">
        <NoteDisplaySection
          notes={notes}
          filter={filter}
          search={search}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
        />
      </div>
    </div>
  )
}

export default App
