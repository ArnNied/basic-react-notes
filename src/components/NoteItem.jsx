import { showFormattedDate } from "../js/utils"

const NoteItem = ({ note, handleDeleteNote, handleArchiveNote }) => {
  return (
    <div className="w-3/12 flex items-stretch p-2">
      <div className="w-full flex flex-col content-between p-4 border border-solid border-gray-500 rounded space-y-2">
        <div className="h-full flex flex-col space-y-2">
          <h3 className="font-bold text-2xl text-white">{note.title}</h3>
          <p className="text-gray-500">{showFormattedDate(note.createdAt)}</p>
          <p className="text-white">{note.body}</p>
        </div>
        <div className="flex flex-row mt-auto">
          <button
            className="w-1/2 text-red-500 hover:text-white hover:bg-red-500 active:bg-red-600 rounded-sm"
            onClick={() => handleDeleteNote(note.id)}
          >
            DELETE
          </button>
          <button
            className="w-1/2 text-yellow-500 hover:text-white hover:bg-yellow-500 active:bg-yellow-600 rounded-sm"
            onClick={() => handleArchiveNote(note.id)}
          >
            {note.archived ? "UNARCHIVE" : "ARCHIVE"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
