/***********************************************************************************************************************************************************************
* File Name: VerifyEmailPage.jsx
* Type of Program: Frontend
* Description: A frontend page for landing page. 
* Module: Public
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { SignupForm } from "@/components/signup-form";
import { VerifyEmailForm } from "@/components/verify-email-form";
import { GalleryVerticalEnd } from "lucide-react"

function VerifyEmailPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="w-48">
              <img
                src="/philpro-white.png"
                alt="Image"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <VerifyEmailForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img
          src="https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgXNIPGdi7gNzt8EQrq5e2SbJv0d4mFTCGkRhP"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover rounded-3xl p-2"
        />
      </div>
    </div>
  )
}

export default VerifyEmailPage;
