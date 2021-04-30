import React, { createContext, useState, useEffect } from "react";

export const PopularContext = createContext();

export const PopularProvider = (props) => {

    useEffect( ()=> {
        fetchPopular();
    }, [])

  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const data = await fetch("https://video-proxy.3rdy.tv/api/vod/popular");
    const data_json = await data.json();
    setPopular(data_json.data);
  };


  return (
    <PopularContext.Provider value={popular}>
      {props.children}
    </PopularContext.Provider>
  );
};
