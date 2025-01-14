import { ABOUT_SECTION } from "./const";

const About = ({
  setShowAbout,
}: {
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className=" pr-1 border rounded-2xl p-1 backdrop-blur border-customGreen w-1/4">
        <div className="flex justify-between">
          <p></p>
          <p>About</p>
          <button
            className="p-0 bg-transparent text-customGreen"
            onClick={() => {
              setShowAbout((val) => !val);
            }}
          >
            &#10005;
          </button>
        </div>

        <p>{ABOUT_SECTION}</p>
      </div>
    </div>
  );
};

export default About;
