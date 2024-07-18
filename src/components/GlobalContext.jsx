import { useState, createContext, useContext } from "react";

const ChangeTheme = createContext();

export const useGlobalContext = () => {
  return useContext(ChangeTheme);
};

function GlobalContext({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("possum");

  function toggleTheme() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  function searchNewImages(query) {
    setSearchQuery(query);
  }

  return (
    <ChangeTheme.Provider
      value={{ isDarkMode, toggleTheme, searchQuery, searchNewImages }}>
      {children}
    </ChangeTheme.Provider>
  );
}

export default GlobalContext;
