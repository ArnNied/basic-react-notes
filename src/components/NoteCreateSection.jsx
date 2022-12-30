import { useState } from "react"

import { generateId } from "../js/utils"

const TITLE_MAX_LENGTH = 50

const NoteCreateSection = ({ handleCreateNote }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.length > TITLE_MAX_LENGTH) {
      window.alert(`Title must be less than ${TITLE_MAX_LENGTH} characters`)
    } else if (body.length === 0 || title.length === 0) {
      window.alert("Title and body are required")
    } else {
      const newNote = {
        id: generateId(16),
        title,
        body,
        archived: false,
        createdAt: new Date(),
      }
      handleCreateNote(newNote)

      setTitle("")
      setBody("")
    }
  }

  return (
    <div className="flex flex-col p-4 border border-gray-500 space-y-4 rounded">
      <h2 className="text-4xl text-white">Create Note</h2>
      <form className="w-full flex flex-col space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-1">
          <label htmlFor="title" className="text-lg text-white">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-2 py-1 bg-gray-700 border border-solid border-gray-500 text-white rounded w-full"
          />
          <p
            className={
              "text-sm " +
              (title.length > TITLE_MAX_LENGTH
                ? "text-red-500"
                : "text-gray-500")
            }
          >
            {title.length}/{TITLE_MAX_LENGTH}
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="body" className="text-lg text-white">
            Body
          </label>
          <textarea
            id="body"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="px-2 py-1 bg-gray-700 border border-solid border-gray-500 text-white rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="px-2 py-1 text-lg text-white bg-gray-700 hover:bg-gray-800 border border-gray-500"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default NoteCreateSection
