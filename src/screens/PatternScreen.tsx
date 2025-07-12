import './PatternScreen.css'
import ChainPattern from '../assets/ChainPattern.png'
import PatternContent from '../components/PatternContent'

function PatternScreen() {

    const chainPattern1 = {
        imageSrc: ChainPattern,
        patternContentTitle: 'Chain Pattern 1',
        patternContentDescription: 'This is the chain pattern 1. It looks on mr po.'
    }

    const chainPattern2 = {
        imageSrc: ChainPattern,
        patternContentTitle: 'Chain Pattern 2',
        patternContentDescription: 'This is the chain pattern 2. it looks on wumperamongus'
    }

    return (
        <div className="pattern_screen ">
            <div className = "pattern_title_container">
                <h2 className="pattern_title">Patterns</h2>
            </div>
            <div className="pattern_parent_content_container">
                <PatternContent 
                    imageSrc={chainPattern1.imageSrc} 
                    patternContentTitle={chainPattern1.patternContentTitle} 
                    patternContentDescription={chainPattern1.patternContentDescription}
                />
                <PatternContent
                    imageSrc={chainPattern2.imageSrc} 
                    patternContentTitle={chainPattern2.patternContentTitle} 
                    patternContentDescription={chainPattern2.patternContentDescription}
                />
             </div>
         </div>

           
    )
}
export default PatternScreen