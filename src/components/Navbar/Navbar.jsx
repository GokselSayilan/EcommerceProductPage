import React, { useState, useContext, useEffect } from "react";
import "./navbar.css";
import { ProductContext } from "../../contexts/ProductContext";

function Navbar() {
  const { setTotalPieces, totalPieces } = useContext(ProductContext);

  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState("");

  useEffect(() => {
    let timeoutId;
    if (hovered) {
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [hovered]);

  let timeoutId; // timeoutId'yi burada tanımlayın

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // timeoutId'yi temizleyin
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // 1 saniye sonra setIsOpen(false) yapacak bir zamanlayıcı kurun
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const handleMobileMenu = (value) => {
    if (value === "blackOutMobile" || value === "navbarMobileMenuCloseIcon") {
      setDisplayMobileMenu(false);
    }
  };

  return (
    <div className="navbar">
      {displayMobileMenu && (
        <div
          className="blackOutMobile"
          onClick={(e) => handleMobileMenu(e.target.className)}
        >
          {" "}
        </div>
      )}
      <div
        className={
          displayMobileMenu
            ? "navbarMobileMenu animate__animated animate__fadeInLeft"
            : "navbarMobileMenu animate__animated animate__fadeOutLeft"
        }
      >
        <img
          src="assets/images/icon-close-gray.svg"
          alt=""
          className="navbarMobileMenuCloseIcon"
          onClick={(e) => handleMobileMenu(e.target.className)}
        />

        <div className="navbarMobileMenuItems">
          <h4 className="navbarMobileMenuItem">Collections</h4>
          <h4 className="navbarMobileMenuItem">Men</h4>
          <h4 className="navbarMobileMenuItem">Women</h4>
          <h4 className="navbarMobileMenuItem">About</h4>
          <h4 className="navbarMobileMenuItem">Contact</h4>
        </div>
      </div>

      <div className="navbarWrapper">
        <div className="navbarLeft">
          <div className="navbarLeftItems">
            <img
              src="assets/images/icon-menu.svg"
              alt="menuIcon"
              className="menuIcon"
              onClick={() => setDisplayMobileMenu(true)}
            />
            <img
              src="assets/images/logo.svg"
              alt=""
              className="navbarLeftLogo"
            />
            <h4 className="navbarLeftItem">
              Collection <hr className="navbarLeftItemHr" />
            </h4>
            <h4 className="navbarLeftItem">
              Men
              <hr className="navbarLeftItemHr" />
            </h4>
            <h4 className="navbarLeftItem">
              Women
              <hr className="navbarLeftItemHr" />
            </h4>
            <h4 className="navbarLeftItem">
              About
              <hr className="navbarLeftItemHr" />
            </h4>
            <h4 className="navbarLeftItem">
              Contact
              <hr className="navbarLeftItemHr" />
            </h4>
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarRightCartWrapper">
            {totalPieces !== 0 && (
              <div className="navbarRightProductPieces">{totalPieces}</div>
            )}
            <img
              src="assets/images/icon-cart.svg"
              alt="cartIcon"
              className="navbarRightCart"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className={
                isOpen ? "navbarRightCartBasket block " : "navbarRightCartBasket "
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h4 className="navbarRightCartBasketTitle">Cart</h4>
              <hr className="navbarRightCartSep" />
              <div className="navbarRightCartItems">
                {totalPieces === 0 ? (
                  <h4 className="navbarRightCartItemsEmpty">
                    Your cart is empty.
                  </h4>
                ) : (
                  <div className="navbarRightCartItem">
                    <div className="navbarRightCartItemWrapper">
                      <img
                        src={`assets/images/image-product-1-thumbnail.jpg`}
                        alt=""
                        className="navbarRightCartItemPhoto"
                      />
                      <div className="navbarRightCartItemInfo">
                        <p className="navbarRightCartItemTitle">
                          Fall Limited Edition Sneakers
                        </p>
                        <div className="navbarRightCartItemPrice">
                          <p className="navbarRightCartItemProductPrice">
                            $125.00 x {totalPieces}
                          </p>
                          <p className="navbarRightCartItemProductTotalPrice">
                            ${(totalPieces * 125).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <img
                        src="assets/images/icon-delete.svg"
                        alt="deleteIcon"
                        className="navbarRightCartItemDelete"
                        onClick={() => setTotalPieces(0)}
                      />
                    </div>

                    <button className="navbarRightCartItemButton">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <img
            src="assets/images/image-avatar.png"
            alt="avatarProfile"
            className="navbarRightProfile"
          />
        </div>
      </div>
      <hr className="navbarSep" />
    </div>
  );
}

export default Navbar;
