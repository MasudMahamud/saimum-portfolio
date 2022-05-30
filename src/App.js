import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="load">
          <HashLoader color={"#fb5200"} loading={loading} size={70} />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
