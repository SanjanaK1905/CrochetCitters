import './PatternContent.css'

type PatternContentProps = {
    imageSrc: string;
    patternContentTitle: string;
    patternContentDescription: string;
}

function PatternContent(props: PatternContentProps) {
  const {imageSrc, patternContentTitle, patternContentDescription} = props

  return (
     <div className="pattern_content_container">
      <img src={imageSrc} className="pattern_image" />
      <div className = "pattern_description_container">
         <h2 className="pattern_description_text">{patternContentTitle}</h2>
         <p>{patternContentDescription}</p>
      </div>
    </div>
  )
}    
    
export default PatternContent 