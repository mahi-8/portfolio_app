// footer lopgo to move to top

import { CalendarIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card_ui"
import { NavbarLogo } from "./navBar"
import { link } from "fs"

export function HoverCardFunc() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={"link"}><NavbarLogo /></Button>
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        align="center"
        sideOffset={10}
        className="relative w-auto h-auto p-4 rounded-lg bg-[#1DA1F2]
          text-[#F5F5F5] shadow-xl border border-white 
          animate-in fade-in slide-in-from-left-3 duration-200
          text-sm font-medium "
      >
        <h4 className="text-sm font-semibold text-white">
            <span
          aria-hidden
          className="
            absolute -top-1 left-1/2 -translate-x-1/2
            w-2.5 h-2.5 bg-[#1DA1F2] text-white rotate-45
            border-l border-t border-white/10
            rounded-[2px] 
          "
        />
          To Top
        </h4>
      </HoverCardContent>
    </HoverCard>
  )
}
