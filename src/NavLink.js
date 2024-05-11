import { Link, useLocation } from "react-router-dom";

export default function NavLink (props) {
  const location = useLocation()
  const active = location.pathname === props.pathname
  if (active) {
    return (
      <b>{props.children}</b>
    )
  }
  return (
    <div>
      <Link to={props.pathname}>{props.children}</Link>
    </div>
  )
}