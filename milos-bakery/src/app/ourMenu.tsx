import "./ourMenu.css";
import Image from "next/image";
import cakeFlavors from "./assets/cakeFlavors.jpg";
import tresleche from "./assets/tresleche.jpeg";
import pieceOfFlan from "./assets/flanPiece.jpg";
import quipes from "./assets/quipes.jpeg";

export default function OurMenu() {
  return (
    <>
      <div className="ourmenu-main-div pt-5">
        <div className="menu-cards container">
          <div className="cakeflavors">
            <div className="card mx-auto" style={{ maxWidth: "960px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <Image
                    src={cakeFlavors}
                    className="img-fluid rounded-start"
                    alt="piece of cake"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-center text-danger fs-2 fw-medium">
                      Cakes & Cupcakes
                    </h5>
                    <p className="card-text text-center text-info">
                      Choose one of the mouthwatering cake flavors
                    </p>
                    <ul className="cakeFlavors-list lists text-center">
                      <li>Dominican cake</li>
                      <li>Vanilla</li>
                      <li>Chocolate</li>
                    </ul>

                    <p className="card-text text-center text-info">
                      Complete your selection with one of our filling flavors
                    </p>
                    <ul className="cakeFillings-list lists text-center">
                      <li>Dulce de leche</li>
                      <li>Vanilla</li>
                      <li>Pineapple</li>
                      <li>Guava</li>
                      <li>Strawberry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pastries">
            <div className="card mx-auto" style={{ maxWidth: "960px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-center text-danger fs-2 fw-medium">
                      Pastries
                    </h5>
                    <p className="card-text text-center text-info">
                      Don&apos;t miss out our other pastries
                    </p>
                    <ul className="pastries-list lists text-center">
                      <li>Original Tres Leche cake</li>
                      <li>Tres Leche cake with flan filling</li>
                      <li>Pineapple upside down pie</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <Image
                    src={tresleche}
                    className="img-fluid rounded-end"
                    alt="tresleche cake"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flans">
            <div className="card mx-auto" style={{ maxWidth: "960px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <Image
                    src={pieceOfFlan}
                    className="img-fluid rounded-start"
                    alt="piece of flan"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-center text-danger fs-2 fw-medium">
                      Flans
                    </h5>
                    <p className="card-text text-center text-info">
                      Check out the variety of our flans
                    </p>
                    <ul className="flans-list lists text-center">
                      <li>Original flan</li>
                      <li>Chocoflan</li>
                      <li>Banana flan</li>
                      <li>Flancoco</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
