import Link from 'next/link'
import { Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Qiniso Xulu. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com/qiniso.xulu01/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

