import React, { Suspense } from "react";
import Language from "./comopnents/Language/Language";
import Content from "./comopnents/Content/Content";
import { useTranslation } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();
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
