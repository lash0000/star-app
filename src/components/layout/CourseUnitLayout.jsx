import { useState } from "react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Outlet } from "react-router-dom"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"
import {
  Pen, X, List, FileText, ChevronDown, ChevronUp, CheckCircle2, CircleDot,
  Eraser, BrushCleaning
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "../ui/label"
import { Progress } from "@/components/ui/progress"
import { useNavigate } from "react-router-dom"

export default function CourseUnitLayout() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [clearTrigger, setClearTrigger] = useState(0)
  const navigate = useNavigate();
  const clearCanvas = () => setClearTrigger((prev) => prev + 1)

  return (
    <div className="flex flex-col h-screen">
      {/* ─────────────── HEADER ─────────────── */}
      <div className="w-full border-b py-4 px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="w-40">
              <img
                src="/philpro-white.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[40px]">
              <Separator orientation="vertical" />
            </div>
            <div className="font-medium">
              Becoming a Sales Consultant
            </div>
          </div>

          <div className="flex gap-2">
            {/* Toggle drawing mode */}
            <Button
              size="icon"
              variant={isDrawing ? "default" : "ghost"}
              onClick={() => setIsDrawing(!isDrawing)}
              title="Toggle drawing"
            >
              <Pen />
            </Button>

            {/* Clear strokes */}
            <Button size="icon" variant="ghost" onClick={clearCanvas} title="Clear drawings">
              <BrushCleaning />
            </Button>

            {/* 
              Close page 
              just add loading for good
            */}
            <Button size="icon" onClick={() => navigate("/dashboard/courses")}>
              <X />
            </Button>
          </div>
        </div>
      </div>

      {/* ─────────────── BODY ─────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <div className="w-1/4 h-full border-r overflow-y-auto">
          <Tabs defaultValue="tab-1" className="items-start">
            <TabsList className="w-full h-auto gap-2 rounded-none border-b bg-transparent px-0 py-2 text-foreground justify-start">
              <TabsTrigger
                value="tab-1"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-2 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent w-full"
              >
                <List className="size-4 mr-2" /> Course Outline
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-2 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent w-full"
              >
                <FileText className="size-4 mr-2" /> Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tab-1" className="w-full px-1.5">
              <Input type="text" placeholder="Search" className="w-full" />
              <Collapsible defaultOpen={true}>
                <div className="hover:bg-muted flex flex-col px-2 mt-2" id="course-introduction">
                  <CollapsibleTrigger className="">
                    <div className="w-full flex justify-between">
                      <Label htmlFor="">Course Outline</Label>
                      <Button size="icon" variant="ghost">
                        <ChevronDown />
                      </Button>
                    </div>
                    <div className="w-full flex justify-between items-center gap-4">
                      <Progress value={33} />
                      <Label className="text-muted-foreground text-sm" htmlFor="">33%</Label>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="px-2">
                  <div className="space-y-1.5 py-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <CheckCircle2 className="size-4 flex-shrink-0 text-green-600" />
                      <span>1.0.1 - Lesson Takeaways</span>
                    </Button>
                    <div className="space-y-1.5 ml-2">
                      <Button variant="ghost" className="w-full justify-start">
                        <CheckCircle2 className="size-4 flex-shrink-0 text-green-600" />
                        <span>1.0.2 - Lesson Takeaways</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <CheckCircle2 className="size-4 flex-shrink-0 text-green-600" />
                        <span>1.0.3 - Lesson Takeaways</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                        <CircleDot className="size-4 flex-shrink-0" />
                        <span>1.0.4 - Lesson Takeaways</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                        <CircleDot className="size-4 flex-shrink-0" />
                        <span>1.0.5 - Lesson Takeaways</span>
                      </Button>
                    </div>

                  </div>


                </CollapsibleContent>
              </Collapsible>
            </TabsContent>

            <TabsContent value="tab-2">
              <div className="p-4 text-sm text-muted-foreground">
                Content for Tab 2
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT MAIN DRAWING AREA */}
        <div className="flex-1 h-full overflow-hidden">
          <Outlet context={{ isDrawing, clearTrigger }} />
        </div>
      </div>
    </div>
  )
}
