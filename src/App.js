import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Blogbody from "./components/blogbody";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes_list from "./routes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Layout>
          <Routes_list />
        </Layout>
      </BrowserRouter> */}
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
