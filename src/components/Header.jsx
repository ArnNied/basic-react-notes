import HeaderSearch from "./HeaderSearch"

const Header = ({ setSearch }) => {
  return (
    <div className="flex flex-row justify-between items-center p-4 border-b border-solid border-white">
      <div className="flex flex-row items-center space-x-8">
        <h1 className="font-bold text-4xl text-white">NOTES</h1>
        <a href="https://github.com/ArnNied/basic-react-notes" className="text-white">About</a>
      </div>
      <HeaderSearch setSearch={setSearch}/>
    </div>
  )
}

export default Header