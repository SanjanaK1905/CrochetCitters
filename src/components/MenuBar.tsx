import { useState } from 'react'
import './MenuBar.css'

function MenuBar() {
  const [count, setCount] = useState(0)

  return (
    <div className="navbar_container">
         <a href="/" id="navbar_logo">CROCHET CLUB</a> 
        <ul className = "navbar_menu">
            <li className = "navbar_item">
                <a href="/" className="navbar_links"> Home </a>
            </li>
            <li className = "navbar_item">
                <a href="/tech.html" className="navbar_links"> Tech </a>
            </li>
            <li className = "navbar_item">
                <a href="/" className="navbar_links"> Products </a>
            </li>
            <li className = "navbar_btn">
                <a href="/" className="button"> Sign Up </a>
            </li>
        </ul>
    </div>
  )
}



export default MenuBar