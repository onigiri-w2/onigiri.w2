import { Github } from "lucide-react";

export default function SocialNavigation() {
  return (
    <div className='flex items-center justify-center space-x-2 text-gray-400'>
      <div className='p-3 rounded-md hover:bg-gray-100 cursor-pointer'>
        <a href="https://github.com/onigiri-w2" target="_blank">
          <Github className='size-6' />
        </a>
      </div>
    </div>
  )

}
