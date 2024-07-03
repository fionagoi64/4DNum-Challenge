import apk from '../images/navMenu/APK.png'
import appstore from '../images/navMenu/appStore.svg'

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


  return (

    <div className="">
      <div className=" bg-white h-screen w-[300px] rounded-r-[50px]">

        <button className="">
          <img src="" alt="" />
        </button>

        {
          props.sidebar.map((sidebarItem, index) => {
            return (
              <div key={index} className="text-sm p-5">
                <h1 className="font-semibold">{sidebarItem.label}</h1>
                {sidebarItem.label.includes("Install App") ?
                  <div className="flex flex-row gap-3">
                    <img src={apk} className="h-12" alt="" />
                    <img src={appstore} alt="" />
                  </div> :
                  <div> {sidebarItem.list_items.map((listItem, index) => {
                    return (
                      <div>
                        {sidebarItem.label.includes("Install App") ?
                          <div className="flex flex-row">
                            <img src={listItem.icon} alt="" />
                          </div> :
                          <ul className="">
                            <li key={index} className="mx-5 py-2">
                              <a href={`${listItem.url}`} className="flex flex-row gap-3 items-center">
                                <img src={listItem.icon} alt="" />
                                <p className="font-medium text-zinc-400">{listItem.label}</p>
                              </a>
                            </li>
                          </ul>}
                      </div>
                    )
                  })
                  }</div>}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SideMenu