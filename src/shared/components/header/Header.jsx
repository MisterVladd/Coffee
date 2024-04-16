import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </>
  )
}
