import "./navBar.css";
import logo from "./assets/new logo.png";
import Image from "next/image";
// import ShoppingCart from "./shoppingCart";

export default function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <Image src={logo} alt="Logo" width="50" height="50" />
            <span className="brand-name">Milo&apos;s homemade</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item mx-4  text-center">
                <a
                  className="nav-link active text-info fw-semibold hover-change-color "
                  aria-current="page"
                  href="#hero-parent-id"
                >
                  Home
                </a>
              </li>

              <li className="nav-item mx-4  text-center">
                <a
                  className="nav-link text-info fw-semibold hover-change-color "
                  href="#our-products"
                >
                  Our story
                </a>
              </li>

              <li className="nav-item mx-4  text-center">
                <a
                  className="nav-link text-info fw-semibold hover-change-color "
                  href="#our-products"
                >
                  Our products
                </a>
              </li>

              <li className="nav-item mx-4  text-center">
                <a
                  className="nav-link text-info fw-semibold hover-change-color "
                  href="#gallery-title"
                >
                  Gallery
                </a>
              </li>

              <li className="nav-item mx-4  text-center">
                <a
                  className="nav-link text-info fw-semibold hover-change-color "
                  href="#contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>

            {/* <button
              type="button"
              className=" shopping-cart d-flex me-5"
              data-bs-toggle="modal"
              data-bs-target="#shoppingCartModal"
            >
              <a
                className="cart my-auto mx-2 text-info fw-bolder fs-5"
                href="#"
              >
                Cart
              </a>

              <i
                className="bi bi-cart "
                style={{ fontSize: "2.5rem", color: "green" }}
              ></i>
            </button> */}
          </div>
        </div>
      </nav>

      {/* <ShoppingCart /> */}
    </>
  );
}
