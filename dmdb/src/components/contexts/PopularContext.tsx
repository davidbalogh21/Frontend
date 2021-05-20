import React, { createContext, useState, useEffect } from "react";

export interface PopularInfo {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path:string
}

const initialPopular: PopularInfo[] = [{id:0, title:"", poster_path: "", vote_average:0,  backdrop_path:""}]
export const PopularContext = createContext<PopularInfo[]>(initialPopular);

export const PopularProvider:React.FC = (props) => {

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
