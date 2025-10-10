import { VerifiedSuccess } from "@/components/verified-success-form";
import { ForgotPasswordForm } from "@/components/forgot-password-form";

function ForgotPasswordPage() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgXNIPGdi7gNzt8EQrq5e2SbJv0d4mFTCGkRhP')",
        }}
      />
      {/* For better card contrast just add bg-black/40 for overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full max-w-md">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPasswordPage;
