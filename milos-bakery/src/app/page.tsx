"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";
import HeroArea from "./heroArea";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroArea />
      <Footer />
    </main>
  );
}
