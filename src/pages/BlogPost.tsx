
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, ArrowLeft } from "lucide-react";
import { marked } from "marked";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
    }
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;

  const contentHtml = marked(post.content);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <section className="section-padding relative pt-32">
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={() => navigate("/blog")} 
              className="inline-flex items-center text-ovnilab-teal hover:text-ovnilab-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </button>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-ovnilab-cream mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              {post.title}
            </h1>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
