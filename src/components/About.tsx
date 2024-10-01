const About = ({
  setShowAbout,
}: {
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className=" pr-1 border rounded-2xl p-1 backdrop-blur border-customGreen w-1/2">
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

        <p>
          This is my photography blog where I deposit simple photos taken on my
          film camera. Nothing crazy, I created this because I wanted to display
          my photos somewhere and wanted to practice using react
        </p>
      </div>
    </div>
  );
};

export default About;
