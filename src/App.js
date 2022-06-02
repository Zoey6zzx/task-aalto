import React from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Filters from "./components/filters/Filters";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container m-5">
        <div className="row">
          <Filters />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
