import React from "react";
import { sidebar } from "../../data/sidebar";
import { Close } from "../buttons/Close";
import { NavLink } from "react-router-dom";
import apk from "../../assets/images/apk.png";
import app from "../../assets/images/appstore.svg";
import { Language } from "../buttons/Language";
import { ThemeToggle } from "../buttons/ThemeToggle";
import { useTheme } from "../../context/ThemeProvider";

interface SidebarProps {
  handleClose?: () => void;
  isShow: string;
  isTransition?: string;
  handleMenu: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  handleClose,
  isShow,
  isTransition,
}) => {
  const { themeMode } = useTheme();
  const darkMode = themeMode === "dark";

  return (
    <section className={`relative ${isShow}`}>
      <button
        onClick={handleClose}
        className="fixed xl:hidden !cursor-default bg-black-100 opacity-50 h-full w-full z-40"
      />
      <div
        className={`fixed bg-white-100 dark:bg-gray-800 h-screen top-0 w-[300px] xl:w-[220px] 2xl:w-[300px] rounded-r-[45px] z-40 ${isTransition}`}
      >
        <button onClick={handleClose} className="absolute top-5 right-5">
          <Close />
        </button>
        <div className="mt-12 p-5">
          {sidebar.map((sidebarItem, sidebarIndex) => (
            <div key={sidebarIndex}>
              <h1 className="font-semibold text-sm xl:text-xs mt-8 dark:text-white-100">
                {sidebarItem.label}
              </h1>
              {sidebarItem.list_items.map((listItem, listItemIndex) => (
                <ul key={listItemIndex}>
                  <li>
                    <NavLink
                      to={listItem.url}
                      onClick={handleClose}
                      className={({ isActive }) =>
                        `flex gap-3 items-center font-medium text-sm xl:text-xs py-3 ${
                          isActive
                            ? "bg-blue-500 dark:bg-purple-500 text-purple-300 dark:text-gray-900 active rounded-sm"
                            : "text-gray-300"
                        } dark:${isActive ? "text-blue-400" : "text-white-200"}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <img
                            className=""
                            src={
                              isActive
                                ? darkMode
                                  ? listItem.darkIcon
                                  : listItem.activeIcon
                                : listItem.defaultIcon
                            }
                            alt="icon"
                          />
                          {listItem.label}
                        </>
                      )}
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>
          ))}
          <div className="md:hidden">
            <h1 className="font-semibold text-sm mt-6 mb-3 dark:text-white-200">
              Setting
            </h1>
            <ul className="space-y-3">
              <li>
                <ThemeToggle />
              </li>
              <li className="flex items-center">
                <Language />
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-sm mt-6 dark:text-white-200 xl:text-xs">
              Install App
            </h1>
            <div className="flex items-center gap-5 pl-5 xl:pl-0 mt-2 ">
              <img src={app} alt="" className="h-8 " />

              <img src={apk} alt="" className="h-12 xl:h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
