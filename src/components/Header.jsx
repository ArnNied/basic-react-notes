import HeaderSearch from "./HeaderSearch"

const Header = ({ setSearch }) => {
  return (
    <div className="flex flex-row justify-between items-center p-4 border-b border-solid border-white">
      <h1 className="font-bold text-4xl text-white">NOTES</h1>
      <HeaderSearch setSearch={setSearch}/>
    </div>
  )
}

export default Header