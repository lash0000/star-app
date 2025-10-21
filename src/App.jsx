/***********************************************************************************************************************************************************************
* File Name: App.jsx
* Type of Program: Root Application
* Description: A standard root component of every React application. 
* Module: Main
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import UserRoutes from "./routes/UserRoutes";

const pageMetadata = {
  "/": {
    title: "On your own schedule, learning journey begins",
    description:
      "Still in development phase for available open online courses from Philproperties International Corporation.",
    keywords: "open online courses, philproperties, online courses, training, onboarding",
    ogTitle: "On your own schedule, learning journey begins",
    ogDescription: "Still in development phase for available open online courses from Philproperties International Corporation.",
    ogImage: "https://95306gu5u4.ufs.sh/f/uBRuoG2BEPFD7KSEgHPf2HyENZzXqhfcGpQsYtIMT9F5RWUC",
  },
  "/login": {
    title: "Login first! - Sales Training and Recruitment Online Course",
    description: "Log in to access Sales Training and Recruitment services.",
    keywords: "login, philproperties, training, onboarding",
    ogTitle: "Login first! - Sales Training and Recruitment Online Course",
    ogDescription: "Log in to access Sales Training and Recruitment services.",
    ogImage: "https://95306gu5u4.ufs.sh/f/uBRuoG2BEPFD7KSEgHPf2HyENZzXqhfcGpQsYtIMT9F5RWUC",
  },
  "/dashboard": {
    title: "Take a breath while embracing your learnings",
    description:
      "A dashboard page for client side; it contains available online courses.",
    keywords: "dashboard, open online courses, philproperties",
    ogTitle: "Take a breath while embracing your learnings",
    ogDescription:
      "A dashboard page for client side; it contains available online courses.",
    ogImage: "https://95306gu5u4.ufs.sh/f/uBRuoG2BEPFD7KSEgHPf2HyENZzXqhfcGpQsYtIMT9F5RWUC",
  },
};

function TitleUpdater() {
  const location = useLocation();
  const metadata = pageMetadata[location.pathname] || {
    title: "On your own schedule learning journey begins | Online courses available from Philproperties Corp.",
    description: "This is still in development phase. Come back soon.",
    keywords: "philproperties, sales-training, online courses, free courses, philpro",
    ogTitle: "On your own schedule learning journey begins | Online Courses available by Philproperties Corp.",
    ogDescription: "This is still in development phase. Come back soon.",
    ogImage: "https://95306gu5u4.ufs.sh/f/uBRuoG2BEPFD7KSEgHPf2HyENZzXqhfcGpQsYtIMT9F5RWUC",
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.ogTitle} />
      <meta property="og:description" content={metadata.ogDescription} />
      <meta property="og:image" content={metadata.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

function Layout() {
  return (
    <>
      <TitleUpdater />
      <main className="font-medium selection:bg-primary selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Routes>
          {LandingRoutes()}
          {UserRoutes()}
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;



