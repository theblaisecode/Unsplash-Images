import Form from "./components/Form/Form";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import { useGlobalContext } from "./components/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const { isDarkMode, toggleTheme, searchQuery, searchNewImages } =
    useGlobalContext();

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Form isDarkMode={isDarkMode} onSearch={searchNewImages} />
      <Gallery isDarkMode={isDarkMode} searchQuery={searchQuery} />
      <Footer isDarkMode={isDarkMode}/>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
