import React from "react"

import { axiosPublic } from "../data/api"
import { extraData } from "../data/extraData"
import { sidebar } from "../data/sidebar"
import SideMenu from "./SideMenu"
import SpecialDraw from "./SpecialDraw"
import Card from "./Card"

const Main = () => {

  return (
    <main className="">
      <section className="fixed">
        <SideMenu sidebar={sidebar} />
      </section>

      <section className="max-w-[1225px] container mx-auto">
        <Card />
      </section>

      <section >
        <SpecialDraw />
      </section>
    </main>
  );
};

export default Main;
