import { SignupForm } from "@/components/signup-form";
import { GalleryVerticalEnd } from "lucide-react"

function SignUpPage() {
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
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img
          src="https://qby900ozue.ufs.sh/f/k3CYx7aMjR9SiGNvtfZ2v6haDLkQJcTtB7XOIlqjgoF3G1d0"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover rounded-3xl p-2"
        />
      </div>
    </div>
  )
}

export default SignUpPage;
