import "./App.css";
import Image from "./components/Image";
import Nav from "./components/Nav";
import { icelandPhotos } from "./images/photos";

const App = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-wrap w-screen">
        {icelandPhotos.urls.map((photo) => (
          <Image source={photo} />
        ))}
      </div>
    </>
  );
};

export default App;
