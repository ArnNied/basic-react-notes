import { useEffect, useState } from "react"

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

  // Load notes from local storage if available
  useEffect(() => {
    const notes = JSON.parse(window.localStorage.getItem("notes"))
    if (notes) {
      setNotes(notes)
    }
  }, [])

  // Save notes to local storage
  function handleCreateNote(newNote) {
    const updatedNotes = [...notes, newNote]

    setNotes(updatedNotes)
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes))
  }

  // Toggle archived status
  function handleArchiveNote(id) {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }
      } else {
        return note
      }
    })

    setNotes(updatedNotes)
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes))
  }

  // Delete note
  function handleDeleteNote(id) {
    if (window.confirm("Are you sure want to delete this note?")) {
      const updatedNotes = notes.filter((note) => note.id !== id)

      setNotes(updatedNotes)
      window.localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }
  }

  return (
    <div className="flex flex-col pb-24">
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
