import './HomeScreen.css'
import HotairBalloon from '../assets/HotairBalloon.svg';

function HomeScreen() {

  return (
   <div className = "main">
        <div className="main_container">
            <div className = "main_content">
                <h1>CROCHET</h1>
                <h2>CRITTERS</h2>
                <p>Create what your heart desires.</p>
                <button className = "main_btn"><a href="/">Get Started</a></button>
            </div>
            <div className="main_img--container">
                <img src={HotairBalloon} alt="Hot air balloon" />
            </div>
        </div>
    </div>
  )
}

export default HomeScreen;
