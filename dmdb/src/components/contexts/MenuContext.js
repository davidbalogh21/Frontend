import React, { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {

    useEffect( ()=> {
        fetchMenus();
    }, [])

  const [menus, setMenus] = useState([]);

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
