import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-5">
        <div
          className="hidden sm:flex items-center space-x-1 relative"
          style={{ left: "10%" }}
        >
          <div className="relative">
            <select className="block appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
              <option>Afterglow</option>
              <option>Sunset</option>
              <option>Dawn</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293L9 11.586l3.707-4.293a1 1 0 011.414 0l.293.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l.293-.293a1 1 0 011.414 0z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="block appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
              <option>Default</option>
              <option>Scenario 1</option>
              <option>Scenario 2</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293L9 11.586l3.707-4.293a1 1 0 011.414 0l.293.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l.293-.293a1 1 0 011.414 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-grow items-center space-x-4 justify-end mt-4 sm:mt-0">
        <div className="relative w-full sm:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-64 bg-gray-100 border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/a668/e417/34ff6709e23f91971c6c037ac01880b5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjAFpEoRC73Mi-EZ7~fnyq53EH0A6PQ6-rG0UM3S~D0d2~fviVe~gEeMa2bQi8xd8wJh-p6yuY71qIjljVWK0WR9lzs1PxtN4tL-IZROESap245dBKm6UXzwjjuoNc7i7oetMcM~pw02p1cg756kJONY-LtIYWECRFGfplr3iWg5Z4oG3WaMpmgJws03q1bB0zifa0XNi10f4Ncg0645agzAkHaiFju0CxSbaOiLPTFhGPEfNo8ouoPuHXLufRvNk6oMGGWnSUzrtNsd~PUCNQ0phlUWinVqb3OE5851eMBkfhYcqGczlS1dpfceIAgTGXqAkaGKqZxYDnjdgctVeQ__"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">Robert Fox</p>
            <p className="text-xs text-gray-500">Finance Manager</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
