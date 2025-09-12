import React, { useState, useEffect } from "react";
import Home from "./easeeSqueezyUser/pages/Home";
import Routers from "./routers/Routers";
import PreLoader from "./easeeSqueezyUser/components/loaders/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <div>{loading ? <PreLoader /> : <Routers />}</div>;
};

export default App;
