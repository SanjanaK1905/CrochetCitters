import { useState } from 'react'
import{Link} from 'react-router-dom'
import './MenuBar.css'

function MenuBar() {
  /*const [count, setCount] = useState(0)*/

  return (
    <div className="navbar_container">
        <a href="/" id="navbar_logo">CROCHET CLUB</a> 
        <ul className = "navbar_menu">
            <li className = "navbar_item">
                <Link to="/" className="navbar_links"> Home </Link>
            </li>
            <li className = "navbar_item">
                <Link to="/tech" className="navbar_links"> Patterns </Link>
            </li>
            <li className = "navbar_item">
                <Link to="/products" className="navbar_links"> Product </Link>
            </li>
        </ul>
    </div>
  )
}



export default MenuBar