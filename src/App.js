// import Login from "./pages/Login";
import "../src/css/style.css";
import Home from "./pages/Home";
import Header from "../src/Components/common/Header";
import Loader from "./Components/common/Loader";
import Footer from "./Components/common/Footer";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loadermain");
    } else {
      document.body.classList.remove("loadermain");
    }
  }, [isLoading]);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
