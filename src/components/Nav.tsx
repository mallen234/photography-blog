import "../App.css";
import { NavItem } from "../types/types";
import useDetectScroll from "@smakss/react-scroll-direction";

const Nav = ({ places }: { places: string[] }) => {
  const itemPlaces = places.map((place) => ({
    title: place,
    link: `/${place}`,
  }));
  const itemsObj: NavItem[] = [
    { title: "Everything", link: "/" },
    ...itemPlaces,
  ];
  const { scrollDir } = useDetectScroll();
  console.log(scrollDir);
  return (
    <>
      <nav className="nav-header text-white ">
        <div className=" flex flex-row justify-start text-white pb-2">
          <ul className="flex flex-row justify-start gap-1">
            <li>
              <button className=" pr-1 border-1 rounded-2xl p-1 border-customGreen  bg-transparent backdrop-blur">
                About
              </button>
            </li>
            <li>
              <button className="p-1 border rounded-2xl border-customGreen bg-transparent backdrop-blur">
                Contact
              </button>
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
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {itemsObj.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className="text-white hover:text-white py-2 rounded-md text-sm font-medium"
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
