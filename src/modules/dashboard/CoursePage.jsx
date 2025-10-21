import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Layers, Timer, BookText, CircleStar, ChevronsUpDown } from "lucide-react"
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
import { useState } from "react";

function CoursePage() {
  const [courseOverview, setCourseOverview] = useState(false);

  return (
    <section id="course-page">
      <div className="flex flex-col gap-4">
        <div className="bg-primary dark:bg-gray-800 text-white xs:p-8 selection:bg-blue-500">
          <div className="lg:container lg:mx-auto lg:py-4 lg:px-12 flex flex-col gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-white underline">
                  <BreadcrumbLink href="/" className="hover:text-blue-500">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-white underline">
                  <BreadcrumbLink href="/components" className="hover:text-blue-500">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-4xl tracking-tighter font-bold lg:max-w-xl">
              Becoming a Sales Consultant
            </div>
            <div className="text-[#C1B1FF] rounded-[0.4rem] border lg:py-1.5 lg:px-3 py-2 px-4 text-sm bg-[#211F4B] border-[#574699] lg:max-w-xl">
              <div className="flex items-center gap-4">
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
                  <Button className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 dark:text-white">
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
                  <div className="text-4xl tracking-tighter font-medium">
                    Becoming a Sales Consultant
                  </div>
                  <div className="w-full space-y-4">
                    <Collapsible
                      open={courseOverview}
                      onOpenChange={setCourseOverview}
                      className="bg-background p-2 shadow-lg rounded-lg"
                    >
                      <div className="flex items-center justify-between gap-4 px-4">
                        <h4 className="text-sm font-semibold">
                          @peduarte starred 3 repositories
                        </h4>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8">
                            <ChevronsUpDown />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <div className="rounded-md border px-4 py-2 font-mono text-sm">
                        @radix-ui/primitives
                      </div>
                      <CollapsibleContent className="flex flex-col gap-2">
                        <div className="rounded-md border px-4 py-2 font-mono text-sm">
                          @radix-ui/colors
                        </div>
                        <div className="rounded-md border px-4 py-2 font-mono text-sm">
                          @stitches/react
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
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
