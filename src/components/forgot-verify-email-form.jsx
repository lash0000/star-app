import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Key } from "lucide-react"

export function ForgotVerifyEmailForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold tracking-tighter">Verify your Email</CardTitle>
          <CardDescription>
            For forgot password process we sent OTP code to email@you.me
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              {/* Email Field */}
              <Field>
                <FieldLabel htmlFor="text">OTP Code (6 digits only)</FieldLabel>
                <Input
                  id="text"
                  type="text"
                  placeholder="000000"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 6)
                  }}
                />
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  <Key /> Verify
                </Button>
                <FieldDescription className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Sign in
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
