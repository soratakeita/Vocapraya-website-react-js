import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

function Header() {

  return (
    <>
<div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto px-4 py-4 gap-y-4">
  {/* Logo */}
  <ul className="flex-shrink-0">
    <Link to="/">
      <li>
        <img className="w-16 sm:w-20" src="/logo.png" alt="Logo" />
      </li>
    </Link>
  </ul>

  {/* Menu */}
  <ul className="flex flex-row gap-x-6 sm:gap-x-10 items-center text-sm sm:text-base font-bold text-[#ff6ea2] flex-wrap">
    <Link to="/artist">
      <li>
        <a className="hover:text-[#f62c85]" href="#">Artist</a>
      </li>
    </Link>
    <Link to="/album">
      <li className="hover:text-[#f62c85]">Album</li>
    </Link>
  </ul>

  {/* Store Button */}
  <ul className="flex-shrink-0">
    <a href="https://www.tokopedia.com/vocapraya">
      <li className="bg-[#ff6ea2] px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-white font-bold text-sm sm:text-base text-center whitespace-nowrap">
        Store
      </li>
    </a>
  </ul>
</div>


    </>
  )
}

export default Header
