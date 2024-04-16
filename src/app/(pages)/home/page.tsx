import Categories from "@/components/categories/page";
import Hero from "@/components/hero/page";
import React from "react";

type Props = {};

function HomePage({}: Props) {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}

export default HomePage;
