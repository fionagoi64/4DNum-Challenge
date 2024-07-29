import React, { useState } from "react";
import { sidebar } from "../../data/sidebar";
import { Close } from "../buttons/Close";
import { NavLink } from "react-router-dom";
import apk from "../../assets/images/apk.png";
import app from "../../assets/images/appstore.svg";
import { Theme } from "../buttons/Theme";
import { Language } from "../buttons/Language";

interface SidebarProps {
  handleClose?: () => void;
  isShow: string;
  isTransition?: string;
  darkMode: boolean;
  handleMenu: () => void;
  handleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  handleClose,
  isShow,
  isTransition,
  darkMode,
  handleTheme,
}) => {
  return (
    <section className={`relative ${isShow}`}>
      <div className="xl:hidden absolute h-screen w-full bg-black opacity-50 z-40"></div>
      <div
        className={`fixed bg-sidebar_background h-screen top-0 w-[300px] xl:w-[220px] 2xl:w-[300px] rounded-r-[45px] z-40 ${isTransition}`}
      >
        <button onClick={handleClose} className="absolute top-5 right-5">
          <Close />
        </button>
        <div className="mt-20 p-5">
          {sidebar.map((sidebarItem, sidebarIndex) => (
            <div key={sidebarIndex}>
              <h1 className="font-semibold text-sm mb-2 text-sidebar_label">
                {sidebarItem.label}
              </h1>
              {sidebarItem.list_items.map((listItem, listItemIndex) => (
                <ul key={listItemIndex}>
                  <li className="py-3">
                    <NavLink
                      to={listItem.url}
                      className="flex flex-row gap-3 items-center"
                    >
                      <img className="h-6" src={listItem.icon} alt="" />
                      <p className="font-medium text-sm text-sidebar_list_item">
                        {listItem.label}
                      </p>
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>
          ))}
          <div className="xl:hidden">
            <h1 className="font-semibold text-sm my-2 text-sidebar_label">
              Setting
            </h1>
            <ul>
              <li>
                <Theme darkMode={darkMode} handleTheme={handleTheme} />
              </li>
              <li className="flex">
                <Language />
                <select
                  id="language"
                  className="focus:outline-none bg-sidebar_background text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="bm">Malay</option>
                  <option selected value="en">
                    English
                  </option>
                  <option value="cn">中文</option>
                </select>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-sm my-2 text-sidebar_label">
              Install App
            </h1>
            <div className="flex items-center gap-5 pl-5 xl:pl-0">
              <img src={app} alt="" className="h-8 xl:h-6" />
              <img src={apk} alt="" className="h-12 xl:h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
