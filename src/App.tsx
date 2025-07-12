import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MenuBar from './components/MenuBar'
import HomeScreen from './screens/HomeScreen'
import PatternScreen from './screens/PatternScreen'

function App() {

  return (
    <Router>
    <div className="app-wrapper">
      <MenuBar/>
      <Routes>
        <Route path= "/" element={<HomeScreen />} />
        <Route path= "/tech" element= {<PatternScreen/>} /> {/*New Route */}
      </Routes>
      </div>
    </Router>
  )
}

export default App
