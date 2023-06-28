import Image from "next/image";
import { useState } from "react";
import "./galleryExpanded.css";
import galleryPictures from "./galleryImages";
import { Picture } from "./galleryCollapsed";

interface GalleryCollapsedProps {
  toggleGallery: () => void;
}

export default function GalleryExpanded({
  toggleGallery,
}: GalleryCollapsedProps) {
  const [selectedImage, setSelectedImage] = useState<Picture | null>(null);

  const handleImageClick = (image: Picture) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery">
      <div className="gallery-title--expanded" id="gallery-title">
        <h2 className="gallery-title-expanded text-center  fw-bolder mt-5 mb-3 text-info">
          Gallery
        </h2>
      </div>

      <div className="gallery-container container">
        <button
          type="button"
          className="btn btn-outline-info btn-less btn-sm mt-3 fw-medium mb-2"
          onClick={toggleGallery}
        >
          Less {"<-"}
        </button>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-1">
          {galleryPictures.map((image: Picture) => (
            <div className="col" key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                className="img-fluid rounded gallery-img"
                data-bs-toggle="modal"
                data-bs-target="#enlargedImageModal"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="enlargedImageModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content enlarged-img-content m-auto">
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="img-fluid rounded enlargedImage"
                width={700}
                height={700}
              />
            )}

            <button
              type="button"
              className="btn-close enlarged-img-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
