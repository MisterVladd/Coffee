import { Link } from "react-router-dom";
import './HeaderMenu.scss';

// eslint-disable-next-line react/prop-types
export const HeaderMenu = ({navIsActive, navClose}) => {
  return (
    <div className={`header-menu ${navIsActive ? 'is-active' : ''}`}>
      <Link onClick={navClose} to="/">Home</Link>
      {/* (click)="navClose.emit()" */}
      <Link onClick={navClose} to="/">About</Link>
      <Link onClick={navClose} to="/">Contact</Link>
      <span className="icon-times header-menu-close" onClick={navClose}></span>
    </div>
  );
};
