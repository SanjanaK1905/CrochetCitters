import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MenuBar from './components/MenuBar'
import HomeScreen from './screens/HomeScreen'
import PatternScreen from './screens/PatternScreen'
import ProductScreen from './screens/ProductScreen'

function App() {

  return (
    <Router basename="/CrochetCitters">
    <div className="app-wrapper">
      <MenuBar/>
      <Routes>
        <Route path= "/" element={<HomeScreen />} />
        <Route path= "/tech" element= {<PatternScreen/>} /> {/*New Route */}
        <Route path= "/products" element= {<ProductScreen/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
