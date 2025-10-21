import { useState, useEffect } from "react"
import {
  BookOpen,
  RefreshCw,
  CheckCheck,
  Search,
  Filter,
  Clock,
  ArrowRight,
  CornerDownLeft,
  BookText,
  Coins
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/rounded-tabs"
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

const tasks = [
  {
    id: "1",
    title: "Becoming a Sales Consultant",
    description:
      "Understand the core principles of property ownership, sales, and investment opportunities in the Philippine real estate market.",
    category: "Free",
    categoryColor: "green",
    dueDate: "Oct 25, 2025",
    status: "todo",
  },
  {
    id: "2",
    title: "Sales Mastery Program",
    description:
      "Enhance your negotiation, presentation, and closing skills with practical sales techniques tailored for agents.",
    category: "Free",
    categoryColor: "green",
    dueDate: "Oct 30, 2025",
    status: "todo",
  },
  {
    id: "3",
    title: "Digital Marketing for Real Estate",
    description:
      "Learn social media campaigns, SEO, and online branding to boost your presence and attract more property leads.",
    category: "Subscription",
    categoryColor: "red",
    dueDate: "Nov 5, 2025",
    status: "pending",
  },
  {
    id: "4",
    title: "Property Laws and Compliance",
    description:
      "Stay updated on property taxation, local ordinances, and legal compliance requirements for real estate professionals.",
    category: "Subscription",
    categoryColor: "red",
    dueDate: "Nov 10, 2025",
    status: "pending",
  },
  {
    id: "5",
    title: "Leadership and Team Management",
    description:
      "Develop effective leadership habits and strategies to manage sales teams and motivate new agents for performance success.",
    category: "Free",
    categoryColor: "green",
    dueDate: "Nov 15, 2025",
    status: "completed",
  },
  {
    id: "6",
    title: "Market Trends and Analytics",
    description:
      "Analyze real estate data and identify profitable investment patterns through trend evaluation and forecasting.",
    category: "Free",
    categoryColor: "green",
    dueDate: "Nov 20, 2025",
    status: "todo",
  },
  {
    id: "7",
    title: "Ethics and Professional Conduct",
    description:
      "Build a strong professional reputation through transparent practices, ethical decision-making, and client trust.",
    category: "Subscription",
    categoryColor: "red",
    dueDate: "Nov 25, 2025",
    status: "completed",
  },
  {
    id: "8",
    title: "Property Management Essentials",
    description:
      "Learn to manage residential and commercial properties, focusing on tenant relations, maintenance, and reporting.",
    category: "Subscription",
    categoryColor: "red",
    dueDate: "Dec 1, 2025",
    status: "pending",
  },
  {
    id: "9",
    title: "Real Estate Brokerage Operations",
    description:
      "Understand brokerage licensing, documentation, and operations essential to run a compliant real estate business.",
    category: "Free",
    categoryColor: "green",
    dueDate: "Dec 5, 2025",
    status: "todo",
  },
  {
    id: "10",
    title: "Community Engagement and Networking",
    description:
      "Build and strengthen your network through local community projects, events, and client relationship activities.",
    category: "Free",
    categoryColor: "green",
    dueDate: "Dec 10, 2025",
    status: "todo",
  },
]

const ITEMS_PER_PAGE = 5;

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("todo")
  const [openCommand, setOpenCommand] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [pagination, setPagination] = useState({
    todo: 1,
    pending: 1,
    completed: 1,
  })

  const getPaginatedTasks = (taskList) => {
    const filtered = filterTasks(taskList)
    const startIndex = (pagination[activeTab] - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return {
      items: filtered.slice(startIndex, endIndex),
      total: filtered.length,
      totalPages: Math.ceil(filtered.length / ITEMS_PER_PAGE),
    }
  }

  const handlePageChange = (page) => {
    setPagination((prev) => ({
      ...prev,
      [activeTab]: page,
    }))
  }

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent.toLowerCase()
      const isSafariDetected =
        ua.includes("safari") && !ua.includes("chrome") && !ua.includes("android")
      setIsSafari(isSafariDetected)
    }

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

  const todoPaginated = getPaginatedTasks(todoTasks)
  const pendingPaginated = getPaginatedTasks(pendingTasks)
  const completedPaginated = getPaginatedTasks(completedTasks)

  return (
    <section id="onboarding-checklist" className="w-full lg:max-w-7xl lg:mx-auto xs:p-4 lg:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tighter text-primary">
            Courses
          </h1>
          <p className="text-muted-foreground">
            Structured courses for every step of your journey
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <TabsList className="xs:fixed xs:bottom-0 xs:left-1/2 xs:-translate-x-1/2 md:relative md:bottom-[unset] md:left-[unset] md:-translate-x-[unset] gap-1 bg-background border-t xs:rounded-none md:rounded-full xs:w-full md:w-[unset]">
              <TabsTrigger
                value="todo"
                className="xs:flex xs:flex-col md:flex-row group border border-slate-50/10 dark:border-gray-900/10 rounded-full md:dark:data-[state=active]:border-blue-500 md:dark:data-[state=active]:text-blue-500 md:dark:data-[state=active]:bg-blue-900/30"
              >
                <BookText
                  className="md:-ms-0.5 md:me-1.5 opacity-60"
                  size={window.innerWidth < 768 ? 24 : 16}
                  aria-hidden="true"
                />
                Free
                <Badge
                  className="xs:hidden md:block bg-primary dark:bg-blue-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                  variant="secondary"
                >
                  {todoTasks.length}
                </Badge>
              </TabsTrigger>

              <TabsTrigger
                value="pending"
                className="xs:flex xs:flex-col md:flex-row group border border-slate-50/10 dark:border-gray-900/10 rounded-full md:dark:data-[state=active]:border-blue-500 md:dark:data-[state=active]:text-blue-500 md:dark:data-[state=active]:bg-blue-900/30"
              >
                <Coins
                  className="md:-ms-0.5 md:me-1.5 opacity-60"
                  size={window.innerWidth < 768 ? 24 : 16}
                  aria-hidden="true"
                />
                <span>Subscription</span>
                <Badge
                  className="xs:hidden md:block bg-primary dark:bg-blue-500 text-primary-foreground ms-2 min-w-5 rounded-full transition-opacity group-data-[state=inactive]:opacity-50 dark:group-data-[state=inactive]:bg-white"
                  variant="secondary"
                >
                  {pendingTasks.length}
                </Badge>
              </TabsTrigger>
            </TabsList>
            <div id="onboard-checklist" className="xs:mt-2 sm:mt-0">
              <div className="flex items-center gap-2 xs:w-full sm:w-96 md:w-full">
                <div className="relative w-full lg:w-80">
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
                          <span className="text-xs">
                            {isSafari ? "⌘" : "Ctrl"}
                          </span>
                        </kbd>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          <span className="text-xs">K</span>
                        </kbd>
                      </div>
                    </div>
                  </button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Filter className="size-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64" align="end">
                    <DropdownMenuLabel className="font-bold">Filtering</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        This week
                        <DropdownMenuShortcut>⇧</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Last week
                        <DropdownMenuShortcut>⇧</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Next month
                        <DropdownMenuShortcut>⇧</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    {/*<DropdownMenuSeparator />*/}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <TabsContent value="todo" className="mt-6 mb-20">
            <TaskGrid tasks={todoPaginated.items} />
            {todoPaginated.totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <PaginationComponent
                  currentPage={pagination.todo}
                  totalPages={todoPaginated.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </TabsContent>
          <TabsContent value="pending" className="mt-6 mb-20">
            <TaskGrid tasks={pendingPaginated.items} />
            {pendingPaginated.totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <PaginationComponent
                  currentPage={pagination.pending}
                  totalPages={pendingPaginated.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </TabsContent>
          <TabsContent value="completed" className="mt-6 mb-20">
            <TaskGrid tasks={completedPaginated.items} />
            {completedPaginated.totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <PaginationComponent
                  currentPage={pagination.completed}
                  totalPages={completedPaginated.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </TabsContent>
        </Tabs>
        {
          typeof window !== "undefined" && window.innerWidth < 768 ? (
            <Drawer open={openCommand} onOpenChange={setOpenCommand}>
              <DrawerContent className="p-4">
                <DrawerHeader className="pb-4">
                  <DrawerTitle>
                    Search for available courses
                  </DrawerTitle>
                  <DrawerDescription className="text-sm text-muted-foreground">
                    All courses will appear below so learn anything.
                  </DrawerDescription>
                </DrawerHeader>

                {/* Search Input */}
                <Input
                  placeholder="Search onboarding tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-sm border border-input focus-visible:ring-2 focus-visible:ring-blue-500 text-sm"
                />

                <ScrollArea className="mt-4 h-[200px]">
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
          )
        }
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
  const colorMap = {
    pink: "bg-pink-100 text-pink-700 border-pink-700",
    green:
      "bg-green-100 text-green-700 border-green-700 dark:bg-green-700/20 dark:text-green-600 dark:border-green-600",
    red:
      "bg-red-100 text-red-700 border-red-700 dark:bg-red-600/20 dark:text-red-600 dark:border-red-600",
    blue:
      "bg-blue-100 text-blue-500 border-blue-500 dark:bg-blue-600/20 dark:text-blue-600 dark:border-blue-600",
    default:
      "bg-gray-100 text-gray-700 border-gray-700 dark:bg-gray-600/20 dark:text-gray-600 dark:border-gray-600",
  }

  const badgeColor =
    colorMap[task.categoryColor] || colorMap.default

  return (
    <Link to="/dashboard/course/1234567890">
      <Card className="hover:shadow-md hover:border-gray-300 transition-colors dark:hover:border-blue-500 py-0 border shadow-none p-2 rounded-xl h-fit">
        <CardContent className="space-y-3 p-2 border border-gray-100 dark:border-gray-700/20 rounded-xl">
          <div className="xs:h-[148px] lg:h-[200px] mb-4">
            <img src="https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgQhP8bAH1zD6Rg7Fh3sAdVwjO4BxbtPWk58iU"
              alt="Banner for courses"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg leading-tight">
              {task.title}
            </h3>
            <Badge variant="secondary" className={`w-fit text-xs font-medium ${badgeColor}`}>
              {task.category}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {task.description}
          </p>

          <div className="flex items-center gap-2 text-sm pt-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>
              Due Date:{" "}
              <span className="text-foreground font-medium">
                {task.dueDate}
              </span>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={page === currentPage}
              className="cursor-pointer"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
