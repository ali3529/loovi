import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Suspense } from "react";
// import trance_fa from "locales/fa/translation.json";
// import trance_en from "locales/en/translation.json";
// import "./assets/main.scss";



i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: localStorage.getItem('lan')==undefined?"en":localStorage.getItem('lan')     ,                        // language to use
    // resources: {
    //     en: {
    //         common: trance_en            // 'common' is our custom namespace
    //     },
    //     fa: {
    //         common: trance_fa
    //     },
    // },
});
ReactDOM.render(
  <Suspense fallback={false}>
      <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
  </Suspense>
    , document.getElementById("root"));
// document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
