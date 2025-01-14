import { Button } from "@/components/ui/button"
import Image from "next/image"

const ResumeSection = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <div className="flex items-center space-x-2 mb-3 mt-3">
            <Image 
              src='/wethinkcode.jpg' 
              alt='logo' 
              width={40} 
              height={40} 
              className='rounded-full'
            />
            <div>
              <span>WeThinkCode - Software Development</span>
              <p className="text-sm text-gray-600">2024 - 2026</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image 
              src='/wits.png' 
              alt='logo' 
              width={40} 
              height={40} 
              className='rounded-full'
            />
            <div>
              <span>University of the Witwatersrand - BSc Computer Science</span>
              <p className="text-sm text-gray-600">2021 - 2023</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside">
            <li>JavaScript/TypeScript</li>
            <li>React/Next.js</li>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>Arduino</li>
            <li>Data Analysis</li>
            <li>Blockchain Development</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Experience</h3>
          <p>Technical Assistant - University of the Witwatersrand</p>
          <p className="text-sm text-gray-600">2023</p>
          <ul className="list-disc list-inside text-sm">
            <li>Developed temperature sensor using Arduno Kits and C++</li>
            <li>Managed and maintained 3 printers</li>
          </ul>
        </div>
      </div>
      <Button className="mt-4">Download Full Resume</Button>
    </section>
  )
}

export default ResumeSection

