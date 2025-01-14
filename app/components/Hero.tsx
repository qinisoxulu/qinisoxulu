import { useTypingEffect } from '@/hooks/useTypingEffect'

export function Hero() {
  const { displayedText, showCursor } = useTypingEffect('public class WelcomeToMyWebsite {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}')

  return (
    <div className="bg-cyan-950 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello, World!</h1>
        <div className="bg-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto relative">
          <div className="flex items-center justify-start mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-left overflow-x-auto whitespace-pre-wrap bg-gray-900 p-4 rounded">
            <code className="language-java text-cyan-300">
              {displayedText}
              {showCursor && <span className="animate-blink">|</span>}
            </code>
          </pre>
        </div>
      </div>
    </div>
  
  )
}

