import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function DashboardCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      console.log(width)
      if (width >= 2708) {
        setItemsPerView(3);
      } else if (width >= 1648) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const progressValue = (current / count) * 100;

  const testData = [
    {
      title: "Become a Sales Consultant",
      description:
        "A quick paragraph random content by the way ako ay isang batman!",
      image:
        "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
    },
    {
      title: "Economics 101",
      description: "Amazing colors painting the evening sky with warmth....",
      image:
        "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
    },
    {
      title: "Systems Integration and Architecture 101",
      description: "Exploring the peaks and valleys of nature's wonder....",
      image:
        "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
    },
    {
      title: "Art Appreciation",
      description: "The rhythmic dance of water against the shore....",
      image:
        "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
    },
    {
      title: "Understanding the Self",
      description: "Urban landscape glowing in the darkness of night....",
      image:
        "https://barangaypoblacionpateros.com/wp-content/uploads/2025/01/barngay.jpg",
    },
  ];

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {testData.map((item, index) => (
            <CarouselItem
              key={index}
              className={
                itemsPerView === 3 ? "basis-1/3" : itemsPerView === 2 ? "basis-1/2" : "basis-full"
              }
            >
              <Card className="border dark:hover:border-blue-500 transition-colors rounded-2xl py-0 gap-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full xs:h-40 sm:h-48 lg:h-64 2xl:h-48 object-cover"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 bg-white dark:bg-gray-900 border shadow-sm"
                  >
                    {item.badge || "Supplemental Training"}
                  </Badge>
                </div>
                <div className="bg-white dark:bg-gray-900 space-y-1.5 p-4">
                  <p className="text-sm text-muted-foreground">
                    Course | Self-paced
                  </p>
                  <h3 className="text-xl font-bold tracking-tighter leading-tight">
                    {item.title || "Becoming Sales Consultant"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed truncate">
                    {item.description ||
                      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy."}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation + Progress */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0 h-8 w-8 rounded-lg" />
            <CarouselNext className="static translate-y-0 h-8 w-8 rounded-lg" />
          </div>
          <div className="flex-1 max-w-24">
            <Progress value={progressValue} className="h-2" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
