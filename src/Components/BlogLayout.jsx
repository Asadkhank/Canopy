import React, { useEffect } from "react";
import pic from '../assets/Cherries.avif';
const BlogLayout = () => {
  useEffect(() => {
    document.title = "My Blog - Fresh and Sustainable"; // Change to your desired page title
  }, []);

  const blogPosts = [
    {
      id: 1,
      date: "April 4, 2023",
      title: "Buying Fresh, Buying Sustainable",
      description:
        "We as consumers can decide what we buy and support sellers who focus on eco-friendly products.",
      image:
        pic, // Replace with actual image URLs
      tags: ["Read more"],
    },
    {
      id: 2,
      date: "December 5, 2023",
      title: "Fruits Of Your Labor",
      description:
        "Chances are you already grow your own. Recent studies indicate that this summer’s bountiful offer...",
      image:
        pic, // Replace with actual image URLs
      tags: ["Health", "Recipes"],
    },
    {
      id: 3,
      date: "September 12, 2023",
      title: "Getting Up and Out The Easy Way",
      description:
        "Stop dreading the small routines at the day and start taking control of your mornings...",
      image:
       pic, // Replace with actual image URLs
      tags: ["Wellness", "Tips"],
    },
    {
      id: 4,
      date: "June 12, 2023",
      title: "Relax And Unwind After A Hectic Day",
      description:
        "Whether you want to do a little DIY lighting or get some quick recipes, these tips can help...",
      image:
        pic, // Replace with actual image URLs
      tags: ["Relaxation", "Tips"],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Main Featured Post */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 text-sm">{blogPosts[0].date}</p>
          <h2 className="text-3xl font-semibold my-2">{blogPosts[0].title}</h2>
          <p className="text-gray-700 mb-4">{blogPosts[0].description}</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md w-max">
            {blogPosts[0].tags[0]}
          </button>
        </div>
      </div>

      {/* Other Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h3 className="font-semibold text-lg my-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
              <div className="flex gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 mx-1 bg-gray-100 text-gray-600 rounded-md">
          Previous
        </button>
        <button className="px-4 py-2 mx-1 bg-yellow-500 text-white rounded-md">
          1
        </button>
        <button className="px-4 py-2 mx-1 bg-gray-100 text-gray-600 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogLayout;
