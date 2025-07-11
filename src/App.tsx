import './App.css'
import MenuBar from './components/MenuBar'
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <div className="app-wrapper">
      <MenuBar/>
      <HomeScreen/>
      <p className="extra-content">
      </p>
    </div>
  )
}

export default App
