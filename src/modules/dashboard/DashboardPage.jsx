import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, Shield, ArrowRight, X, Loader2, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import DashboardCarousel from "@/components/layout/DashboardCarousel";


function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const courses = [
    {
      id: 1,
      image: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU",
      badge: "Supplemental Training",
      type: "Course | Self-paced",
      title: "Becoming Sales Consultant",
      description:
        "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    },
    {
      id: 2,
      image: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU",
      badge: "Mandatory Training",
      type: "Course | Self-paced",
      title: "Advanced Marketing Strategies",
      description:
        "Master the art of digital marketing and learn how to create compelling campaigns that drive results and engage your target audience.",
    },
    {
      id: 3,
      image: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU",
      badge: "Professional Development",
      type: "Course | Instructor-led",
      title: "Leadership Excellence Program",
      description:
        "Develop essential leadership skills and learn how to inspire teams, make strategic decisions, and drive organizational success.",
    },
    {
      id: 4,
      image: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU",
      badge: "Technical Training",
      type: "Course | Self-paced",
      title: "Data Analytics Fundamentals",
      description:
        "Unlock the power of data with hands-on training in analytics tools and techniques to make data-driven business decisions.",
    },
    {
      id: 5,
      image: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU",
      badge: "Supplemental Training",
      type: "Course | Hybrid",
      title: "Customer Service Excellence",
      description:
        "Enhance your customer service skills and learn proven techniques to deliver exceptional experiences that build loyalty and satisfaction.",
    },
  ]

  const onboardingTasks = [
    {
      title: "Checklist",
      progress: 90,
      completed: 9,
      total: 10,
      description:
        "Complete all required onboarding checklist items including paperwork, equipment setup, and initial orientation.",
      dueDate: "Due in 2 days",
      status: "in-progress",
    },
    {
      title: "Mandatory Trainings",
      progress: 35,
      completed: 7,
      total: 20,
      description:
        "Complete all mandatory training modules including compliance, safety, security protocols, and company policies.",
      dueDate: "Due in 1 week",
      status: "in-progress",
    },
    {
      title: "Supplemental Trainings",
      progress: 75,
      completed: 15,
      total: 20,
      description:
        "Optional training modules to enhance your skills and knowledge in specific areas relevant to your role.",
      status: "in-progress",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section
        id="dashboard-loading"
        className="flex items-center justify-center min-h-screen"
      >
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-sm">
          <Progress value={progress} className="w-full h-2" />
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard-client">
      <div className="flex w-full justify-between flex-row gap-4">
        <div id="main-content" className="grid xs:grid-cols-1 lg:grid-cols-8 gap-8 place-items-end items-start w-full">
          <div id="announcements" className="lg:col-span-5 gap-4 flex flex-col w-full">
            <h1 className="text-2xl tracking-tighter font-bold text-primary">Dashboard</h1>
            <div
              id="banner-announcement"
              className="relative bg-white dark:bg-gray-700/40 border dark:hover:border-blue-500 rounded-2xl shadow-sm w-full overflow-hidden p-1 transition-colors"
            >
              <div className="border dark:border-gray-100/8 rounded-2xl p-3">
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
                    <span className="text-xs uppercase tracking-wider text-blue-800 dark:text-white font-medium">
                      Study on the go
                    </span>
                    <h1 className="lg:text-4xl sm:text-2xl font-bold text-primary leading-tight tracking-tighter break-words ">
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
            <div className="border bg-white dark:bg-gray-700/40 p-1 rounded-2xl">
              <h1 className="text-2xl tracking-tighter font-bold text-primary p-2">Available Courses</h1>
              <DashboardCarousel />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-700/40 shadow-sm w-full h-fit rounded-xl p-2 border flex items-start flex-col xs:hidden lg:block">
            <div className="bg-primary dark:bg-gray-900 flex flex-col w-full rounded-lg p-4 gap-2">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-lg tracking-tighter">Compliance (5 task)</h1>
                <Button className="bg-white text-black hover:bg-blue-700 hover:text-white">View All</Button>
              </div>
              <div className="dark:hover:bg-gray-700/30  rounded-lg transition-colors cursor-pointer select-none">
                <div className="flex items-center flex-row justify-between w-full">
                  <div className="flex items-center flex-row gap-2">
                    <div className="bg-white dark:bg-gray-700/80 h-fit p-1.5 rounded-full">
                      <Book className="size-4 text-blue-500" />
                    </div>
                    <div classname="flex flex-col line-clamp-2 h-fit">
                      <h1 className="text-[.95rem] text-white">Marketing Strategy</h1>
                      <p className="text-[.75rem] text-white">MSF101</p>
                    </div>
                  </div>
                  <p className="text-[.75rem] text-white">Today, 11:59 PM</p>
                </div>
              </div>
              <div className="dark:hover:bg-gray-700/30 rounded-lg transition-colors cursor-pointer select-none">
                <div className="flex items-center flex-row justify-between w-full">
                  <div className="flex items-center flex-row gap-2">
                    <div className="bg-white dark:bg-gray-700/80 h-fit p-1.5 rounded-full">
                      <Book className="size-4 text-blue-500" />
                    </div>
                    <div classname="flex flex-col line-clamp-2 h-fit">
                      <h1 className="text-[.95rem] text-white">Systems Architecture</h1>
                      <p className="text-[.75rem] text-white">SIA101</p>
                    </div>
                  </div>
                  <p className="text-[.75rem] text-white">Today, 11:59 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3">
              <h1 className="text-2xl tracking-tighter font-bold text-primary">Your Stats</h1>
              <p className="text-sm text-muted-foreground">See your activities in the past weeks.</p>
            </div>
            <div className="bg-slate-200/50 dark:bg-gray-900 border flex flex-col w-full rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h1 className="text-lg tracking-tighter">Completed Onboarding Tasks</h1>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                {onboardingTasks.map((task) => (
                  <HoverCard key={task.title} openDelay={200}>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">{task.title}</h3>
                          <span className="text-sm text-muted-foreground">
                            {task.completed}/{task.total}
                          </span>
                        </div>
                        <Progress value={task.progress} className="h-2 " indicatorClassName="bg-indigo-900" />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80" side="top" align="center" sideOffset={8}>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-sm">{task.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                          </div>
                          {task.status === "completed" && <CheckCircle2 className="size-5 text-green-600 flex-shrink-0" />}
                          {task.status === "in-progress" && <Clock className="size-5 text-blue-600 flex-shrink-0" />}
                          {task.status === "pending" && <AlertCircle className="size-5 text-amber-600 flex-shrink-0" />}
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-1.5" indicatorClassName="bg-indigo-900" />
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>
                              {task.completed} of {task.total} completed
                            </span>
                            {task.dueDate && <span className="text-amber-700 dark:text-blue-500 font-medium">{task.dueDate}</span>}
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div className="bg-slate-200/50 dark:bg-gray-900 border flex flex-col w-full rounded-lg p-4 mt-2">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-lg tracking-tighter">Latest Achievements</h1>
              </div>
              <div className="space-y-2">
                <div className="hover:bg-slate-200 dark:hover:bg-gray-700/30 rounded-lg transition-colors cursor-pointer select-none">
                  <div className="flex items-center flex-row justify-between w-full">
                    <div className="flex items-center flex-row gap-3">
                      <div className="bg-blue-300 dark:bg-gradient-to-b from-violet-600 to-violet-800 h-fit p-2 rounded-xl">
                        <Book className="size-6" />
                      </div>
                      <div classname="flex flex-col h-fit">
                        <p className="text-[.75rem] text-muted-foreground">Course</p>
                        <h1 className="text-[.95rem] line-clamp-2">Marketing Strategy Fundamentals</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hover:bg-slate-200 dark:hover:bg-gray-700/30 rounded-lg transition-colors cursor-pointer select-none">
                  <div className="flex items-center flex-row justify-between w-full">
                    <div className="flex items-center flex-row gap-3">
                      <div className="bg-blue-300 dark:bg-gradient-to-b from-violet-600 to-violet-800 h-fit p-2 rounded-xl">
                        <Book className="size-6" />
                      </div>
                      <div classname="flex flex-col line-clamp-2 h-fit">
                        <p className="text-[.75rem] text-muted-foreground">Course</p>
                        <h1 className="text-[.95rem] line-clamp-2">Marketing Strategy Fundamentals</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
