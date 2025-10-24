import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/original-tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { User, Medal, UserPen, Verified } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { toast } from "sonner"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function ProfilePage() {
  const [newsLetter, setNewsLetter] = useState(false)
  function handleNewsLetter(value) {
    setNewsLetter(value)

    if (value) {
      toast.success("Subscribed to our newsletter!")
    } else {
      toast.info("Unsubscribed to our newsletter successfully!")
    }
  }

  return (
    <div id="profile-page">
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-9 px-12 text-white ">
        <div className="lg:container lg:mx-auto flex xs:flex-col lg:flex-row xs:items-center lg:items-start gap-4">
          <Avatar className="size-24 border-4 border-slate-50">
            <AvatarImage src="https://github.com/roelskie.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col xs:items-center lg:items-start gap-2">
            <span>How's going?</span>
            <h1 className="xs:text-2xl lg:text-4xl font-medium tracking-tighter">Kenneth Obsequio</h1>
            <Badge variant="secondary">Learner</Badge>
          </div>
        </div>
      </div>
      <div className="xs:p-6 lg:px-12 lg:py-9">
        <div className="lg:container lg:mx-auto">
          <Tabs defaultValue="tab-1">
            <TabsList>
              <TabsTrigger value="tab-1">
                <User /> Profile
              </TabsTrigger>
              <TabsTrigger value="tab-2">
                <Medal /> Achievements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab-1">
              <div className="flex flex-col gap-8 mt-6">
                <h1 className="text-2xl tracking-tighter">Basic Information</h1>
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="">First Name<span>*</span></Label>
                    <Input type="text" placeholder="First name" defaultValue="Kenneth" className="w-full bg-background text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="">Last Name<span>*</span></Label>
                    <Input type="text" placeholder="Last name" defaultValue="Obsequio" className="w-full bg-background text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="">Country<span>*</span></Label>
                    <Select>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent className="font-geist">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="">State<span>*</span></Label>
                    <Select>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent className="font-geist">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <h1 className="text-2xl tracking-tighter">Contact Information</h1>
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="flex flex-col col-span-2 gap-2">
                    <Label htmlFor="">Email address<span>*</span></Label>
                    <div className="xs:flex xs:flex-col lg:flex-row lg:inline-flex gap-2">
                      <Input type="text" placeholder="First name" defaultValue="obsequio.kenneth.ampoloquio@gmail.com" className="w-full bg-background text-sm" disabled />
                      <Button>
                        <UserPen /> Change email
                      </Button>
                    </div>
                  </div>

                </div>

                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="bg-background border p-6 space-y-3 rounded-lg flex flex-col col-span-3 gap-2">
                    <div className="flex items-center w-full justify-between">
                      <h1 className="text-xl tracking-tighter">Subscribe to our Newsletter</h1>
                      <Switch
                        checked={newsLetter}
                        onCheckedChange={handleNewsLetter}
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <Label htmlFor="newsletter" className="text-muted-foreground leading-relaxed">
                        I would like to receive communications and updates about the program, including information about functionality and learning offerings from Philproperties Inc. I understand I can unsubscribe at any time.
                      </Label>
                    </div>
                  </div>

                </div>

              </div>

            </TabsContent>
            <TabsContent value="tab-2">
              <div className="flex flex-col gap-8 mt-6">
                <h1 className="text-2xl tracking-tighter">Badges (3)</h1>
                <div className="grid xs:grid-cols-3 lg:grid-cols-8 gap-4">
                  <Popover>
                    <PopoverTrigger>
                      <div className="bg-background p-2 rounded-lg border cursor-pointer hover:border-blue-500 transition-colors">
                        <img src="/badges/philpro-2.png" alt="hehehee" className="rounded-lg" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent align="end" side="right" className="space-y-3 font-geist">
                      <div className="flex items-center gap-2">
                        <Avatar className="size-6">
                          <AvatarImage src="/badges/philpro-2.png" />
                          <AvatarFallback>PH</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">Become a Sales Marketer</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                      <div className="flex items-center text-blue-500 gap-2">
                        <Verified className="size-4" />
                        <span className="text-sm font-medium">Verified by Philproperties</span>
                      </div>

                    </PopoverContent>
                  </Popover>

                </div>
                <h1 className="text-2xl tracking-tighter">Certificates (4)</h1>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-background p-2 rounded-lg space-y-2 border">
                    <div className="h-[120px]">
                      <img src="/badges/philpro-1.png" alt="hehehee" className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Avatar className="border">
                        <AvatarImage src="https://github.com/roelskie.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="text-sm text-muted-foreground">CC106 | Become a Sales Consultant</p>
                    </div>
                    <div className="text-sm">
                      <h1 className="font-bold text-lg">Course Mastery</h1>
                      <p className="text-muted-foreground">Expiration Date: December 2026</p>
                    </div>
                  </div>
                </div>

              </div>


            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
