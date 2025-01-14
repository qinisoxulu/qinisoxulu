'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import ProjectCard from './ProjectCard'
import BlogPostCard from './BlogPostCard'
import ResumeSection from './ResumeSection'

interface Project {
  id: number
  name: string
  description: string
  homepage: string
  html_url: string
  updated_at: string
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface ClientHomeProps {
  projects: Project[]
}

export default function ClientHome({ projects }: ClientHomeProps) {
  const { toast } = useToast()
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // First visit check
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem('hasVisited', 'true');
    } else {
      setIsFirstVisit(false);
    }
  
    // Only show the toast on the first visit
    if (!hasVisited) {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my projects and blog posts.",
      });
    }
  
    // Check if the device is mobile based on the window width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Immediately call it to set the initial state
    window.addEventListener('resize', checkMobile);
  
    // Load blog posts from localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setBlogPosts(posts);
  
    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [toast]); // Empty dependency array ensures this effect runs only once on mount
  

  const displayedBlogPosts = isMobile ? blogPosts.slice(0, 5) : blogPosts.slice(0, 10)

  return (
    <div className="space-y-12">
        <section className="text-center py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg relative overflow-hidden">
            {/* <img 
            src="/path/to/your/data-science-image.jpg" 
            alt="Data Science" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            /> */}
            <div className="relative z-10">
            <h1 className="text-5xl font-extrabold mb-6">Welcome to My Portfolio</h1>
            <p className="text-xl font-light max-w-3xl mx-auto">
                I&apos;m a software developer student at WeThinkCode, passionate about app development, data analytics, and blockchain (web3).
            </p>
            </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
            <p className="mb-6 text-gray-700">
            As a student at WeThinkCode, I&apos;m constantly learning and improving my skills in software development. 
            My main areas of interest are:
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600 space-y-2">
            <li>App Development (Mobile and Web)</li>
            <li>Data Analytics</li>
            <li>Blockchain and Web3 Technologies</li>
            </ul>
            <p className="text-gray-700">
            I&apos;m always eager to take on new challenges and collaborate on innovative projects. 
            Feel free to reach out if you&apos;d like to work together or just chat about technology!
            </p>
        </section>

        <ResumeSection />

        <section className="mt-12">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">Latest Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.name}
                description={project.description || ''}
                // readMoreLink={`/projects/${project.name}`}
                liveLink={project.homepage || undefined}
                githubLink={project.html_url}
                lastUpdated={project.updated_at}
                />
            ))}
            </div>
        </section>

        <section className="mt-12">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedBlogPosts.map((post) => (
                <BlogPostCard
                key={post.id}
                title={post.title}
                excerpt={post.content.substring(0, 150) + '...'}
                date={new Date(post.date).toLocaleDateString()}
                link={`/blog/${post.id}`}
                />
            ))}
            </div>
            <div className="text-center mt-6">
            <Link href="/blog" className="text-blue-600 hover:underline font-semibold text-lg">View all blog posts</Link>
            </div>
        </section>

        <section className="flex justify-center space-x-6 mt-8">
            <Link href="https://github.com/qinisonhlakaniphoxulu" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-all duration-200">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
            </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-all duration-200">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
            </Button>
            </Link>
        </section>

        <Dialog open={isFirstVisit} onOpenChange={setIsFirstVisit}>
            <DialogContent className="bg-white p-8 rounded-lg shadow-lg">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">Welcome to my portfolio!</DialogTitle>
                <DialogDescription className="text-gray-600 mt-2">
                Thank you for visiting. Here you can find information about my projects, blog posts, and background. 
                Feel free to explore and don&apos;t hesitate to reach out if you have any questions!
                </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setIsFirstVisit(false)} className="mt-6 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
                Got it, thanks!
            </Button>
            </DialogContent>
        </Dialog>
    </div>

  )
}

