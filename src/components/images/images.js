import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import "./images.css";
import axios from "axios";
const Images = ({ isSearch, ImageSearch, searchTagImage, tagClicked }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=XH07Mf7_whm2ewveZCJ7oRQD84HeGl-XDmu5fFk6Pv4&count=10`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      });
  };

  return (
    <div className="allImages">
      {console.log(
        isSearch,
        tagClicked,
        ImageSearch,
        searchTagImage,
        !isSearch && !tagClicked
      )}
      {
        !isSearch && !tagClicked ? (
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
          >
            <div className="images-container">
              {images.map((item) => {
                return (
                  <img
                    src={item.urls.regular}
                    alt=""
                    key={item.id}
                    className="unsplash-images"
                  ></img>
                );
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <div className="images-container">
            {console.log("mai chala")}
            {ImageSearch.map((items) => {
              return (
                <img
                  src={items.urls.regular}
                  alt=""
                  key={items.id}
                  className="unsplash-images"
                ></img>
              );
            })}
          </div>
        )
        //           (
        // <div className="images-container">
        //   {ImageSearch.map((items) => {
        //     return (
        //       <img
        //         src={items.urls.regular}
        //         alt=""
        //         key={items.id}
        //         className="unsplash-images"
        //       ></img>
        //     );
        //   })}
        // </div>
        //   )
      }
    </div>
  );
};

export default Images;
