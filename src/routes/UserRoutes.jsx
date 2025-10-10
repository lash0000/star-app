import SidebarLayout from '@/components/layout/SidebarLayout';
import DashboardPage from '@/modules/dashboard/DashboardPage';
import React from 'react'
import { Route } from 'react-router-dom';

const UserRoutes = () => [
  <Route path="/dashboard" element={<SidebarLayout />}>
    <Route index element={<DashboardPage />} />

  </Route>,
]

export default UserRoutes;
