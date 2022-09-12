import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
  const [load, setload] = useState(true)

  const language = localStorage.getItem('lan') == undefined ? "en" : localStorage.getItem('lan')
  if (language == "en") {
    Promise.all([
      import("./assets/main.scss"),
    ]).finally(()=>setload(false))
  } else {
    Promise.all([
      import("./assets/main_rtl.scss"),
    ]).finally(()=>setload(false))
  }

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
    {
      load?
      ''
      :<>
      <Helmet>
        <title>Deski - Saas & Software React Template</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://themeforest.net/user/ib-themes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deski: Creative Saas & Software React Template"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase, Digital marketing agency, Digital marketing company, Digital marketing services, sass, software company"
        />
        <meta
          name="description"
          content="Deski is a creative saas and software React template designed for saas and software Agency websites."
        />
        <meta name="description" content="Portfolio & Agency React Template" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
    }</>
    
  );
};

export default App;
