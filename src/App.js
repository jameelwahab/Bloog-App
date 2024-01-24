import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Blogbody from "./components/blogbody";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes_list from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes_list />
      </BrowserRouter>

      {/* <Navbar />
      <Banner />
      <BrowserRouter>
        <Routes_list />
      </BrowserRouter>
      <Footer /> */}
    </>
  );
}

export default App;
