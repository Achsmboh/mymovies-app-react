import { ButtonPrimary, ButtonThirty } from "./Button";

import { BsBrightnessLowFill } from "react-icons/bs";
import { BsBrightnessLow } from "react-icons/bs";

import { Link } from "react-router-dom";
import { ThemeContext } from "Utils/context";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <div className="h-screen w-full overflow-auto bg-slate-300 dark:bg-slate-500">
      <nav className="sticky top-0 flex w-full flex-row items-center justify-between bg-slate-700 p-4 dark:bg-slate-900 ">
        <Link to="/">
          <h1 className="text-lg font-bold text-white">My Movie</h1>
        </Link>

        <div className="flex items-center justify-around">
          <Link to="/ListFavoriteMoviesPage">
            <ButtonPrimary label={"Favorit"} />
          </Link>

          <ButtonThirty label={isLight ? <BsBrightnessLowFill className="h-10 w-10" /> : <BsBrightnessLow className="h-10 w-10 text-white" />} onClick={() => setIsLight(!isLight)} />
        </div>
      </nav>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
