import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogPostProps {
  post: {
    title: string
    date: string
    tags: string[]
    readTime: string
    content: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  // #region agent log
  try {
    fetch('http://127.0.0.1:7908/ingest/90c0fce3-ce62-487a-a177-b19951fd801d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'bc9442'},body:JSON.stringify({sessionId:'bc9442',runId:process.env.NEXT_PHASE||process.env.NODE_ENV||'unknown',hypothesisId:'H3',location:'components/blog-post.tsx:BlogPost',message:'BlogPost component invoked (server)',data:{title:post.title,contentLength:post.content.length,hasEmphasisMarker:post.content.includes('*')||post.content.includes('_')},timestamp:Date.now()})}).catch(()=>{})
  } catch {}
  // #endregion agent log

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        {/* #region agent log */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{fetch('http://127.0.0.1:7908/ingest/90c0fce3-ce62-487a-a177-b19951fd801d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'bc9442'},body:JSON.stringify({sessionId:'bc9442',runId:(window.__blogRunId||'pre-fix'),hypothesisId:'H1',location:'components/blog-post.tsx:render',message:'Rendering markdown content',data:{contentLength:${post.content.length},hasAsterisk:${post.content.includes("*")}},timestamp:Date.now()})}).catch(()=>{})}catch(e){}})();`,
          }}
        />
        {/* #endregion agent log */}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />,
            h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-white" {...props} />,
            h3: (props) => <h3 className="text-xl font-medium mt-4 mb-2 text-white" {...props} />,
            p: (props) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
            li: (props) => <li className="ml-4" {...props} />,
            em: (props) => <em className="italic" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
