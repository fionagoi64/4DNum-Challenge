import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <main className="grid grid-cols-5">
      <section>
        <div></div>
      </section>

      <section className="col-span-3">
       <div className="grid grid-cols-3 gap-3">
         <Card imgSrc="" branchName=""/>
       </div>
      </section>

      <section>
        <div></div>
      </section>
    </main>
  );
};

export default Main;
