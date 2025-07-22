import './ProductScreen.css'
import ProductContent from '../components/ProductContent'
import {bookMarkPattern, CoastersCrochet, ToteCrochet,BlanketImg,keyChain,beanieImg,Plantholders,GlovesImg,Tablerunner,cardign} from '../constants/ProductConstants'


function ProductScreen() {


    return (
        <div className="product_screen ">
            <div className="product_title_container">
                <h2 className="product_title">Products</h2>
            </div>
            <div className="product_parent_content_container">
                <ProductContent
                    imageSrc={bookMarkPattern.imageSrc} 
                    productContentTitle={bookMarkPattern.productContentTitle}
                    productContentDescription={bookMarkPattern.productContentDescription}
                />
                <ProductContent
                    imageSrc={CoastersCrochet.imageSrc}
                    productContentTitle={CoastersCrochet.productContentTitle}
                    productContentDescription={CoastersCrochet.productContentDescription}
                />
            </div>
            <div className="product_parent_content_container">
                <ProductContent
                    imageSrc={ToteCrochet.imageSrc}
                    productContentTitle={ToteCrochet.productContentTitle}
                    productContentDescription={ToteCrochet.productContentDescription}
                />
                <ProductContent
                    imageSrc={BlanketImg.imageSrc}
                    productContentTitle={BlanketImg.productContentTitle}
                    productContentDescription={BlanketImg.productContentDescription}
                />
            </div>
             <div className="product_parent_content_container">
                <ProductContent
                    imageSrc={keyChain.imageSrc}
                    productContentTitle={keyChain.productContentTitle}
                    productContentDescription={keyChain.productContentDescription}
                />
                <ProductContent
                    imageSrc={beanieImg.imageSrc}
                    productContentTitle={beanieImg.productContentTitle}
                    productContentDescription={beanieImg.productContentDescription}
                />
            </div>
             <div className="product_parent_content_container">
                <ProductContent
                    imageSrc={Plantholders.imageSrc}
                    productContentTitle={Plantholders.productContentTitle}
                    productContentDescription={Plantholders.productContentDescription}
                />
                <ProductContent
                    imageSrc={GlovesImg.imageSrc}
                    productContentTitle={GlovesImg.productContentTitle}
                    productContentDescription={GlovesImg.productContentDescription}
                />
        </div>
          <div className="product_parent_content_container">
                <ProductContent
                    imageSrc={Tablerunner.imageSrc}
                    productContentTitle={Tablerunner.productContentTitle}
                    productContentDescription={Tablerunner.productContentDescription}
                />
                <ProductContent
                    imageSrc={cardign.imageSrc}
                    productContentTitle={cardign.productContentTitle}
                    productContentDescription={cardign.productContentDescription}
                />
        </div>
        </div>


    )
}
export default ProductScreen