import "./ourProducts.css";
import Image from "next/image";
import cakeUnsplash from "./assets/cake-unsplash2.jpg";
import cupcakeUnsplash from "./assets/cupcakes-unsplash2.jpg";
import flan from "./assets/flan.jpg";
import picaderas from "./assets/picaderas.jpg";

export default function OurProducts() {
  return (
    <div className="ourProducts pb-5">
      <div className="whatWeMake-main-div container">
        <h2
          className="what-we-make-title text-info fw-bolder pt-4 pb-5 text-center"
          id="our-products"
        >
          Our Products
        </h2>

        <div className="row row-cols-1 row-cols-md-4 g-1">
          <div className="col">
            <div className="card text-bg-dark">
              <Image
                src={cakeUnsplash}
                className="card-img"
                alt="Custom Cake"
                width={200}
                height={450}
              />
              <div className="card-img-overlay mt-5">
                <h5 className="card-title text-center mt-4 fs-1 fw-bolder">
                  Custom cakes & cupcakes
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <Image
                src={cupcakeUnsplash}
                className="card-img"
                alt="Custom Cake"
                width={200}
                height={450}
              />
              <div className="card-img-overlay mt-5">
                <h5 className="card-title text-center mt-5 fs-1 fw-bolder ">
                  Pastries
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <Image
                src={flan}
                className="card-img"
                alt="Custom Cake"
                width={200}
                height={450}
              />
              <div className="card-img-overlay mt-5">
                <h5 className="card-title text-center mt-5 fs-1 fw-bolder">
                  Flans
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <Image
                src={picaderas}
                className="card-img"
                alt="Custom Cake"
                width={200}
                height={450}
              />
              <div className="card-img-overlay mt-5">
                <h5 className="card-title text-center mt-5 fs-1 fw-bolder">
                  Picaderas
                </h5>
              </div>
            </div>
          </div>
          {/* <button
            type="button"
            className="btn btn-outline-danger col-2 mx-auto my-5"
          >
            Open menu
          </button> */}
        </div>
      </div>
    </div>
  );
}
