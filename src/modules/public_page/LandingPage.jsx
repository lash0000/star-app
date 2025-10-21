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

import { Fragment, useState } from "react";
import { Badge } from "@/components/ui/badge"
import { Check, Megaphone, Sparkles, Send, BookOpen, CheckCheck, RefreshCw, Globe, Mail, Clipboard, GitCompare, Building2, MapPin, Phone, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

function LandingPage() {
  const [copied, setCopied] = useState("")

  const ContactData = [
    { id: 1, icon: Mail, label: "Email:", value: "info@philproperties.ph" },
    { id: 2, icon: Globe, label: "Website:", value: "philproperties.ph" },
  ]

  const properties = [
    {
      id: 1,
      name: "Luxury Downtown Condo",
      location: "123 Main Street, Downtown",
      price: "$850,000",
      type: "Residential",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,100 sq ft",
    },
    {
      id: 2,
      name: "Modern Office Space",
      location: "456 Business Ave, Financial District",
      price: "$1,200,000",
      type: "Commercial",
      sqft: "5,000 sq ft",
    },
    {
      id: 3,
      name: "Suburban Family Home",
      location: "789 Oak Lane, Westside",
      price: "$650,000",
      type: "Residential",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "3,200 sq ft",
    },
    {
      id: 4,
      name: "Beachfront Villa",
      location: "321 Coastal Drive, Seaside",
      price: "$2,500,000",
      type: "Luxury Residential",
      bedrooms: 5,
      bathrooms: 4,
      sqft: "4,800 sq ft",
    },
    {
      id: 5,
      name: "Retail Shopping Center",
      location: "654 Commerce Blvd, Shopping District",
      price: "$3,800,000",
      type: "Commercial",
      sqft: "15,000 sq ft",
    },
    {
      id: 6,
      name: "Mountain Retreat Cabin",
      location: "987 Pine Ridge, Mountain View",
      price: "$480,000",
      type: "Vacation Property",
      bedrooms: 2,
      bathrooms: 2,
      sqft: "1,600 sq ft",
    },
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
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="rounded-full">
              <BookOpen /> Online Courses
            </Badge>
            <Badge className="rounded-full">
              <Megaphone /> Sales
            </Badge>
            <Badge variant="outline" className="rounded-full">
              <GitCompare /> Alpha Testing
            </Badge>
          </div>
          <h1 className="xs:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-primary max-w-2xl md:text-center break-words">
            Fueling Growth, Elevate your performance
          </h1>
          <p className="text-muted-foreground text-xl">Access the application, Achieve the transformation.</p>
          <div className="flex gap-4">
            <Button size="lg" className="cursor-pointer dark:bg-(--primary-green) dark:hover:opacity-80">
              <Sparkles /> Start Learning
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer">
              <Send /> Explore
            </Button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="border xs:w-full lg:w-[1040px]">
          <div className="xs:hidden lg:block relative bg-[#9B5DE0]  w-full h-[480px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcggN4lGlIPcojb20WHEOIkxuly6JvSqsQZemMV')",
              }}
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white  rounded-full overflow-hidden">
              <Tabs defaultValue="tab-1" className="items-center">
                <TabsList className="gap-1 bg-muted">
                  <TabsTrigger
                    value="tab-1"
                    className="group dark:data-[state=active]:text-green-500 rounded-full data-[state=active]:shadow-none">
                    <BookOpen
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    To-do
                    <Badge
                      className="bg-primary dark:bg-green-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                      variant="secondary"
                    >3</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-2"
                    className="group dark:data-[state=active]:text-green-500 rounded-full data-[state=active]:shadow-none ">
                    <RefreshCw
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    Pending
                    <Badge
                      className="bg-primary dark:bg-green-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                      variant="secondary"
                    >8</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-3"
                    className="group dark:data-[state=active]:text-green-500 rounded-full data-[state=active]:shadow-none">
                    <CheckCheck
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    Completed
                    <Badge
                      className="bg-primary dark:bg-green-500 text-primary-foreground ms-2 min-w-5 -mr-1 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                      variant="secondary"
                    >20</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-muted rounded-tl-lg rounded-tr-lg p-2 pb-0 space-y-4 xs:w-[460px] lg:w-[540px]">
              <div className="border-t border-l border-r rounded-tl-lg rounded-tr-lg space-y-2 p-2">
                <div className="flex gap-2">
                  <Badge className="text-sm rounded-full px-4 py-1.5 bg-[#9b5de0]/20 dark:bg-green-500/20 text-[#9b5de0] dark:text-green-500">
                    Onboarding
                  </Badge>
                  <Badge className="text-sm rounded-full px-4 py-1.5 bg-[#9b5de0]/20 dark:bg-green-500/20 text-[#9b5de0] dark:text-green-500">
                    Checklist
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="font-bold tracking-tighter text-xl">Visit Philproperties Website</div>
                  <Link to="https://philproperties.ph" target="_blank" className="text-[#9b5de0] dark:text-green-500">
                    https://philproperties.ph/
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="p-12 flex flex-col xs:text-2xl lg:text-4xl font-bold tracking-tighter text-primary gap-8 hover:bg-muted dark:hover:bg-muted/20">
            <div>
              “The Sales Training and Recruitment (STAR) makes building a winning sales team simple. From hiring the right people to fast-tracking their skills, it combines smart recruitment, clear onboarding, and practical training to create confident, high-performing professionals.”
            </div>
            <div>
              With Philproperties, you’re assured of faster onboarding, stronger sales talent, and a career journey built for growth. Less turnover, more success all in one system.
            </div>
          </div>

          {/* For sales, why choose us? */}
          <div className="grid xs:grid-cols-1 lg:grid-cols-3 border-t">
            <div className="flex flex-col gap-4 xs:border-b lg:border-r p-12 hover:bg-muted dark:hover:bg-muted/20">
              <h1 className="text-primary font-bold tracking-tighter text-4xl">Hire Smarter</h1>
              <p className="text-muted-foreground">Find the right talent faster with a streamlined recruitment process.</p>
            </div>
            <div className="flex flex-col gap-4 xs:border-b lg:border-r p-12 hover:bg-muted dark:hover:bg-muted/20">
              <h1 className="text-primary font-bold tracking-tighter text-4xl">Train Better</h1>
              <p className="text-muted-foreground">Equip every recruit with clear onboarding, mandatory modules, and practical sales training.</p>
            </div>
            <div className="flex flex-col gap-4 p-12 xs:border-b hover:bg-muted dark:hover:bg-muted/20">
              <h1 className="text-primary font-bold tracking-tighter text-4xl">Grow</h1>
              <p className="text-muted-foreground">Build confident professionals, reduce turnover, and boost long-term sales performance.</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid xs:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-4 lg:border-r p-12 hover:bg-muted dark:hover:bg-muted/20">
              <div className="space-y-4">
                <h1 className="text-primary font-bold tracking-tighter text-4xl">Frequently Asked Questions</h1>
                <p className="text-muted-foreground">Here are useful questions.</p>
              </div>
              <div className="space-y-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <InteractiveHoverButton className="w-full xs:text-sm md:text-lg rounded-md">
                      Is Philproperties a real-estate firm?
                    </InteractiveHoverButton>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="sm:max-w-lg lg:max-w-2xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex items-center gap-2 text-2xl">
                        Is Philproperties a real-estate firm?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-left">
                        Philproperties specializes in residential, commercial, and luxury properties across the region. With
                        over 15 years of experience, we've helped thousands of clients find their dream properties.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <ScrollArea className="h-[400px] rounded-md border p-4">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            About Us
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Founded in 2009, Philproperties has grown to become one of the most trusted names in real estate.
                            Our team of experienced agents provides personalized service to help you buy, sell, or invest in
                            properties.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">Featured Properties</h3>
                          <div className="space-y-4">
                            {properties.map((property) => (
                              <div
                                key={property.id}
                                className="rounded-lg border bg-card p-4 space-y-2 hover:shadow-md transition-shadow"
                              >
                                <div className="flex items-start justify-between">
                                  <h4 className="font-semibold text-card-foreground">{property.name}</h4>
                                  <span className="text-sm font-bold text-primary">{property.price}</span>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{property.location}</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="font-medium text-foreground">{property.type}</span>
                                    <span>•</span>
                                    <span>{property.sqft}</span>
                                  </div>
                                  {property.bedrooms && (
                                    <div className="flex items-center gap-2">
                                      <span>
                                        {property.bedrooms} bed • {property.bathrooms} bath
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">Contact Information</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span>(555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="h-4 w-4" />
                              <span>info@philproperties.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                      <AlertDialogAction>View All</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <InteractiveHoverButton className="w-full rounded-md xs:text-sm md:text-lg ">
                  What this online course platform offers?
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full rounded-md xs:text-sm md:text-lg ">
                  Premium plan offers?
                </InteractiveHoverButton>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-12 hover:bg-muted dark:hover:bg-muted/20">
              <div className="space-y-4">
                <h1 className="text-primary font-bold tracking-tighter text-4xl">Contact Us</h1>
                <p className="text-muted-foreground">Find the right talent faster with a streamlined recruitment process.</p>
              </div>
              <div className="space-y-4">
                {ContactData.map(({ id, icon: Icon, label, value }) => (
                  <div
                    key={id}
                    className="flex items-center justify-between bg-primary dark:bg-muted rounded-md px-4 py-2 text-sm text-primary-foreground dark:text-white"
                  >
                    <div className="flex items-center flex-wrap gap-2">
                      <Icon className="size-4" />
                      {label && <span className="opacity-90">{label}</span>}
                      <span className="font-medium ">{value}</span>
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
          <div className="p-12 flex flex-col xs:text-4xl leading-tight border-t font-bold tracking-tighter text-primary gap-8 hover:bg-muted dark:hover:bg-muted/20">
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
