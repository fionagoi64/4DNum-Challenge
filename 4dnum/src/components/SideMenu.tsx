import React, { useState } from "react";
import apk from '../images/navMenu/APK.png';
import appstore from '../images/navMenu/appStore.svg';
import { IoMdClose } from "react-icons/io";
import fourD_logo from "../images/4DNumLogo.png";
import logo_text from "../images/4dnumText.svg";

type SideMenuProps = {
  sidebar: {
    label: string,
    list_items:
    {
      [key: string]: string
    }[]
  }[]
}

export const SideMenu = (props: SideMenuProps) => {

  const [isOpen, setIsOpen] = useState(true);

  return (

    <div>
      {isOpen &&
        <div className={`absolute z-10 bg-white h-screen w-[300px] rounded-r-[50px]`}>

          <div className="mx-5 mb-5 mt-6">
            <div className="xl:flex hidden flex-row gap-3 items-center">
              <img src={fourD_logo} alt="" className="rounded-full h-9" />
              <img src={logo_text} alt="" className="h-[17px]" />
            </div>

            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="m-5 cursor-pointer text-xl xl:hidden">
                <IoMdClose />
              </button>
            </div>
          </div>

          {
            props.sidebar.map((sidebarItem, index) => {
              return (
                <div key={index} className="text-sm p-5">
                  <h1 className="font-semibold text-xs mb-2">{sidebarItem.label}</h1>
                  {sidebarItem.label.includes("Install App") ?
                    <div className="flex flex-row gap-3 mt-2 items-center">
                      <img src={appstore} alt="" className='h-6' />
                      <img src={apk} className="h-8" alt="" />
                    </div> :
                    <div>
                      {sidebarItem.list_items.map((listItem, listItemIndex) => {
                        return (
                          <div key={listItemIndex}>
                            <ul className="">
                              <li className="py-3">
                                <a href={`${listItem.url}`} className="flex flex-row gap-3 items-center">
                                  <img className="h-5" src={listItem.icon} alt="" />
                                  <p className="font-medium text-xs text-dark-grey">{listItem.label}</p>
                                </a>
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  }
                </div>
              );
            })
          }
        </div>


      }
    </div >
  )
}

export default SideMenu