import React, { useState } from "react";
import Increment from "../utils/increment";

const Carousel = () => {
  const [imageNumber, setImageNumber] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const images = [
    "https://www.wwe.com/f/styles/gallery_img_l/public/all/2016/06/031_RAW_01072013ca_1818_CS--95dae07be1c94f9f85c3b54709e5f43e.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2022/04/The-Avengers-2012-Cast.jpeg?resize=768%2C432",
    "https://www.comicbookherald.com/wp-content/uploads/2016/03/new-52-justice-league-1280x720.jpeg",
  ];

  const handleIncrement = (rightOrLeft) => {
    const newImageNumber = Increment(imageNumber, images.length, rightOrLeft);
    setOpacity(0);
    setTimeout(() => {
      setImageNumber(newImageNumber);
      setOpacity(1);
    }, 300);
  };

  return (
    <div className="container">
      <div onClick={() => handleIncrement("left")} className="image_changer">
        &lt;
      </div>
      <img
        style={{ opacity: opacity }}
        className="image"
        src={images[imageNumber]}
        alt="An Awesome demo"
      />
      <div onClick={() => handleIncrement("right")} className="image_changer">
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
