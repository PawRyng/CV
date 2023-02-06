import Main from "./main";
import Loading from "./Controllers/loading";
//bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import "bootstrap";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <HashRouter>
      {loading ? (
        <Main setloading={setLoading} />
      ) : (
        <Loading setloading={setLoading} />
      )}
    </HashRouter>
  );
}

export default App;
