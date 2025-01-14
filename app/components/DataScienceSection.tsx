import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { usePointerEffect } from '@/hooks/usePointerEffect'
import { BarChart, PieChart, LineChart, ScatterChart } from 'lucide-react'
import { AnimatedPython } from './AnimatedPython'

const skills = [
  { name: 'Machine Learning', icon: <BarChart className="w-6 h-6" /> },
  { name: 'Data Visualization', icon: <PieChart className="w-6 h-6" /> },
  { name: 'Statistical Analysis', icon: <LineChart className="w-6 h-6" /> },
  { name: 'Big Data', icon: <ScatterChart className="w-6 h-6" /> },
]

export function DataScienceSection() {
  const { x, y } = usePointerEffect()

  return (
    <section className="bg-cyan-950 text-white py-16 relative overflow-hidden">
      <AnimatedPython />
      <div className="container mx-auto relative pb-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skill Sets</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skills.map((skill) => (
            <Button
              key={skill.name}
              variant="outline"
              className="bg-cyan-800 text-white border-cyan-600 hover:bg-cyan-700"
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </Button>
          ))}
        </div>
        <div className="bg-cyan-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why My Skills Stand Out</h3>
          <p className="text-cyan-100">
            My skill set spans across key areas in technology, including software development, data science, and AI specialization. 
            With expertise in ReactJS, Python, Django, and Web3, I build scalable and innovative solutions. I am also adept at creating 
            applications that leverage AI and blockchain technologies, enabling me to address complex challenges in diverse industries.
          </p>
        </div>
      </div>
    </section>
  )
}

