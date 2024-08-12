import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

export default function Homepage() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
    <Hero/>
    <About/>
    </main>
    </>
  );
}
