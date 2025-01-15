import "../App.css";
import { navItems } from "../const";
import useDetectScroll from "@smakss/react-scroll-direction";

const Nav = ({
  setShowAbout,
}: {
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { scrollDir } = useDetectScroll();
  return (
    <>
      <nav className="nav-header text-white ">
        <div className=" flex flex-row justify-start text-black pb-2">
          <ul className="flex flex-row justify-start gap-1">
            <li className=" pr-1 border rounded-2xl p-1 backdrop-blur border-customGreen">
              <button
                onClick={() => {
                  setShowAbout((val) => !val);
                }}
                className=" font-medium no-underline hover:text-white bg-transparent p-0 outline-none"
              >
                About
              </button>
            </li>
            <li className="pr-1 border rounded-2xl p-1 backdrop-blur border-customGreen ">
              <a
                className="backdrop-blur hover:text-white text-black"
                href="mailto:marcusallen23@hotmail.co.uk"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`mx-auto border  rounded-2xl border-customGreen backdrop-blur transition-opacity duration-150 ${
            scrollDir === "down" ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className="text-customGreen hover:text-white py-2 rounded-md text-sm font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
