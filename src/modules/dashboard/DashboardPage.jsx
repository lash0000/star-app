import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, Shield, ArrowRight, X, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Temporary loading simulation (2 seconds)
    const timer = setInterval(() => {
      setLoading(false);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <section
        id="dashboard-loading"
        className="flex items-center justify-center min-h-screen bg-muted"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <Loader2 className="animate-spin text-primary size-12" />
          <p className="text-sm text-muted-foreground tracking-tight">
            Loading Dashboard...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard-client">
      <div className="flex w-full justify-between flex-row gap-4">
        <div id="main-content" className="grid grid-cols-4 gap-4 place-items-end items-start w-full">
          <div id="announcements" className="col-span-2 gap-4 flex flex-col w-full">
            <h1 className="text-4xl tracking-tighter font-bold text-primary">Dashboard</h1>
            <div
              id="banner-announcement"
              className="relative bg-white pl-8 pt-8 pb-8 rounded-2xl shadow-sm max-w-4xl w-full overflow-hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
                aria-label="Close banner"
              >
                <X className="size-5" />
              </Button>

              <div className="flex items-center justify-between gap-8 pr-0">
                <div className="flex flex-col items-start gap-4 z-10">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    Study on the go
                  </span>
                  <h1 className="2xl:text-4xl lg:text-2xl font-bold text-primary leading-tight tracking-tighter">
                    Sharpen Your Skills with Real Estate Investing up to Sales 100%
                  </h1>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary font-medium transition-colors group"
                  >
                    Proceed
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Illustration */}
                <div className="hidden relative flex-shrink-0 w-96 -mb-24">
                  <img
                    src="/manypixels_diversity-1-88.png"
                    alt="Study on the go illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-xl p-2 border flex items-start flex-col">
            <div className="bg-primary flex flex-col gap-2 text-primary-foreground w-full rounded-lg p-4">
              <div className="w-full flex justify-between items-center">
                <h1 className="tracking-tighter text-xl">Compliance</h1>
                <Button>View All</Button>
              </div>
              <div className="w-full flex justify-between items-start mt-4">
                <div className="w-full flex flex-row justify-between gap-4">
                  <div className="gap-4 flex justify-center items-center ">
                    <div className="bg-white size-12 flex justify-center items-center rounded-full">
                      <Shield className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h1 className="2xl:text-xl lg:text-sm text-wrap">Marketing Strategy Fundamentals</h1>
                      <div className="inline-flex items-center">
                        <Book className="size-4 mr-2" />
                        <p className="text-sm">Real Estate Management</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 2xl:text-xl lg:text-sm">
                    <h1>Today, 11:59 PM</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 p-4 mt-2">
              <h1 className="2xl:text-4xl lg:text-2xl tracking-tighter font-bold text-primary">Your Stats</h1>
              <p className="text-muted-foreground">See your activities in the past weeks.</p>
            </div>

            <div className="flex flex-col gap-2 text-black w-full rounded-lg p-4">
              <div className="w-full flex justify-between items-center">
                <h1 className="tracking-tighter text-xl">Compliance</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
