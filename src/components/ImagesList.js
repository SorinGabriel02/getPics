import "./ImagesList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImagesList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="images-list">{images}</div>;
};

export default ImagesList;
