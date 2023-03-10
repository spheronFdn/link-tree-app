import React from "react";
import { Helmet } from "react-helmet";

import LinkTree from "./components/LinkTree";

import "./App.css";
import config from "./config";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={config.favicon} />
        <meta name="description" content={config.description} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <title>Spheron Link Tree</title>
      </Helmet>
      <LinkTree />
    </div>
  );
}

export default App;
