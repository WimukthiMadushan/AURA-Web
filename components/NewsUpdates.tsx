import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Business Operations",
    excerpt:
      "Discover how artificial intelligence is transforming business processes and driving unprecedented efficiency gains across industries.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "AI & Machine Learning",
    author: "Dr. Sarah Chen",
  },
  {
    title: "Robotics Revolution in Manufacturing",
    excerpt:
      "Explore the latest advances in industrial robotics and how they're reshaping manufacturing landscapes worldwide.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Robotics",
    author: "Michael Rodriguez",
  },
  {
    title: "DevOps Best Practices for 2024",
    excerpt:
      "Learn the essential DevOps strategies and tools that will drive your development team's success in the coming year.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "DevOps",
    author: "Alex Thompson",
  },
];

const NewsUpdates = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and innovations from
            the world of technology and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-sm text-primary mb-4">
                  <span className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    By {post.author}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
