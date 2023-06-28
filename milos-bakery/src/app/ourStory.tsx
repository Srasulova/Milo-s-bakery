import Image from "next/image";
import pattern from "./assets/bakeryPattern.jpg";
import "./ourStory.css";

export default function OurStory() {
  return (
    <>
      <div className="main-div">
        <div className="ourStory-div container">
          <h1 className="ourStory-title text-center text-info pt-5">
            Our story
          </h1>
          <div className="story">
            <p className="story-text text-center text-danger pt-4">
              At &quot;Milo&apos;s Homemade&quot; our expertise lies in crafting
              custom-made cakes, but our menu extends to a variety of
              mouthwatering treats.
            </p>
            <p className="story-text text-center text-danger">
              From savory finger foods to irresistible pastries, each bite
              reflects our dedication to homemade excellence and the
              preservation of cherished family recipes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
