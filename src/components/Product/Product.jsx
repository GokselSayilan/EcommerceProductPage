import React, { useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "./product.css";

function Product() {
  const { selectedPhoto, setSelectedPhoto, setTotalPieces } =
    useContext(ProductContext);

  const [tempPieces, setTempPieces] = useState(1);
  const [displayLightBox, setDisplayLightBox] = useState(false);

  const productsArray = [1, 2, 3, 4];

  const handlePieces = () => {
    setTotalPieces((prev) => Number(prev) + Number(tempPieces));
    setTempPieces(1);
  };

  const handleDisplayLightBox = (className) => {
    if (className === "closeIcon" || className === "lighthBox") {
      setDisplayLightBox(false);
    }
  };

  const handleNextPhoto = (value) => {
    if (
      selectedPhoto + Number(value) <= 3 &&
      selectedPhoto + Number(value) >= 0
    ) {
      setSelectedPhoto((prev) => Number(prev) + Number(value));
    }
  };

  // productsArray[selectedPhoto]
  return (
    <div className="product">
      {displayLightBox && (
        <div
          className="lighthBox"
          onClick={(e) => handleDisplayLightBox(e.target.className)}
        >
          <div className="lightBoxWrapper">
            <div className="lighthBoxMainImgWrapper">
              <img
                src={`assets/images/image-product-${selectedPhoto + 1}.jpg`}
                alt="mainPhoto"
                className="lighthBoxMainImg"
              />
              <div className="previousIcon" onClick={() => handleNextPhoto(-1)}>
                <img src="assets/images/icon-previous.svg" alt="previousIcon" />
              </div>
              <div className="nextIcon" onClick={() => handleNextPhoto(1)}>
                <img src="assets/images/icon-next.svg" alt="nextIcon" />
              </div>
              <img
                src="assets/images/icon-close.svg"
                alt="closeIcon"
                className="closeIcon"
              />
            </div>

            <div className="productLeftThumbnailPhotos lightBoxThumbnailPhotosCenter">
              {productsArray.map((product, index) => (
                <div className="productLeftThumbnailPhotoBox">
                  {selectedPhoto === index && (
                    <div className="photoBorder"></div>
                  )}

                  <img
                    src={`assets/images/image-product-${product}-thumbnail.jpg`}
                    alt="thumbnailPhoto1"
                    className={
                      selectedPhoto === index
                        ? "productLeftThumbnailPhoto selected"
                        : "productLeftThumbnailPhoto"
                    }
                    onClick={() => setSelectedPhoto(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="productWrapper">
        <div className="productLeft">
          <div className="productLeftMainPhotoWrapper">
            <img
              src={`assets/images/image-product-${selectedPhoto + 1}.jpg`}
              className="productLeftMainPhoto"
              alt="mainPhoto1"
              onClick={() => setDisplayLightBox(true)}
            />
            <div className="previousIcon" onClick={() => handleNextPhoto(-1)}>
              <img src="assets/images/icon-previous.svg" alt="previousIcon" />
            </div>
            <div className="nextIcon" onClick={() => handleNextPhoto(1)}>
              <img src="assets/images/icon-next.svg" alt="nextIcon" />
            </div>
          </div>

          <div className="productLeftThumbnailPhotos">
            {productsArray.map((product, index) => (
              <div className="productLeftThumbnailPhotoBox">
                {selectedPhoto === index && <div className="photoBorder"></div>}

                <img
                  src={`assets/images/image-product-${product}-thumbnail.jpg`}
                  alt="thumbnailPhoto1"
                  className={
                    selectedPhoto === index
                      ? "productLeftThumbnailPhoto selected"
                      : "productLeftThumbnailPhoto"
                  }
                  onClick={() => setSelectedPhoto(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="productRight">
          <div className="productRightWrapper">
            <h4 className="productRightCompanyName">Sneaker Company</h4>
            <h2 className="productRightProductTitle">
              Fall Limited Edition Sneakers
            </h2>
            <p className="productRightProductDesc">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="productRightProductPrices">
              <div className="productRightProductNewPrice">
                <h4 className="productRightProductNewPriceValue">$125.00</h4>
                <div className="productRightProductNewPriceDiscount">
                  <h4 className="productRightProductNewPriceDiscountValue">
                    50%
                  </h4>
                </div>
              </div>
              <h4 className="productRightProductOldPrice">$250.00</h4>
            </div>
            <div className="productRightBuyBox">
              <div className="productRightBuyBoxPiece">
                <img
                  src="assets/images/icon-minus.svg"
                  alt="minusIcon"
                  className="minusIcon"
                  onClick={() => {
                    if (tempPieces - 1 !== 0) {
                      setTempPieces((prev) => prev - 1);
                    }
                  }}
                />
                <h4 className="productPiece">{tempPieces}</h4>
                <img
                  src="assets/images/icon-plus.svg"
                  alt="plusIcon"
                  className="plusIcon"
                  onClick={() => setTempPieces((prev) => prev + 1)}
                />
              </div>
              <div className="productRightBuyBoxBasket" onClick={handlePieces}>
                <button className="productRightBuyBoxBasketButton">
                  <img
                    src="assets/images/icon-cart-white.svg"
                    alt="cartIcon"
                    className="cartIcon"
                  />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
