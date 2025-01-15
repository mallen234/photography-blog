import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Image from "./components/Image";
import Nav from "./components/Nav";
import { allPhotos, Photos } from "./images/photos";
import { NavItem } from "./types/types";

const App = ({ linkName }: { linkName: string; places: NavItem[] }) => {
  let photos: Photos[] = allPhotos;
  const [showAbout, setShowAbout] = useState<boolean>(false);

  return (
    <>
      {showAbout ? <About setShowAbout={setShowAbout} /> : <></>}
      <Nav setShowAbout={setShowAbout} />
      <div className="flex flex-wrap w-screen bg-customBeige">
        {photos
          .filter((photo) => photo.name.includes(linkName))
          .map((photo) => (
            <Image key={photo.link} source={photo.link} />
          ))}
      </div>
    </>
  );
};

export default App;
