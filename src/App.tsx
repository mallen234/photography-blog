import "./App.css";
import Image from "./components/Image";
import Nav from "./components/Nav";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Nav />
      {/* <Title /> */}

      <div className="flex flex-wrap w-screen">
        <Image source="/photos/misty_hill_tiny_house.jpeg" />
        <Image source="/photos/open_plane.jpeg" />
        <Image source="/photos/glacier.jpeg" />
        <Image source="/photos/melting_ice.jpeg" />
        <Image source="/photos/twisty_road.jpeg" />
        <Image source="/photos/waterfall_side.jpeg" />
      </div>
    </>
  );
}

export default App;
