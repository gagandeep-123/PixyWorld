import "./about.css";
import { BiSearch } from "react-icons/bi";
import { MdQrCodeScanner } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from 'axios';

const About = () => {
  const [random, setRandom] = useState([]);
  const fetchRandomImages = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=XH07Mf7_whm2ewveZCJ7oRQD84HeGl-XDmu5fFk6Pv4&count=1`
      )
      .then((res) => {
        setRandom(res.data);
      });
  };

    useEffect(() => {
      fetchRandomImages();
    }, []);

  
    return (
      <div className="about">
        <div>
          {random.map((item) => {
            return (
              <img
                src={item.urls.regular}
                alt="Loading"
                key={item.id}
                className="aboutImage"
              ></img>
            );
          })}
        </div>
        <div className="about-container">
          <h4 className="aboutApp">PixyWorld</h4>
          <p className="aboutApp">
            The internet’s source of freely-usable images
          </p>
          <p className="poweredBy">Say it in Pictures.</p>
        </div>
      </div>
    );
}

export default About;