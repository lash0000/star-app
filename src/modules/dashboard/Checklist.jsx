import { useState, useEffect } from "react"
import {
  BookOpen,
  RefreshCw,
  CheckCheck,
  Search,
  Filter,
  Clock,
  ArrowRight,
  CornerDownLeft
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"

const tasks = [
  {
    id: "1",
    title: "Visit Philproperties Website",
    description:
      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    category: "Checklist",
    categoryColor: "blue",
    dueDate: "Sep 19, 2025",
    status: "todo",
  },
  {
    id: "2",
    title: "Become Sales Consultant",
    description:
      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    category: "Mandatory Training",
    categoryColor: "red",
    dueDate: "Sep 19, 2025",
    status: "todo",
  },
  {
    id: "3",
    title: "Real Estate Broker: Fundamentals",
    description:
      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    category: "Supplemental Training",
    categoryColor: "green",
    dueDate: "Sep 19, 2025",
    status: "todo",
  },
  {
    id: "4",
    title: "Property Management Basics",
    description:
      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    category: "Mandatory Training",
    categoryColor: "red",
    dueDate: "Sep 20, 2025",
    status: "pending",
  },
  {
    id: "5",
    title: "Client Communication Skills",
    description:
      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    category: "Supplemental Training",
    categoryColor: "green",
    dueDate: "Sep 21, 2025",
    status: "pending",
  },
  {
    id: "6",
    title: "Legal Compliance Training",
    description:
      "Learn from differences up to you will able to understand more deeply than knowledge and perceptions when we view our economy.",
    category: "Mandatory Training",
    categoryColor: "red",
    dueDate: "Sep 18, 2025",
    status: "completed",
  },
]

export default function Checklist() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("todo")
  const [openCommand, setOpenCommand] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpenCommand((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status)
  }

  const filterTasks = (taskList) => {
    if (!searchQuery) return taskList
    return taskList.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const todoTasks = getTasksByStatus("todo")
  const pendingTasks = getTasksByStatus("pending")
  const completedTasks = getTasksByStatus("completed")

  return (
    <section id="onboarding-checklist" className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tighter text-primary">
          Onboarding Checklist
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <TabsList className="xs:fixed xs:bottom-0 xs:left-1/2 xs:-translate-x-1/2 md:relative md:bottom-[unset] md:left-[unset] md:-translate-x-[unset] gap-1 bg-background border-t xs:rounded-none md:rounded-full xs:w-full md:w-[unset]">
              <TabsTrigger
                value="todo"
                className="xs:flex xs:flex-col md:flex-row group dark:data-[state=active]:text-blue-500 rounded-full md:data-[state=active]:shadow-sm"
              >
                <BookOpen
                  className="md:-ms-0.5 md:me-1.5 opacity-60 stroke-primary"
                  size={window.innerWidth < 768 ? 24 : 16}
                  aria-hidden="true"
                />
                To-do
                <Badge
                  className="xs:hidden md:block bg-primary dark:bg-blue-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                  variant="secondary"
                >
                  {todoTasks.length}
                </Badge>
              </TabsTrigger>

              <TabsTrigger
                value="pending"
                className="xs:flex xs:flex-col md:flex-row group dark:data-[state=active]:text-blue-500 rounded-full md:data-[state=active]:shadow-sm"
              >
                <RefreshCw
                  className="md:-ms-0.5 md:me-1.5 opacity-60 stroke-primary"
                  size={window.innerWidth < 768 ? 24 : 16}
                  aria-hidden="true"
                />
                Pending
                <Badge
                  className="xs:hidden md:block bg-primary dark:bg-blue-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                  variant="secondary"
                >
                  {pendingTasks.length}
                </Badge>
              </TabsTrigger>

              <TabsTrigger
                value="completed"
                className="xs:flex xs:flex-col md:flex-row group dark:data-[state=active]:text-blue-500 rounded-full md:data-[state=active]:shadow-sm"
              >
                <CheckCheck
                  className="md:-ms-0.5 md:me-1.5 opacity-60 "
                  size={window.innerWidth < 768 ? 24 : 16}
                  aria-hidden="true"
                />
                Completed
                <Badge
                  className="xs:hidden md:block bg-primary dark:bg-blue-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                  variant="secondary"
                >
                  {completedTasks.length}
                </Badge>
              </TabsTrigger>
            </TabsList>
            <div id="onboard-checklist" className="xs:mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:flex-initial w-full lg:w-80">
                  <button
                    onClick={() => setOpenCommand(true)}
                    className="h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground flex items-center justify-between hover:bg-accent transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="size-4" />
                      Search
                    </span>
                    <div className="xs:hidden lg:block">
                      <div className="flex gap-2">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          <span className="text-xs">Ctrl</span>
                        </kbd>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          <span className="text-xs">K</span>
                        </kbd>
                      </div>
                    </div>
                  </button>
                </div>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Filter className="size-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
            </div>
          </div>
          <TabsContent value="todo" className="mt-0 mb-16">
            <TaskGrid tasks={filterTasks(todoTasks)} />
          </TabsContent>
          <TabsContent value="pending" className="mt-0 mb-16">
            <TaskGrid tasks={filterTasks(pendingTasks)} />
          </TabsContent>
          <TabsContent value="completed" className="mt-0 mb-16">
            <TaskGrid tasks={filterTasks(completedTasks)} />
          </TabsContent>
        </Tabs>

        {typeof window !== "undefined" && window.innerWidth < 768 ? (
          <Drawer open={openCommand} onOpenChange={setOpenCommand}>
            <DrawerContent className="p-4">
              <DrawerHeader className="pb-2">
                <DrawerTitle>
                  Search for onboarding
                </DrawerTitle>
                <DrawerDescription className="text-sm text-muted-foreground">
                  All onboarding tasks will appear below.
                </DrawerDescription>
              </DrawerHeader>

              {/* Search Input */}
              <Input
                placeholder="Search onboarding tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-sm border border-input focus-visible:ring-2 focus-visible:ring-blue-500 text-sm"
              />

              <ScrollArea className="h-[200px]">
                {filterTasks(tasks).length > 0 ? (
                  <div className="space-y-1.5 mt-3">
                    {filterTasks(tasks).map((task) => (
                      <div
                        key={task.id}
                        className="hover:bg-muted transition-colors py-1.5"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <BookOpen className="size-4" />
                            <span className="font-medium xs:text-xs text-sm">{task.title}</span>
                            <Badge
                              variant="secondary"
                              className="w-fit mt-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-600/20 dark:text-blue-600 border-blue-700 xs:hidden lg:block"
                            >
                              {task.category}
                            </Badge>
                          </div>
                          {/*
                          <span className="text-sm text-muted-foreground">
                            Due: {task.dueDate}
                          </span>
                          */}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    No tasks found.
                  </p>
                )}
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        ) : (
          <CommandDialog
            open={openCommand}
            onOpenChange={setOpenCommand}
            className="border-4 border-slate-300 dark:border-blue-950"
          >
            <CommandInput placeholder="Search for onboarding..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Pages">
                <CommandItem className="font-medium">
                  <ArrowRight />
                  <span>Getting Started</span>
                </CommandItem>
                <CommandItem className="font-medium">
                  <ArrowRight />
                  <span>Configuration</span>
                </CommandItem>
                <CommandItem className="font-medium">
                  <ArrowRight />
                  <span>Learn the Basics</span>
                </CommandItem>
                <CommandItem className="font-medium">
                  <ArrowRight />
                  <span>Charts</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Get Started">
                <CommandItem className="font-medium">
                  <ArrowRight />
                  <span>Introduction</span>
                </CommandItem>
              </CommandGroup>
              <CommandItem className="font-medium">
                <CornerDownLeft />
                <span>Go to Page</span>
              </CommandItem>
            </CommandList>
          </CommandDialog>
        )}
      </div>
    </section>
  )
}

function TaskGrid({ tasks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

function TaskCard({ task }) {
  return (
    <Card className="hover:shadow-md hover:border-gray-300 transition-colors dark:hover:border-blue-500 py-0 border shadow-none p-2 rounded-xl">
      <CardContent className="space-y-3 p-2 border border-gray-100 dark:border-gray-700/20 rounded-xl">
        <Badge
          variant="secondary"
          className={`w-fit text-xs font-medium ${task.categoryColor === "pink"
            ? "bg-pink-100 text-pink-700 border-pink-700"
            : task.categoryColor === "green"
              ? "bg-green-100 text-green-700 border-green-700 dark:bg-green-700/20 dark:text-green-600 dark:border-green-600"
              : task.categoryColor === "red"
                ? "bg-red-100 text-red-700 border-red-700 dark:bg-red-600/20 dark:text-red-600 dark:border-red-600"
                : "bg-blue-100 text-blue-500 border-blue-500 dark:bg-blue-600/20 dark:text-blue-600 dark:border-blue-600"
            }`}
        >
          {task.category}
        </Badge>
        <h3 className="font-semibold text-lg leading-tight">{task.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{task.description}</p>
        <div className="flex items-center gap-2 text-sm pt-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="">
            Due Date:{" "}
            <span className="text-foreground font-medium">{task.dueDate}</span>
          </span>
        </div>

      </CardContent>
    </Card>
  )
}
