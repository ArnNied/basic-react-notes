const HeaderSearch = ({ setSearch }) => {
  return (
    <div className="w-1/4 flex flex-row items-center">
      <input
        className="w-full px-2 py-1 border border-solid border-gray-500 bg-gray-700 text-white rounded"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default HeaderSearch
