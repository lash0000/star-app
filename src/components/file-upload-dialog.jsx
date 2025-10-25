import { useState } from "react"
import { Upload, X, CheckCheck } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function FileUploadDialog({ task, children, isDrawerMode = false, onClose }) {
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...droppedFiles])
  }

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...selectedFiles])
    }
  }

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    console.log("Submitted files:", files)
    setFiles([])

    // ✅ Close Drawer if provided
    if (onClose) onClose()
  }

  // Shared upload body
  const UploadBody = () => (
    <div className="space-y-4">
      {files.length === 0 ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
            : "border-gray-300 dark:border-gray-700"
            }`}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Upload an image here
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Upload a screenshot of your device.
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="file-input"
          />
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            Select image
          </Button>
        </div>
      ) : (
        <ScrollArea className="space-y-2 h-[100px]">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 xs:w-50 lg:w-64 truncate">
                  {file.name}
                </span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors flex-shrink-0"
              >
                <X className="size-4 text-gray-500" />
              </button>
            </div>
          ))}
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="file-input-add"
          />
        </ScrollArea>
      )}
    </div>
  )

  // 🟣 If drawer mode, skip AlertDialog
  if (isDrawerMode) {
    return (
      <div className="font-geist space-y-3 mt-4">
        <div className="flex gap-2 mb-2">
          <Badge
            variant="secondary"
            className="w-fit text-xs font-medium bg-purple-100 text-purple-700 border-purple-700 dark:bg-purple-600/20 dark:text-purple-600 dark:border-purple-600"
          >
            Onboarding
          </Badge>
          <Badge
            variant="secondary"
            className="w-fit text-xs font-medium bg-pink-100 text-pink-700 border-pink-700 dark:bg-pink-600/20 dark:text-pink-600 dark:border-pink-600"
          >
            Checklist
          </Badge>
        </div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm text-muted-foreground">{task.description}</p>
        <UploadBody />
        <div className="mt-6 gap-1.5 flex justify-end">
          <Button
            variant="outline"
            className=""
            onClick={() => document.getElementById("file-input-add")?.click()}
          >
            {`Add files ${files.length > 0 ? ` (${files.length})` : ""}`}
          </Button>
          <Button onClick={handleSubmit}>
            <CheckCheck className="mr-1 size-4" /> Submit
          </Button>
        </div>
      </div>
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="font-geist max-w-md">
        <AlertDialogHeader>
          <div className="flex gap-2 mb-2">
            <Badge
              variant="secondary"
              className="w-fit text-xs font-medium bg-purple-100 text-purple-700 border-purple-700 dark:bg-purple-600/20 dark:text-purple-600 dark:border-purple-600"
            >
              Onboarding
            </Badge>
            <Badge
              variant="secondary"
              className="w-fit text-xs font-medium bg-pink-100 text-pink-700 border-pink-700 dark:bg-pink-600/20 dark:text-pink-600 dark:border-pink-600"
            >
              Checklist
            </Badge>
          </div>
          <AlertDialogTitle className="text-xl">{task.title}</AlertDialogTitle>
          <AlertDialogDescription className="text-sm">{task.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <UploadBody />
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>
            <CheckCheck /> Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
