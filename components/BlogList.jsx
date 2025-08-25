import React from "react";

const blogs = [
  {
    title: "How AI is Changing Design",
    desc: "Explore how AI tools like Leonardo.ai are changing how we create digital experiences.",
    date: "August 1, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
  {
    title: "Top 5 Tools for Creative Professionals",
    desc: "An in-depth comparison of modern tools helping artists and designers innovate faster.",
    date: "July 25, 2025",
  },
];

const BlogList = () => {
  return (
    <section className="bg-transparent text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-800 p-6 bg-gray-900 hover:shadow-[0_0_20px_#13FFAA55] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-400 mb-3">{blog.desc}</p>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
