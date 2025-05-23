"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Monitor, Gamepad2 } from "lucide-react"

export default function PlatformSelector() {
  const [platform, setPlatform] = useState("xbox")

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="xbox" className="w-full" onValueChange={setPlatform}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="xbox" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Xbox
          </TabsTrigger>
          <TabsTrigger value="playstation" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            PlayStation
          </TabsTrigger>
          <TabsTrigger value="pc" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            PC
          </TabsTrigger>
        </TabsList>

        <TabsContent value="xbox" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center">
                <Gamepad2 className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Xbox Division</h3>
              <p className="text-zinc-300 mb-4">
                Xbox
              </p>
              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700">Join Xbox Division</Button>
                <Button variant="outline" className="border-green-600 text-green-400 hover:bg-green-950/50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="playstation" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                <Gamepad2 className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">PlayStation Division</h3>
              <p className="text-zinc-300 mb-4">
                PlayStation
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">Join PlayStation Division</Button>
                <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pc" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center">
                <Monitor className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">PC Division</h3>
              <p className="text-zinc-300 mb-4">
                PC
              </p>
              <div className="flex gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Join PC Division</Button>
                <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-950/50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
