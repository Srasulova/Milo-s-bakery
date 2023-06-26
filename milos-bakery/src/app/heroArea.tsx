import "./heroArea.css";

export default function HSeroArea() {
  return (
    <>
      <div className="heroArea hero-parent">
        <div className="quote-div">
          <h1 className="quote text-center d-flex flex-column">
            <span className="quote-span align-self-start">
              Homemade Dominican treats,
            </span>
            <span className="quote-span">
              {" "}
              straight from our ovens to your heart,
            </span>
            <span className="quote-span align-self-end last-quote">
              {" "}
              made with love and served with a smile
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
