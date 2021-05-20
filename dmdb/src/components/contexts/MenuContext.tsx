import React, { createContext, useState, useEffect } from "react";

interface Menu {
  route: string;
  label: string;
}

const menuDefaultValues : Menu[] = [{route: "", label:""}]

export const MenuContext = createContext<Menu[]>(menuDefaultValues);

export const MenuProvider:React.FC = (props) => {

    useEffect( ()=> {
        fetchMenus();
    }, [])

  const [menus, setMenus] = useState<Menu[]>([]);

  const fetchMenus = async () => {
    const data = await fetch("https://video-proxy.3rdy.tv/api/static/menu?=");
    const data_json = await data.json();
    setMenus(data_json.data);
  };


  return (
    <MenuContext.Provider value={menus}>
      {props.children}
    </MenuContext.Provider>
  );
};
