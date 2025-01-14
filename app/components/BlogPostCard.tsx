import Link from 'next/link'
import Image from 'next/image'

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  link: string
  image?: string
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, excerpt, date, link, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {image && (
        <div className="relative h-48">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Link href={link} className="text-blue-600 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard

