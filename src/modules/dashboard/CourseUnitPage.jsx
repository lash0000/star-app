import { useState, useRef } from "react"
import { getStroke } from "perfect-freehand"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Pen, X, List, FileText } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Utility to convert stroke points into an SVG path
function getSvgPathFromStroke(stroke) {
  if (!stroke.length) return ""
  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length]
      acc.push(`${i === 0 ? "M" : "L"} ${x0.toFixed(2)} ${y0.toFixed(2)}`)
      return acc
    },
    []
  )
  return d.join(" ") + "Z"
}

export default function CourseUnitPage() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [lines, setLines] = useState([])
  const svgRef = useRef(null)

  function handlePointerDown(e) {
    if (!isDrawing) return
    const point = [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
    setLines([...lines, [point]])
  }

  function handlePointerMove(e) {
    if (!isDrawing) return
    if (e.buttons !== 1) return

    const point = [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
    setLines((prev) => {
      const lastLine = prev[prev.length - 1]
      const newLines = [...prev.slice(0, -1), [...lastLine, point]]
      return newLines
    })
  }

  function handlePointerUp() {
    // Stop drawing when released
  }

  function clearCanvas() {
    setLines([])
  }

  return (
    <div className="">
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
            <div>Becoming a Sales Consultant</div>
          </div>

          <div className="flex gap-2">
            {/* Toggle drawing mode */}
            <Button
              size="icon"
              variant={isDrawing ? "default" : "ghost"}
              onClick={() => setIsDrawing(!isDrawing)}
            >
              <Pen />
            </Button>

            {/* Clear strokes */}
            <Button size="icon" onClick={clearCanvas} title="Clear drawings">
              <X />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-start ">
        <div className="w-1/3 h-screen border-r">
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
            <TabsContent value="tab-1">
              <p className="p-4 text-center text-xs text-muted-foreground">
                Content for Tab 1
              </p>
            </TabsContent>
            <TabsContent value="tab-2">
              <p className="p-4 text-center text-xs text-muted-foreground">
                Content for Tab 2
              </p>
            </TabsContent>

          </Tabs>

        </div>
        {/* DRAWING AREA */}
        <div
          className={`relative w-4/5 h-screen bg-muted p-2 ${isDrawing ? "cursor-crosshair" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <svg
            ref={svgRef}
            className="absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {lines.map((points, i) => {
              const stroke = getStroke(points, {
                size: 4, // default stroke thickness
                thinning: 0.5,
                smoothing: 0.8,
                streamline: 0.5,
              })
              const pathData = getSvgPathFromStroke(stroke)
              return <path key={i} d={pathData} fill="black" />
            })}
          </svg>
          {/* 
             Main content starts

             Dynamic Blocks available: 

             1. <banner> - Requires Banner and Banner Title
             2. <title> - Only div
             3. <header> - Requires
          */}
          <div className="bg-background p-4 rounded-lg border space-y-4">
            <div id="banner" className="bg-primary text-white w-full h-[100px] flex items-center justify-start px-6">
              <h1 id="banner_title" className="text-2xl tracking-tighter font-bold">1.0.1 - Lesson Takeaways</h1>
            </div>
            <div id="dynamic-blocks" className="p-4">
              <div id="title" className="leading-tighter text-2xl font-medium tracking-tighter">
                1.0.1 Why Take This Course?
              </div>
              <div id="flexbox"></div>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}
