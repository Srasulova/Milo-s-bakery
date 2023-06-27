import "./heroArea.css";
import arc from "./assets/Milo's  bakery arc.png";
import Image from "next/image";

export default function HSeroArea() {
  return (
    <>
      <div className="heroArea hero-parent d-flex flex-column">
        <div className="quote-div">
          <h1 className="quote text-center d-flex flex-column">
            <div className="brand-arc">
              <Image src={arc} alt="logo arc" width="900" height="250" />
            </div>

            <span className="quote-span span-1 ">
              Homemade Dominican treats
            </span>
            <span className="quote-span span-2-3">
              {" "}
              straight from our ovens to your heart,
            </span>
            <span className="quote-span span-2-3 mb-5">
              {" "}
              made with love and served with a smile
            </span>
          </h1>
        </div>
        <button
          type="button"
          className="btn btn-danger my-5 mx-auto btn-lg col-1 contact-btn"
        >
          Contact us
        </button>
      </div>
    </>
  );
}
