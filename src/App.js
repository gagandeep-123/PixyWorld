import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Images from "./components/images/images";

function App() {
  const [isSearch, setIsSearch] = useState("");
  const [ImageSearch, setImageSearch] = useState([]);
  const [searchTagImage, setTagImage] = useState([]);
  const [tagClicked, setTagClicked] = useState(false);
  const passData = (data, searchImages) => {
    setIsSearch(data);
    setImageSearch(searchImages);
    setTagClicked(false);
  };

  const passData2 = (searchTag, isClicked) => {
    setIsSearch("");
    setImageSearch(searchTag);
    setTagClicked(isClicked);
  };

  return (
    <div className="App">
      <Header passData={passData}></Header>
      <Navbar passData2={passData2}></Navbar>
      <About></About>
      <Images
        isSearch={isSearch}
        ImageSearch={ImageSearch}
        searchTagImage={searchTagImage}
        tagClicked={tagClicked}
      ></Images>
    </div>
  );
}

export default App;
