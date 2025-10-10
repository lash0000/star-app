/***********************************************************************************************************************************************************************
* File Name: LandingPage.jsx
* Type of Program: Frontend
* Description: A frontend page for landing page. 
* Module: Public
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { Fragment } from "react";
import { Badge } from "@/components/ui/badge"
import { Check, Megaphone, Sparkles, Send, BookOpen, CheckCheck, RefreshCw, Globe, Mail, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useState } from "react"
import { toast } from "sonner"

function LandingPage() {
  const [copied, setCopied] = useState("")

  const ContactData = [
    { id: 1, icon: Mail, label: "Email:", value: "info@philproperties.ph" },
    { id: 2, icon: Globe, label: "", value: "philproperties.ph" },
  ]

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(""), 3000)
  }

  return (
    <Fragment>
      <div className="lg:container lg:mx-auto flex xs:items-start md:items-center flex-col gap-8 pb-12">
        {/* Hero Section */}
        <div className="xs:px-8 mt-12 w-full xs:items-start md:items-center justify-center flex flex-col gap-4">
          <div className="flex gap-2">
            <Badge variant="outline" className="rounded-full">
              <BookOpen /> Online Courses
            </Badge>
            <Badge className="rounded-full">
              <Megaphone /> Sales
            </Badge>
          </div>
          <h1 className="xs:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-primary max-w-2xl md:text-center break-words">
            Fueling Growth, Elevate your performance
          </h1>
          <p className="text-muted-foreground text-xl">Access the application, Achieve the transformation.</p>
          <div className="flex gap-4">
            <Button size="lg" className="cursor-pointer">
              <Sparkles /> Start Learning
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer">
              <Send /> Explore
            </Button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="border xs:w-full lg:w-[1040px]">
          <div className="relative bg-[#9B5DE0] w-full h-[480px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcggN4lGlIPcojb20WHEOIkxuly6JvSqsQZemMV')",
              }}
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-full overflow-hidden">
              <Tabs defaultValue="tab-1" className="items-center">
                <TabsList className="gap-1 bg-transparent">
                  <TabsTrigger
                    value="tab-1"
                    className="group data-[state=active]:text-primary rounded-full data-[state=active]:shadow-none">
                    <BookOpen
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    To-do
                    <Badge
                      className="bg-primary text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50"
                      variant="secondary"
                    >3</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-2"
                    className="group data-[state=active]:text-primary rounded-full data-[state=active]:shadow-none">
                    <RefreshCw
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    Pending
                    <Badge
                      className="bg-primary text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50"
                      variant="secondary"
                    >8</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-3"
                    className="group data-[state=active]:text-primary rounded-full data-[state=active]:shadow-none">
                    <CheckCheck
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    Completed
                    <Badge
                      className="bg-primary text-primary-foreground ms-2 min-w-5 -mr-1 rounded-full transition-opacity group-data-[state=inactive]:opacity-50"
                      variant="secondary"
                    >20</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-lg rounded-tr-lg p-2 pb-0 space-y-4 xs:w-[460px] lg:w-[540px]">
              <div className="border-t border-l border-r rounded-tl-lg rounded-tr-lg space-y-2 p-2">
                <div className="flex gap-2">
                  <Badge className="text-sm rounded-full px-4 py-1.5 bg-[#9b5de0]/20 text-[#9b5de0]">
                    Onboarding
                  </Badge>
                  <Badge className="text-sm rounded-full px-4 py-1.5 bg-[#9b5de0]/20 text-[#9b5de0]">
                    Checklist
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="font-bold tracking-tighter text-xl">Visit Philproperties Website</div>
                  <Link to="https://philproperties.ph" target="_blank" className="text-[#9b5de0]">
                    https://philproperties.ph/
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="p-12 flex flex-col xs:text-2xl lg:text-4xl font-bold tracking-tighter text-primary gap-8 hover:bg-muted">
            <div>
              “The Sales Training and Recruitment (STAR) makes building a winning sales team simple. From hiring the right people to fast-tracking their skills, it combines smart recruitment, clear onboarding, and practical training to create confident, high-performing professionals.”
            </div>
            <div>
              With Philproperties, you’re assured of faster onboarding, stronger sales talent, and a career journey built for growth. Less turnover, more success all in one system.
            </div>
          </div>

          {/* For sales, why choose us? */}
          <div className="grid xs:grid-cols-1 lg:grid-cols-3 border-t">
            <div className="flex flex-col gap-4 xs:border-b lg:border-r p-12 hover:bg-muted">
              <h1 className="text-primary font-bold tracking-tighter text-4xl">Hire Smarter</h1>
              <p className="text-muted-foreground">Find the right talent faster with a streamlined recruitment process.</p>
            </div>
            <div className="flex flex-col gap-4 xs:border-b lg:border-r p-12 hover:bg-muted">
              <h1 className="text-primary font-bold tracking-tighter text-4xl">Train Better</h1>
              <p className="text-muted-foreground">Equip every recruit with clear onboarding, mandatory modules, and practical sales training.</p>
            </div>
            <div className="flex flex-col gap-4 p-12 xs:border-b hover:bg-muted">
              <h1 className="text-primary font-bold tracking-tighter text-4xl">Grow</h1>
              <p className="text-muted-foreground">Build confident professionals, reduce turnover, and boost long-term sales performance.</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid xs:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-4 lg:border-r p-12 hover:bg-muted">
              <div className="space-y-4">
                <h1 className="text-primary font-bold tracking-tighter text-4xl">Frequently Asked Questions</h1>
                <p className="text-muted-foreground">Here are useful questions.</p>
              </div>
              <div className="space-y-4">
                <InteractiveHoverButton className="w-full rounded-md">
                  Is Philproperties a real-estate firm?
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full rounded-md">
                  What this online course platform offers?
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full rounded-md">
                  Premium plan offers?
                </InteractiveHoverButton>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-12 hover:bg-muted">
              <div className="space-y-4">
                <h1 className="text-primary font-bold tracking-tighter text-4xl">Contact Us</h1>
                <p className="text-muted-foreground">Find the right talent faster with a streamlined recruitment process.</p>
              </div>
              <div className="space-y-4">
                {ContactData.map(({ id, icon: Icon, label, value }) => (
                  <div
                    key={id}
                    className="flex items-center justify-between bg-primary rounded-md px-4 py-2 text-sm text-primary-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-white" />
                      {label && <span className="opacity-90">{label}</span>}
                      <span className="font-medium">{value}</span>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(value) + toast.success("Copied text successfully!")}
                    >
                      {copied === value ? (
                        <Check className="size-4" />
                      ) : (
                        <Clipboard className="size-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Remarks */}
          <div className="p-12 flex flex-col xs:text-4xl leading-tight border-t font-bold tracking-tighter text-primary gap-8 hover:bg-muted">
            <div>
              Ready to supercharge? {<br />} Start by leveraging your limits.
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default LandingPage;
