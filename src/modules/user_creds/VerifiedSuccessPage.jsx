import { VerifiedSuccess } from "@/components/verified-success-form";

function VerifiedPage() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU')",
        }}
      />

      {/* For better card contrast just add bg-black/40 for overlay */}
      <div className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-md">
        <VerifiedSuccess />
      </div>
    </div>
  )
}

export default VerifiedPage;
