import { FaCalendar } from 'react-icons/fa'
import './NavButton.css'

const NavButton = () => {
  return (
    <a href='#' className="nav-btn">
      <span className="btn-icon">
        <FaCalendar />
      </span>
      <span className="btn-text">Schedule a visit</span>
    </a>
  )
}

export default NavButton