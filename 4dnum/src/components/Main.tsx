import { sidebar } from "../data/sidebar"
import SideMenu from "./SideMenu"
import SpecialDraw from "./SpecialDraw"
import Card from "./Card"
import React, { useRef } from "react";

type MainProps = {
  selectedDate: Date;
};

const Main: React.FC<MainProps> = ({ selectedDate }) => {

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <main className="md-bg">
      <section className="xl:block hidden fixed z-10">
        <SideMenu sidebar={sidebar} />
      </section>

      <section className="md:max-w-[740px] lg:max-w-[1210px] xl:max-w-[810px] 2xl:max-w-[1210px] max-w-[1225px] container mx-auto pt-[90px]">
        <Card selectedDate={selectedDate} cardRefs={cardRefs} />
      </section>

      <section className="xl:block hidden fixed right-0 top-0 h-[calc(100%-20rem)] translate-y-1/2 z-10 ">
        <SpecialDraw />
      </section>
    </main>
  );
};

export default Main;
