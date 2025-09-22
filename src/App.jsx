// import React, { useState, useEffect } from "react";
// import Routers from "./routers/Routers";
// import PreLoader from "./easeeSqueezyUser/components/loaders/PreLoader";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setLoading(false);
//     };

//     window.addEventListener("load", handleLoad);

//     return () => window.removeEventListener("load", handleLoad);
//   }, []);

//   return <div>{loading ? <PreLoader /> : <Routers />}</div>;
// };

// export default App;

import React, { useState, useEffect, Suspense } from "react";
import Routers from "./routers/Routers";
import PreLoader from "./easeeSqueezyUser/components/loaders/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PreLoader />
      ) : (
        <Suspense fallback={<PreLoader />}>
          <Routers />
        </Suspense>
      )}
      {/* <Routers /> */}
    </div>
  );
};

export default App;
