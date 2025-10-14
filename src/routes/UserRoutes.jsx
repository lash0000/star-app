/***********************************************************************************************************************************************************************
* File Name: UserRoutes.jsx
* Type of Program: Routing
* Description: A React router dom for user authenticated and protected page. 
* Module: User
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import SidebarLayout from '@/components/layout/SidebarLayout';
import Checklist from '@/modules/dashboard/Checklist';
import DashboardPage from '@/modules/dashboard/DashboardPage';
import React from 'react'
import { Route } from 'react-router-dom';

const UserRoutes = () => [
  <Route path="/dashboard" element={<SidebarLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="/dashboard/onboarding-checklist" element={<Checklist />} />
  </Route>,
]

export default UserRoutes;
