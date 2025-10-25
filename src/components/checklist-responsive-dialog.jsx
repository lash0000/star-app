import { useState, useEffect } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { FileUploadDialog } from "@/components/file-upload-dialog"
import { NormalDialog } from "@/components/normal-dialog"

export function ResponsiveDialog({ task, children }) {
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  // Detect screen size once, and update on resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const DialogComponent =
    task.dialogType === "upload" ? FileUploadDialog : NormalDialog

  if (isMobile) {
    return (
      <>
        <div onClick={() => setOpen(true)}>{children}</div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="p-4 font-geist">
            {task.dialogType === "upload" ? (
              <DialogComponent task={task} isDrawerMode onClose={() => setOpen(false)} />
            ) : (
              <DialogComponent
                task={task}
                isDrawerMode
                onMarkComplete={() => setOpen(false)}
              />
            )}
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <DialogComponent
      task={task}
      onMarkComplete={() => console.log("Marked complete")}
    >
      {children}
    </DialogComponent>
  )
}
