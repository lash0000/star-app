"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Home } from "lucide-react"
import { Link } from "react-router-dom"

export function VerifiedSuccess({ className, ...props }) {

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-xl tracking-tighter font-bold">Email Verified Successfully</CardTitle>
          <CardDescription>Your email has been verified. You may now proceed and begin your learning journey with us.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/dashboard">
            <Button className="w-full cursor-pointer">
              <Home /> Continue to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
