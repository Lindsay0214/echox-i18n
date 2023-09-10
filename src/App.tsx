import React, { Suspense } from "react";
import Language from "./comopnents/Language/Language";
import Content from "./comopnents/Content/Content";

function App() {

  return (
    <Suspense fallback={<p>Loading ...</p>}>
        <div className="wrapper">
            <Language />
            <Content />
        </div>
    </Suspense>
  );
}

export default App;
