"use client"

import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

const socials = [
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/remyakrishnakripa/",
    label: "Instagram",
    color: "hover:text-[#E4405F]",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://in.linkedin.com/in/remya-krishnakripa",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/coach.remyakrishnakripa/",
    label: "Facebook",
    color: "hover:text-[#1877F2]",
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    href: "https://www.youtube.com/@remyakrishnakripa",
    label: "YouTube",
    color: "hover:text-[#FF0000]",
  },
]

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socials.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full bg-white/80 backdrop-blur-sm border border-elegant-blue/10 text-elegant-blue shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 animate-slideInLeft ${social.color}`}
          style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
          title={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
