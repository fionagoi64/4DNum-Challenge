import React from "react";
import { sidebar } from "../../data/sidebar";
import { Close } from "../buttons/Close";

interface SidebarProps {
  handleClose?: () => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ handleClose, isOpen }) => {
  return (
    <section className={`relative ${isOpen ? "block" : "hidden"}`}>
      <div className="xl:hidden absolute h-screen w-full bg-black-100 opacity-50 z-40"></div>
      <div
        className={`fixed bg-navbg h-screen top-0 w-[300px] xl:w-[220px] 2xl:w-[300px] rounded-r-[45px] z-40 transition-all duration-700 
          ${isOpen ? "ml-0" : "-ml-60"}`}
      >
        <button onClick={handleClose}>
          <Close />
        </button>
        <div className="mt-20">
          {sidebar.map((sidebarItem, sidebarIndex) => (
            <div key={sidebarIndex} className="p-5">
              <h1 className="font-semibold text-xs mb-2">
                {sidebarItem.label}
              </h1>
              {sidebarItem.list_items.map((listItem, listItemIndex) => (
                <ul key={listItemIndex}>
                  <li className="py-2">
                    <a
                      href={`${listItem.url}`}
                      className="flex flex-row gap-3 items-center"
                    >
                      <img className="h-5" src={listItem.icon} alt="" />
                      <p className="font-medium text-xs">{listItem.label}</p>
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
