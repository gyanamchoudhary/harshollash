import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog';
import ScrollReveal from '@/components/ScrollReveal';

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-green-950 text-white'
                    : 'border border-green-600/30 text-green-800 hover:bg-sage-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <Link to="#" className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer duration-300 card-lift">
                  <div className="relative img-zoom-container aspect-video">
                    <img loading="lazy"
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block font-body text-xs font-semibold tracking-wider uppercase text-green-800 bg-sage-50 px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-heading text-lg text-green-950 leading-snug group-hover:text-green-800 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-green-800 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1.5 font-body text-xs text-green-800">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-xs text-green-800">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
