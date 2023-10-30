import logo from "./pic-glry/btc5.jpg";
import image from "./pic-glry/btc3.jpg";
import image2 from "./pic-glry/btc1.jpg";
import image4 from "./pic-glry/btc2.jpg";
import image123 from "./pic-glry/saylors2.jpg";
import image124 from "./pic-glry/saylors.jpg";
import image5 from "./pic-glry/20231012_220921.jpg";
import image6 from "./pic-glry/20231012_221023.jpg";
import image7 from "./pic-glry/20231012_221031.jpg";
import image8 from "./pic-glry/20231012_221044.jpg";
import image9 from "./pic-glry/20231012_221054.jpg";
// import image10 from "./pic-glry/20231012_221105.jpg";
import image11 from "./pic-glry/20231012_221105.jpg";
import image12 from "./pic-glry/20231012_221115.jpg";
import image13 from "./pic-glry/20231012_221121.jpg";
import image14 from "./pic-glry/20231012_221133.jpg";
import image15 from "./pic-glry/20231012_221141.jpg";
import image16 from "./pic-glry/20231012_221210.jpg";
import image17 from "./pic-glry/20231012_221218.jpg";
import image18 from "./pic-glry/20231012_221237.jpg";
import image19 from "./pic-glry/20231012_221302.jpg";
import image20 from "./pic-glry/20231012_221338.jpg";
import image21 from "./pic-glry/20231012_221347.jpg";
import image22 from "./pic-glry/20231012_221400.jpg";
import image23 from "./pic-glry/20231012_221436.jpg";
import image24 from "./pic-glry/20231012_221517.jpg";
import image25 from "./pic-glry/20231012_221530.jpg";
import image26 from "./pic-glry/20231012_221540.jpg";
import image27 from "./pic-glry/20231012_221601.jpg";
import image28 from "./pic-glry/20231012_221612.jpg";
import image29 from "./pic-glry/20231012_221620.jpg";
import image30 from "./pic-glry/20231012_221740.jpg";
import image31 from "./pic-glry/20231012_221749.jpg";
import btcSvg from "./pic-glry/btc-svgs/bitcoin-btc-logo.png";
import img0001 from "./pic-glry/btc-parachute.jpeg";
import img0002 from "./pic-glry/btc-nodes.jpeg";
import img0003 from "./pic-glry/btc-bike.jpeg";
import img0004 from "./pic-glry/btc-bull.jpeg";
import img0005 from "./pic-glry/btc-time.jpeg";
import img0006 from "./pic-glry/btc-babe.jpeg";
import img0007 from "./pic-glry/btc-white.jpeg";
import img0008 from "./pic-glry/btc-stacks.jpeg";
import img0009 from "./pic-glry/btc-golden.jpeg";
import "./App.css";
import { useState } from "react";
import photos from "./photos";

// import { Helmet } from "react-helmet";

// const TITLE = "BTC Gallery";

function PhotoIndex() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [<img src={img0001} className="App-img4" alt="img4" />];
}

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  // const photos = [
  //   "/pic-glry/btc5.jpg",
  //   "/pic-glry/btc-golden.jpeg",
  //   "/pic-glry/btc-stacks.jpeg",
  //   '<img src={img0001} className="App-img4" alt="img4" />',
  //   '<img src={img0002} className="App-img4" alt="img4" />',
  //   '<img src={img0003} className="App-img4" alt="img4" />',
  // ];

  const handlePrevClick = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <div className="App">
      {/* <Helmet>
        <title>TITLE</title>
      </Helmet> */}

      <header className="App-header">
        <h2>
          Saylor's <img src={btcSvg} className="headerSvg" alt="btc-logo" />{" "}
          Scroll
        </h2>
      </header>
      <body>
        <button onClick={handlePrevClick}>Previous</button>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleNextClick}>Next</button>
        <p className="paragraph">
          BTC is digital gold, gold transited power to fiat money, which made
          money centralized, but gold is decentralized, so BTC is decentralized,
          the future money is decentralized, this is why BTC is the future.
        </p>

        {/* <div>
          <button onClick={handlePrevClick}>Previous</button>
          <img src={photos[currentPhotoIndex]} alt="Currentphoto" />
          <button onClick={handleNextClick}>Next</button>
        </div> */}

        <img src={img0001} className="App-img4" alt="img4" />

        <p className="paragraph">Rise and Shine</p>

        {/* <photos/> */}

        <img src={img0002} className="App-img4" alt="img4" />

        <p className="paragraph">Engineer a Better Future</p>

        <img src={img0003} className="App-img4" id="btc-bike" alt="img4" />

        <p for="btc-bike" className="paragraph">
          Ride or Die
        </p>

        <img src={img0004} className="App-img4" alt="img4" />

        <p className="paragraph">A new bull is coming to Wall Street</p>

        <img src={img0005} className="App-img4" alt="img4" />

        <p className="paragraph">Don't be late to Bitcoin</p>

        <img src={img0006} className="App-img4" alt="img4" />

        <p className="paragraph">Behold Bitcoin</p>

        <img src={img0007} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is Classic</p>

        <img src={img0008} className="App-img4" alt="img4" />

        <p className="paragraph">Stay humble and stack sats</p>

        <img src={img0009} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is Power</p>

        <img src={image123} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin for the kids</p>

        <img src={image124} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin U+20BF for the kids</p>

        <img src={image5} className="App-img4" alt="img4" />

        <p className="paragraph">It is Freedom</p>

        <img src={image6} className="App-img4" alt="img4" />

        <p className="paragraph">It is Hope</p>

        <img src={image7} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is Faster</p>

        <img src={image8} className="App-img4" alt="img4" />

        <p className="paragraph">Find Bitcoin</p>

        <img src={image9} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is Inevitable</p>

        {/* <img src={image10} className="App-img4" alt="img4" /> */}

        {/* <p className="paragraph">Grab a bag today</p> */}

        <img src={image11} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin upgrades the World</p>

        <img src={image12} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is the Ruler</p>

        <img src={image13} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin to Glory</p>

        <img src={image14} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin to a Future Bright</p>

        <img src={image15} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is Grace</p>

        <img src={image16} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin on the Brink</p>

        <img src={image17} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin for Eternity</p>

        <img src={image18} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin enriches Life</p>

        <img src={image19} className="App-img4" alt="img4" />

        <p className="paragraph">Bitcoin is the Jewel in the Crown</p>

        <img src={image20} className="App-img4" alt="img4" />

        <p className="paragraph">It is Power</p>

        <img src={image21} className="App-img4" alt="img4" />

        <p className="paragraph">It is the Future</p>

        <img src={image22} className="App-img4" alt="img4" />

        <p className="paragraph">You'll never walk Alone</p>

        <img src={image23} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image24} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image25} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image26} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image27} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image28} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image29} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image30} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image31} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image4} className="App-img4" alt="img4" />

        <p className="paragraph">Grab a bag today</p>

        <img src={image} className="App-img3" alt="img3" />

        <p className="paragraph">And put it in a safe to secure the future.</p>
        <img src={image2} className="App-img2" alt="img2" />
      </body>

      <footer className="reference">
        <p>
          Images source:{" "}
          <a
            className="App-link"
            href="https://twitter.com/saylor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>twitter.com/saylor</code>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
