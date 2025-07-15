import './ProductContent.css'

type ProductContentProps = {
    imageSrc: string;
    productContentTitle: string;
    productContentDescription: string;
}

function ProductContent(props: ProductContentProps) {
  const {imageSrc, productContentTitle, productContentDescription} = props

  return (
     <div className="product_content_container">
      <img src={imageSrc} className="product_image" />
      <div className = "product_description_container">
         <h2 className="product_description_text">{productContentTitle}</h2>
         <p>{productContentDescription}</p>
      </div>
    </div>
  )
}    
    
export default ProductContent 