import "./App.css";
import Image from "./components/Image";
import Title from "./components/Title";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Title />

      <div className="flex flex-wrap w-screen">
        <Image source="/photos/misty_hill_tiny_house.jpeg" />
        <Image source="/photos/open_plane.jpeg" />
      </div>
    </>
  );
}

export default App;
