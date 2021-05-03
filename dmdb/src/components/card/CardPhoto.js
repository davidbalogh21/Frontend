import React, { useState, useEffect } from "react";

function CardPhoto({ id, name }) {
  useEffect(() => {
    const fetchPhoto = async () => {
      const photo = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/category/${id}/assets/?page=1&size=20`
      );
      const photo_data = await photo.json();
      setPhoto(photo_data.data.results);
    };
    fetchPhoto();
  }, []);

  const [photo, setPhoto] = useState([]);

  return (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/original/${photo?.[6]?.backdrop_path}`}
        alt={`photo_${photo.id}`}
      />
      <h2>{name}</h2>
      <h3>Includes movies such as: </h3>
      <ul>
        <li>{photo?.[1]?.title}</li>
        <li>{photo?.[2]?.title}</li>
        <li>{photo?.[3]?.title}</li>
      </ul>
    </div>
  );
}

export default CardPhoto;
