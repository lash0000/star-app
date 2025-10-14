import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "../ui/badge";

export default function DashboardCarousel() {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const progressValue = (current / count) * 100

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            const testData = [
              {
                title: "What a lazy dog",
                description: "A quick paragraph random content by the way ako ay isang batman!",
                image: "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
              },
              {
                title: "Beautiful Sunset",
                description: "Amazing colors painting the evening sky with warmth....",
                image: "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
              },
              {
                title: "Mountain Adventure",
                description: "Exploring the peaks and valleys of nature's wonder....",
                image: "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",

              },
              {
                title: "Ocean Waves",
                description: "The rhythmic dance of water against the shore....",
                image: "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",

              },
              {
                title: "City Lights",
                description: "Urban landscape glowing in the darkness of night....",
                image: "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
              },
            ]

            const item = testData[index]

            return (
              <CarouselItem key={index}>
                <Card className="border rounded-2xl py-0 gap-0 overflow-hidden">
                  <div className="relative bg-red-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full xs:h-40 sm:h-48 lg:h-64 object-cover"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-3 left-3 bg-white border shadow-sm"
                    >
                      {item.badge || "Supplemental Training"}
                    </Badge>
                  </div>
                  <div className="bg-white space-y-1.5 p-4">
                    <p className="text-sm text-muted-foreground">Course | Self-paced</p>
                    <h3 className="text-xl font-bold tracking-tighter leading-tight">
                      {item.title || "Becoming Sales Consultant"}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description ||
                        "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy."}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Navigation and Progress Container */}
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0 h-8 w-8 rounded-lg" />
            <CarouselNext className="static translate-y-0 h-8 w-8 rounded-lg" />
          </div>

          {/* Progress Bar */}
          <div className="flex-1 max-w-24 ml-4">
            <Progress value={progressValue} className="h-2" />
          </div>
        </div>
      </Carousel>

    </div>
  )
}
