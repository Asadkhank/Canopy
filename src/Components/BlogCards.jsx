import React from 'react';
import pic from '../assets/brooke-lark.webp';
const BlogCards = () => {
  const blogs = [
    {
      title: 'Buying Fresh, Buying Sustainable',
      description:
        'We as customers can decide when they are no longer edible by feeling and smelling them and recognising that advisory dates don’t have to be the final say.',
      tags: ['Mindfulness', 'Sustainable', 'Top Tips'],
      image: pic // Replace with actual image
    },
    {
      title: 'Waste Not, Want Not!',
      description:
        'With so much conflicting advice out there, it can be confusing to know where to start. But with small steps that lead to lasting change, making the most of what...',
      tags: ['Mindfulness', 'Sustainable', 'Top Tips', 'Zero Waste'],
      image: pic, // Replace with actual image
    },
    {
      title: 'Afterwork Meals Needn’t Be Boring',
      description:
        'Consciously ease into the transition from work mode to family mode, and use these tips to make your evening meal more relaxing and mindful.',
      tags: ['Meal time', 'Mealtimes', 'Mindful', 'Mindfulness'],
      image: pic, // Replace with actual image
    },
    {
      title: 'The Surprising Benefits Of Cherries',
      description:
        'Recent research indicates that this summer’s superfruit offers a variety of health benefits, including the four outlined below.',
      tags: ['Cherries', 'Fruit', 'Mindful', 'Mindfulness', 'Tips', 'Top Tips'],
      image: pic, // Replace with actual image
    },
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ideas & Inspiration</h2>
        <a href="#" className="text-blue-500 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
