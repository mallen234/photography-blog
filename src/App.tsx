import "./App.css";
import Image from "./components/Image";
import Nav from "./components/Nav";
import { allPhotos, Photos } from "./images/photos";

const App = ({ linkName, places }: { linkName: string; places: string[] }) => {
  let photos: Photos[] = allPhotos.sort((a, b) => 0.5 - Math.random());
  return (
    <>
      <Nav places={places} />
      <div className="flex flex-wrap w-screen">
        {photos
          .filter((photo) => photo.name.includes(linkName))
          .map((photo) => (
            <Image key={photo.url} source={photo.url} />
          ))}
      </div>
    </>
  );
};

export default App;
