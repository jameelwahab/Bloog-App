import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Blogbody from "./components/blogbody";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes_list from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BrowserRouter>
        <Routes_list />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
