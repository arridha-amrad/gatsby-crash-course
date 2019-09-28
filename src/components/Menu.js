import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div style={{ background: "#f4f4f4", paddingTop: "10px" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Menu</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
