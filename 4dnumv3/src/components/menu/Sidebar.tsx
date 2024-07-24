import React from "react";
import { sidebar } from "../../data/sidebar";
import { Close } from "../buttons/Close";

interface SidebarProps {
  handleClose?: () => void;
  isShow: string;
  isTransition?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  handleClose,
  isShow,
  isTransition,
}) => {
  const isInclude = sidebar.some((item) => item.label.includes("Install App"));

  return (
    <section className={`relative ${isShow}`}>
      <div className="xl:hidden absolute h-screen w-full bg-black opacity-50 z-40"></div>
      <div
        className={`fixed bg-sidebar_background h-screen top-0 w-[300px] xl:w-[220px] 2xl:w-[300px] rounded-r-[45px] z-40 ${
          isTransition
            ? "transition duration-300 ease-in-out transform translate-x-0"
            : ""
        }`}
      >
        <button onClick={handleClose} className="absolute top-5 right-5">
          <Close />
        </button>
        <div className="mt-20">
          {sidebar.map((sidebarItem, sidebarIndex) => (
            <div key={sidebarIndex} className="p-5">
              <h1 className="font-semibold text-xs mb-2 text-sidebar_label">
                {sidebarItem.label}
              </h1>
              {sidebarItem.list_items.map((listItem, listItemIndex) => (
                <ul
                  key={listItemIndex}
                  className={`${isInclude ? "flex flex-row gap-2" : ""}`}
                >
                  {isInclude ? (
                    <li className="py-2">
                      <a
                        href={listItem.url}
                        className="flex flex-row gap-3 items-center"
                      >
                        <img className="h-5" src={listItem.icon} alt="" />
                        <p className="font-medium text-xs text-sidebar_list_item">
                          {listItem.label}
                        </p>
                      </a>
                    </li>
                  ) : (
                    <>
                      <li>
                        <img src={sidebarItem.list_items[0]?.icon} alt="" />
                      </li>
                      <li>
                        <img src={sidebarItem.list_items[1]?.icon} alt="" />
                      </li>
                    </>
                  )}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
