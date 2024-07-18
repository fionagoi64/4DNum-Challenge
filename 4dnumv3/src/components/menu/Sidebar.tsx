import React from "react";
import { sidebar } from "../../data/sidebar";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  return (
    <section className="hidden xl:block">
      <div className="fixed bg-sidebarbg h-screen top-0 w-[300px] xl:w-[220px] rounded-r-[45px] z-40">
        <button className="absolute right-0 m-8 hidden">
          <IoMdClose className="text-2xl" />
        </button>

        <div className="mt-20">
          {sidebar.map((sidebarItem, sidebarIndex) => {
            return (
              <div key={sidebarIndex} className="p-5">
                <h1 className="font-semibold text-xs mb-2">
                  {sidebarItem.label}
                </h1>
                {sidebarItem.list_items.map((listItem, listItemIndex) => {
                  return (
                    <ul key={listItemIndex}>
                      <li className="py-2">
                        <a
                          href={`${listItem.url}`}
                          className="flex flex-row gap-3 items-center"
                        >
                          <img className="h-5" src={listItem.icon} alt="" />
                          <p className="font-medium text-xs ">
                            {listItem.label}
                          </p>
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
