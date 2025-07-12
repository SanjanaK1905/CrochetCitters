import './PatternScreen.css'
import PatternContent from '../components/PatternContent'
import {chainPattern, halfCrochet, doubleCrochet,trebleCrochet, slipStitch,shellStitch} from '../constants/constants'


function PatternScreen() {

    return (
        <div className="pattern_screen ">
            <div className="pattern_title_container">
                <h2 className="pattern_title">Patterns</h2>
            </div>
            <div className="pattern_parent_content_container">
                <PatternContent
                    imageSrc={chainPattern.imageSrc}
                    patternContentTitle={chainPattern.patternContentTitle}
                    patternContentDescription={chainPattern.patternContentDescription}
                />
                <PatternContent
                    imageSrc={halfCrochet.imageSrc}
                    patternContentTitle={halfCrochet.patternContentTitle}
                    patternContentDescription={halfCrochet.patternContentDescription}
                />
            </div>
            <div className="pattern_parent_content_container">
                <PatternContent
                    imageSrc={doubleCrochet.imageSrc}
                    patternContentTitle={doubleCrochet.patternContentTitle}
                    patternContentDescription={doubleCrochet.patternContentDescription}
                />
                <PatternContent
                    imageSrc={trebleCrochet.imageSrc}
                    patternContentTitle={trebleCrochet.patternContentTitle}
                    patternContentDescription={trebleCrochet.patternContentDescription}
                />
            </div>
             <div className="pattern_parent_content_container">
                <PatternContent
                    imageSrc={slipStitch.imageSrc}
                    patternContentTitle={slipStitch.patternContentTitle}
                    patternContentDescription={slipStitch.patternContentDescription}
                />
                <PatternContent
                    imageSrc={shellStitch.imageSrc}
                    patternContentTitle={shellStitch.patternContentTitle}
                    patternContentDescription={shellStitch.patternContentDescription}
                />
            </div>
        </div>


    )
}
export default PatternScreen