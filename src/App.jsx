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

import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LandingRoutes from './routes/LandingRoutes';
import UserRoutes from './routes/UserRoutes';

const pageTitles = {
  "/": "On your own schedule begins your learning journey | Philproperties",
  "/login": "Take the next step towards new learnings. Here at Philproperties",
};

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || "Sales Training and Recruitment by Philproperties";
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleUpdater />
      <main className="font-medium selection:bg-primary selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Routes>
          {LandingRoutes()}
          {UserRoutes()}
        </Routes>
      </main>
    </Router>
  );
}

export default App;

