import * as React from "react"
import {
  siInstagram,
  siFacebook,
} from "simple-icons"

interface SocialIconProps {
  icon: "instagram" | "facebook"
  className?: string
}

const iconMap = {
  instagram: siInstagram,
  facebook: siFacebook,
}

export function SocialIcon({ icon, className }: SocialIconProps) {
  const iconData = iconMap[icon]

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <title>{iconData.title}</title>
      <path d={iconData.path} />
    </svg>
  )
}
