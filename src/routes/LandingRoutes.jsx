/***********************************************************************************************************************************************************************
* File Name: LandingRoutes.jsx
* Type of Program: Routing
* Description: A React router dom for Landing page. 
* Module: Public User
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import NavbarLayout from '@/components/layout/NavbarLayout';
import LandingPage from '@/modules/public_page/LandingPage';
import ForgotPasswordPage from '@/modules/user_creds/ForgotPasswordPage';
import ForgotPasswordVerifyPage from '@/modules/user_creds/ForgotPasswordVerifyPage';
import LoginPage from '@/modules/user_creds/LoginPage';
import SignUpPage from '@/modules/user_creds/SignUpPage';
import VerifiedPage from '@/modules/user_creds/VerifiedSuccessPage';
import VerifyEmailPage from '@/modules/user_creds/VerifyEmailPage';

import React from 'react'
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

const LandingRoutes = () => [
  <Fragment>
    <Route path="/" element={<NavbarLayout />}>
      <Route index element={<LandingPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/verify" element={<VerifyEmailPage />} />
    <Route path="/verified" element={<VerifiedPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    <Route path="/forgot-password/verify" element={<ForgotPasswordVerifyPage />} />
  </Fragment>
]

export default LandingRoutes;
