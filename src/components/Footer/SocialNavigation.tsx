import { Github, Mail } from "lucide-react";

export default function SocialNavigation() {
  return (
    <div className='flex items-center justify-center space-x-xs text-text-secondary'>
      <div className='size-12 rounded-md hover:bg-surface-subtle cursor-pointer flex items-center justify-center'>
        <a href="https://github.com/onigiri-w2" target="_blank">
          <Github className='size-6' strokeWidth={1.5} />
        </a>
      </div>
      <div className='size-12 rounded-md hover:bg-surface-subtle cursor-pointer flex items-center justify-center'>
        <a href="mailto:onigiri.w2@gmail.com" target="_blank">
          <Mail className='size-6' strokeWidth={1.5} />
        </a>
      </div>
    </div>
  )

}
