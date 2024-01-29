import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Blogbody from "./components/blogbody";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes_list from "./routes";
import Layout from "./Layout/Layout";
import Axios from "./components/axios";

function App() {
  return (
    <>
      {/* <Axios /> */}
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
