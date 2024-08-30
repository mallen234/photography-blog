import "./App.css";
import Image from "./components/Image";
import Nav from "./components/Nav";
import { allPhotos, Photos } from "./images/photos";

const App = ({ linkName, places }: { linkName: string; places: string[] }) => {
  let photos: Photos[] = allPhotos;
  return (
    <>
      <Nav places={places} />
      <div className="flex flex-wrap w-screen bg-customBeige">
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
