'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ExternalLink, Github, FileText } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

interface ProjectCardProps {
  title: string
  description: string
  // readMoreLink: string
  liveLink?: string
  githubLink: string
  lastUpdated: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveLink, githubLink, lastUpdated }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)
  const [readmeContent, setReadmeContent] = useState('')

  const fetchReadme = async () => {
    try {
      const response = await fetch(`/api/github/readme?repo=${title}`)
      const data = await response.json()
      if (data.content) {
        setReadmeContent(data.content)
        setIsReadMoreOpen(true)
      } else {
        throw new Error('Failed to fetch README content')
      }
    } catch (error) {
      console.error('Error fetching README:', error)
      setReadmeContent('Failed to load README content. Please try again later.')
      setIsReadMoreOpen(true)
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-4">Last updated: {formatDate(lastUpdated)}</p>
        <div className="flex space-x-2">
          <Button onClick={fetchReadme} variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Read More
          </Button>
          {liveLink && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live
              </Button>
            </Link>
          )}
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      <Dialog open={isReadMoreOpen} onOpenChange={setIsReadMoreOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{title} - README</DialogTitle>
            <DialogDescription>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub
              </Link>
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] overflow-auto">
            <div className="prose max-w-none dark:prose-invert">
              <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProjectCard

