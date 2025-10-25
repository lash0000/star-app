import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
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


export function NormalDialog({
  task,
  children,
  onMarkComplete,
  isDrawerMode = false,
  onClose,
}) {
  const handleMarkComplete = () => {
    // call the external handler if provided
    if (onMarkComplete) onMarkComplete()

    // also close drawer if onClose provided
    if (onClose) onClose()
  }

  // Shared content used in both AlertDialog and Drawer (inline)
  const ContentBody = (
    <>
      <div className="flex gap-2 mb-2">
        <Badge
          variant="secondary"
          className="w-fit text-xs font-medium bg-purple-100 text-purple-700 border-purple-700 dark:bg-purple-600/20 dark:text-purple-600 dark:border-purple-600"
        >
          Onboarding
        </Badge>
        <Badge
          variant="secondary"
          className={`w-fit text-xs font-medium ${task.categoryColor === "pink"
            ? "bg-pink-100 text-pink-700 border-pink-700 dark:bg-pink-600/20 dark:text-pink-600 dark:border-pink-600"
            : task.categoryColor === "green"
              ? "bg-green-100 text-green-700 border-green-700 dark:bg-green-700/20 dark:text-green-600 dark:border-green-600"
              : task.categoryColor === "red"
                ? "bg-red-100 text-red-700 border-red-700 dark:bg-red-600/20 dark:text-red-600 dark:border-red-600"
                : "bg-blue-100 text-blue-500 border-blue-500 dark:bg-blue-600/20 dark:text-blue-600 dark:border-blue-600"
            }`}
        >
          {task.category}
        </Badge>
      </div>

      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
    </>
  )

  // If rendering inside a Drawer (mobile inline), show content directly
  if (isDrawerMode) {
    return (
      <div className="font-geist mt-4 space-y-4">
        {ContentBody}

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => (onClose ? onClose() : null)}>
            Close
          </Button>
          <Button onClick={handleMarkComplete} className="gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Mark as complete
          </Button>
        </div>
      </div>
    )
  }

  // Default: desktop AlertDialog modal (preserves original behavior)
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
              className={`w-fit text-xs font-medium ${task.categoryColor === "pink"
                ? "bg-pink-100 text-pink-700 border-pink-700 dark:bg-pink-600/20 dark:text-pink-600 dark:border-pink-600"
                : task.categoryColor === "green"
                  ? "bg-green-100 text-green-700 border-green-700 dark:bg-green-700/20 dark:text-green-600 dark:border-green-600"
                  : task.categoryColor === "red"
                    ? "bg-red-100 text-red-700 border-red-700 dark:bg-red-600/20 dark:text-red-600 dark:border-red-600"
                    : "bg-blue-100 text-blue-500 border-blue-500 dark:bg-blue-600/20 dark:text-blue-600 dark:border-blue-600"
                }`}
            >
              {task.category}
            </Badge>
          </div>
          <AlertDialogTitle className="text-xl">{task.title}</AlertDialogTitle>
          <AlertDialogDescription className="text-sm">
            {task.description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction onClick={handleMarkComplete} className="gap-2">
            <CheckCircle2 className="size-4" />
            Mark as complete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
