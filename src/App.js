import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Blogbody from "./components/blogbody";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
