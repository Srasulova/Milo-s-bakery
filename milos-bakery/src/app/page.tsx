"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";
import HeroArea from "./heroArea";
import Footer from "./footer";
import OurProducts from "./ourProducts";
import GalleryCollapsed from "./galleryCollapsed";
import GalleryExpanded from "./galleryExpanded";
import { useState } from "react";
import OurStory from "./ourStory";

export default function Home() {
  const [showGalleryExpanded, setShowGalleryExpaned] = useState(false);

  const handleToggleGallery = () => {
    setShowGalleryExpaned(!showGalleryExpanded);
  };

  return (
    <main className="">
      <NavBar />
      <HeroArea />
      <OurStory />
      <OurProducts />

      {showGalleryExpanded ? (
        <GalleryExpanded toggleGallery={handleToggleGallery} />
      ) : (
        <GalleryCollapsed toggleGallery={handleToggleGallery} />
      )}
      <Footer />
    </main>
  );
}
