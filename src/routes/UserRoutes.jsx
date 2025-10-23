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
import CoursePage from '@/modules/dashboard/CoursePage';
import Courses from '@/modules/dashboard/Courses';
import CourseUnitPage from '@/modules/dashboard/CourseUnitPage';
import DashboardPage from '@/modules/dashboard/DashboardPage';
import React from 'react'
import { Route } from 'react-router-dom';

const UserRoutes = () => [
  <Route path="/dashboard" element={<SidebarLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="/dashboard/onboarding-checklist" element={<Checklist />} />
    <Route path="/dashboard/courses" element={<Courses />} />
    <Route path="/dashboard/course/:id" element={<CoursePage />} />
  </Route>,
  <Route path="/course/unit/:id" element={<CourseUnitPage />} />,
]

export default UserRoutes;
