/***********************************************************************************************************************************************************************
* File Name: verify-email-form.jsx
* Type of Program: Frontend Layout
* Description: Frontend layout for sign up page. 
* Module: User Credentials
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Link } from "react-router-dom"
import { useState } from "react"

export function VerifyEmailForm({
  className,
  ...props
}) {
  const [otp, setOtp] = useState("")

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold tracking-tighter">Verify your email.</h1>
          <p className="text-muted-foreground text-sm text-balance">
            We sent you OTP code, for you to begin.
          </p>
        </div>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="text">OTP Code (6-digits only)</FieldLabel>
          <Input id="otp"
            type="text"
            value={otp}
            placeholder="000000"
            required
            onInput={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 6)
              setOtp(digits)
            }}
          />
        </Field>
        <div className="space-y-3">
          <Field>
            <Link to={otp.length === 6 ? "/verified" : "#"}>
              <Button
                type="submit"
                className="w-full"
                disabled={otp.length !== 6}
              >
                Proceed
              </Button>
            </Link>
          </Field>
          <Field>
            <Dialog>
              <DialogTrigger>
                <Button type="submit" variant="outline" className="w-full">
                  <Send /> Resend
                </Button>

              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>One Time Password Sent</DialogTitle>
                  <DialogDescription>
                    We sent you OTP code for verification of your email.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>

                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Field>
        </div>
      </FieldGroup>
    </form>
  );
}
