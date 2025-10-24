import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Layers, Timer, BookText, CircleStar, ChevronDown, Book } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"
import { Verified } from "lucide-react";

function CoursePage() {
  const [courseOverview, setCourseOverview] = useState(false);
  const [openUnits, setOpenUnits] = useState({});
  const [isHoverCardMobile, setIsHoverCardMobile] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (id) => {
    setOpenUnits((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const handleResize = () => setIsHoverCardMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testData = [
    {
      id: 1,
      unitTitle: "Unit 1",
      unitDescription: "Driving Customer Success and Business Growth",
      lessons: [
        "Bridging Products and Customers",
        "Driving Business Growth",
        "Providing Expert Guidance and Trust",
        "Quiz",
      ],
      overviewPoints: [
        "Difference between consulting and selling.",
        "Core responsibilities (customer needs analysis, solution matching, relationship building).",
        "Ethics and professionalism in sales.",
      ],
    },
    {
      id: 2,
      unitTitle: "Unit 2",
      unitDescription: "Understanding Customer Needs and Building Trust",
      lessons: [
        "Understanding Customer Behavior",
        "Building Rapport",
        "Handling Objections",
        "Quiz",
      ],
      overviewPoints: [
        "Learn customer behavior patterns.",
        "Develop skills for trust-based communication.",
        "Apply empathy in sales interactions.",
      ],
    },
  ];

  const badgesData = [
    {
      id: 1,
      image: "/badges/philpro-1.png",
      title: "Best in Sales",
      description:
        "Awarded to learners who demonstrate exceptional understanding of consultative sales strategies and customer engagement.",
      hasHover: true,
      fallback: "PH",
    },
    {
      id: 2,
      image: "/badges/philpro-2.png",
      title: "Best in Sales",
      description:
        "Awarded to learners who demonstrate exceptional understanding of consultative sales strategies and customer engagement.",
      hasHover: true,
    },
    {
      id: 3,
      image: "/badges/philpro-3.png",
      title: "Best in Sales",
      description:
        "Awarded to learners who demonstrate exceptional understanding of consultative sales strategies and customer engagement.",
      hasHover: true,
    },
  ];

  return (
    <section id="course-page">
      <div className="flex flex-col gap-4">
        <div className="bg-primary dark:bg-gray-800 text-white xs:p-8 selection:bg-blue-500">
          <div className="lg:container lg:mx-auto lg:py-4 lg:px-12 flex flex-col gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-white underline">
                  <BreadcrumbLink href="/" className="hover:text-blue-500">Browse</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-white underline">
                  <BreadcrumbLink href="/components" className="hover:text-blue-500">Courses</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Becoming a Sales Consultant</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-4xl tracking-tighter font-bold lg:max-w-xl">
              Becoming a Sales Consultant
            </div>
            <div className="text-[#C1B1FF] rounded-[0.4rem] border lg:py-1.5 lg:px-3 py-2 px-4 text-sm bg-[#211F4B] border-[#574699] lg:max-w-xl">
              <div className="flex items-center flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Layers className="size-4" /> Free
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="size-4" /> 2 Hours
                </div>
                <div className="flex items-center gap-2">
                  <BookText className="size-4" /> Free
                </div>
                <div className="flex items-center gap-2">
                  <CircleStar className="size-4" /> Achievements available
                </div>
              </div>
            </div>
            <div className="w-full flex items-start justify-between xs:flex-col lg:flex-row gap-8">
              <div className="flex flex-col gap-4">
                <div className="space-y-4">
                  <h1 className="font-medium tracking-tighter text-2xl">Overview</h1>
                  <p>
                    Becoming a Sales Consultant equips individuals with the skills to understand customer needs, build trust, and provide tailored solutions. It prepares learners to apply consultative selling techniques that drive stronger relationships and long-term business growth.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-medium tracking-tighter text-2xl">Roles</h1>
                  <p>
                    Sales Consultant
                  </p>
                </div>
                <div className="xs:hidden lg:block">
                  <Button
                    onClick={() => navigate("/course/unit/1234567890")}
                    className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 dark:text-white">
                    Start learning
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="space-y-4">
                  <h1 className="font-medium tracking-tighter text-2xl">Learning Objectives</h1>
                  <p>
                    To develop essential consultative selling skills such as active listening, communication, and solution matching. Learners will also gain the ability to build long-term customer relationships and contribute to business growth through trust and expertise.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-medium tracking-tighter text-2xl">Prerequisuite</h1>
                  <p>
                    NA
                  </p>
                </div>
              </div>
              <Button className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 xs:block lg:hidden">
                Start learning
              </Button>
            </div>
          </div>
        </div>
        <div className="xs:p-8">
          <div className="lg:container lg:mx-auto lg:py-4 lg:px-12 flex flex-col gap-4">
            <Tabs defaultValue="course-content" className="">
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="course-content"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  Course Content
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  Achievements
                </TabsTrigger>
              </TabsList>
              <TabsContent value="course-content">
                <div className="flex items-start flex-col gap-4 py-6">
                  <h1 className="font-medium tracking-tighter text-2xl">Becoming a Sales Consultant</h1>
                  <div className="w-full space-y-4">
                    {testData.map((unit) => (
                      <Collapsible
                        key={unit.id}
                        open={openUnits[unit.id] || false}
                        onOpenChange={() => handleToggle(unit.id)}
                        className="bg-background p-5 shadow-lg rounded-lg"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2 font-medium xs:text-sm md:text-base">
                              <Book className="size-4" />
                              <span className="font-bold">{unit.unitTitle}</span>
                            </div>
                          </div>
                          <h1 className="font-medium">{unit.unitDescription}</h1>
                        </div>

                        <div className="w-full flex justify-between items-center pt-4 xs:text-sm md:text-base">
                          <div className="flex items-center gap-2 text-muted-foreground xs:text-sm md:text-base">
                            <Layers className="size-4" /> {unit.lessons.length} Lessons
                          </div>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost">
                              {openUnits[unit.id] ? "See less" : "See more"}{" "}
                              <ChevronDown
                                className={`transition-transform ${openUnits[unit.id] ? "rotate-180" : ""
                                  }`}
                              />
                            </Button>
                          </CollapsibleTrigger>
                        </div>

                        <CollapsibleContent className="pt-2 flex flex-col gap-2">
                          <div className="xs:text-sm md:text-base text-muted-foreground">
                            <span>After completing the unit, you will be able to:</span>
                            <ul className="list-disc pl-4 pt-1.5">
                              {unit.overviewPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col gap-4 mt-1.5">
                            {unit.lessons.map((lesson, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <Checkbox id={`lesson-${unit.id}-${index}`} />
                                <Label
                                  htmlFor={`lesson-${unit.id}-${index}`}
                                  className="xs:text-sm md:text-base text-primary"
                                >
                                  {lesson}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                  <div className="flex items-start flex-col w-full gap-4 py-6">
                    <h1 className="font-medium tracking-tighter text-2xl">Badges</h1>
                    <div id="badge-container" className="lg:grid lg:grid-cols-8 xs:w-full lg:w-[unset] lg:gap-2 xs:space-y-2 lg:space-y-0">
                      {badgesData.map((badge) => (
                        <div
                          key={badge.id}
                          className="bg-background shadow-md p-1.5 border rounded-lg"
                        >
                          {badge.hasHover ? (
                            <HoverCard
                              open={isHoverCardMobile ? false : undefined}
                            >
                              <HoverCardTrigger asChild>
                                <div className="xs:flex xs:items-center xs:gap-2 lg:gap-0 lg:block lg:items-[unset]">
                                  <div className="xs:size-12 lg:size-[unset]">
                                    <img
                                      src={badge.image}
                                      alt={badge.title}
                                      className="rounded-lg cursor-pointer"
                                    />
                                  </div>
                                  <div className="lg:hidden">
                                    <div className="flex flex-col gap-1.5 text-sm">
                                      <h1>{badge.title}</h1>
                                      <p className="text-muted-foreground">
                                        Eve, Psycho and Bluebeard
                                      </p>
                                    </div>
                                  </div>
                                </div>


                              </HoverCardTrigger>
                              <HoverCardContent
                                className="w-80 font-geist space-y-1.5"
                                side="right"
                                align="end"
                              >
                                <div className="flex items-center gap-2">
                                  <Avatar className="size-6">
                                    <AvatarImage src={badge.image} />
                                    <AvatarFallback>{badge.fallback}</AvatarFallback>
                                  </Avatar>
                                  <span className="font-medium">{badge.title}</span>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                  {badge.description}
                                </p>
                                <div className="flex items-center text-blue-500 gap-2">
                                  <Verified className="size-4" />
                                  <span className="text-sm font-medium">Verified by Philproperties</span>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          ) : (
                            <img src={badge.image} alt={badge.title} className="rounded-lg" />
                          )}
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="achievements">
                Content for Tab 2
              </TabsContent>
            </Tabs>
          </div>
        </div>


      </div>
    </section >
  )
}

export default CoursePage;
