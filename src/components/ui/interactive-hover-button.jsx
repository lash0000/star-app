import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}) {
  // Split text and icons for consistent layout
  const childArray = React.Children.toArray(children)
  const hasIcon = childArray.length > 1

  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}>
      {/* Normal State */}
      <div className="flex items-center justify-start gap-2">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[300]" />
        <span className="inline-flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {childArray.map((child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))}
        </span>
      </div>

      {/* Hover State */}
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="inline-flex items-center gap-2">
          {childArray.map((child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))}
        </span>
        <ArrowRight className="size-4 shrink-0" />
      </div>
    </button>
  )
}
