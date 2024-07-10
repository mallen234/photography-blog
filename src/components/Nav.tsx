import "../App.css";
const Nav = () => {
  return (
    <>
      <nav className="nav-header text-white">
        <div className=" flex flex-row justify-start text-white pb-2">
          <ul className="flex flex-row justify-start gap-1">
            <li>
              <button className=" pr-1 border-1 rounded-2xl p-1 border-customGreen bg-transparent">
                About
              </button>
            </li>
            <li>
              <button className="p-1 border rounded-2xl border-customGreen bg-transparent">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className=" mx-auto border  rounded-2xl border-customGreen">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-col"></div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-white py-2 rounded-md text-sm font-medium"
                  >
                    Everything
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white  py-2 rounded-md text-sm font-medium"
                  >
                    Iceland
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white  py-2 rounded-md text-sm font-medium"
                  >
                    Manchester
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white  py-2 rounded-md text-sm font-medium"
                  >
                    Film
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-white hover:text-white block  py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-white block  py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-white block  py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-white block  py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
