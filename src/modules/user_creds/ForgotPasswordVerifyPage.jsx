/***********************************************************************************************************************************************************************
* File Name: ForgotPasswordVerifyPage.jsx
* Type of Program: Frontend
* Description: Frontend page of Forgot Password for User. 
* Module: User Credentials
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { ForgotVerifyEmailForm } from "@/components/forgot-verify-email-form";

function ForgotPasswordVerifyPage() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgXNIPGdi7gNzt8EQrq5e2SbJv0d4mFTCGkRhP')",
        }}
      />
      {/* For better card contrast just add bg-black/40 for overlay */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 w-full max-w-md">
        <ForgotVerifyEmailForm />
      </div>
    </div>
  )
}

export default ForgotPasswordVerifyPage;
