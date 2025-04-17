
import { BlogPost } from "@/types/BlogPost";
import post1 from "@/blog-posts/ai-customer-support.md?raw";
import post2 from "@/blog-posts/ai-sales-systems.md?raw";

// Parse markdown frontmatter function
const parseFrontmatter = (markdown: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) return { attributes: {}, body: markdown };
  
  const frontmatter = match[1];
  const body = markdown.replace(frontmatterRegex, '').trim();
  const attributes: Record<string, string> = {};
  
  // Parse frontmatter attributes
  const attributeRegex = /(\w+):\s*(.+)/g;
  let attributeMatch;
  while ((attributeMatch = attributeRegex.exec(frontmatter))) {
    attributes[attributeMatch[1]] = attributeMatch[2].trim();
  }
  
  return { attributes, body };
};

// Process the markdown files into BlogPost objects
const processMarkdown = (markdownContent: string, id: string): BlogPost => {
  const { attributes, body } = parseFrontmatter(markdownContent);
  
  return {
    id,
    title: attributes.title || 'Untitled Post',
    date: attributes.date || new Date().toLocaleDateString(),
    excerpt: attributes.excerpt || body.substring(0, 150) + '...',
    content: body,
    slug: attributes.slug || id
  };
};

// Process all blog posts
export const blogPosts: BlogPost[] = [
  processMarkdown(post1, '1'),
  processMarkdown(post2, '2')
];
